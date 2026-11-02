-- Milepost beta: invite codes for the Android beta app.
-- One code works on one phone only: the first one that uses it. Run this whole file once in SQL Editor → New query.

create table if not exists public.beta_invites (
  code         text primary key,                 -- e.g. MP-7K3Q-2Z9X
  note         text,                             -- who you gave it to
  device       text,                             -- fingerprint of the phone that activated it (a hash, not the phone's id)
  activated_at timestamptz,
  revoked      boolean not null default false,
  created_at   timestamptz not null default now()
);
-- No policies on purpose: nobody can read or change the table from the app, only through the functions below
-- (and you, from the dashboard).
alter table public.beta_invites enable row level security;

-- Called by the beta app. Answers 'ok', 'used' (already active on another phone) or 'invalid' (unknown or revoked).
create or replace function public.beta_activate(p_code text, p_device text) returns text
language plpgsql security definer set search_path = '' as $$
declare r public.beta_invites;
begin
  if p_code is null or p_device is null or length(p_device) < 16 then return 'invalid'; end if;
  select * into r from public.beta_invites where code = upper(trim(p_code)) for update;
  if not found or r.revoked then return 'invalid'; end if;
  if r.device is null then
    update public.beta_invites set device = p_device, activated_at = now() where code = r.code;
    return 'ok';
  end if;
  if r.device = p_device then return 'ok'; end if;
  return 'used';
end $$;
revoke all on function public.beta_activate(text, text) from public;
grant execute on function public.beta_activate(text, text) to anon, authenticated;

-- For you, in SQL Editor: creates a new code and returns it.  select public.beta_new_code('Marco');
create or replace function public.beta_new_code(p_note text) returns text
language plpgsql security definer set search_path = '' as $$
declare
  abc constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   -- no 0/O, no 1/I: easy to read aloud
  c text;
begin
  loop
    c := 'MP-';
    for i in 1..8 loop
      c := c || substr(abc, 1 + (get_byte(extensions.gen_random_bytes(1), 0) % 32), 1);
      if i = 4 then c := c || '-'; end if;
    end loop;
    exit when not exists (select 1 from public.beta_invites where code = c);
  end loop;
  insert into public.beta_invites (code, note) values (c, p_note);
  return c;
end $$;
revoke all on function public.beta_new_code(text) from public, anon, authenticated;
