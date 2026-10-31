-- Milepost: accounts and progress sync. Run once in Supabase → SQL Editor.
-- One row per saved key of the app (progress of a course, plan, settings), readable and writable only by its owner.

create table if not exists public.progress (
  user_id    uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  key        text        not null check (char_length(key) between 1 and 200),
  value      text        not null check (char_length(value) <= 500000),
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);

alter table public.progress enable row level security;

drop policy if exists "progress: read own"   on public.progress;
drop policy if exists "progress: insert own" on public.progress;
drop policy if exists "progress: update own" on public.progress;
drop policy if exists "progress: delete own" on public.progress;
create policy "progress: read own"   on public.progress for select to authenticated using (auth.uid() = user_id);
create policy "progress: insert own" on public.progress for insert to authenticated with check (auth.uid() = user_id);
create policy "progress: update own" on public.progress for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "progress: delete own" on public.progress for delete to authenticated using (auth.uid() = user_id);

-- The server sets the time of every change, so wrong clocks on phones do not matter.
create or replace function public.progress_touch() returns trigger
language plpgsql set search_path = '' as $$
begin
  new.updated_at := now();
  return new;
end $$;
drop trigger if exists progress_touch on public.progress;
create trigger progress_touch before insert or update on public.progress
  for each row execute function public.progress_touch();

-- Lets a person delete their own account (and, by cascade, their progress) from the app.
create or replace function public.delete_my_account() returns void
language sql security definer set search_path = '' as $$
  delete from auth.users where id = auth.uid();
$$;
revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
