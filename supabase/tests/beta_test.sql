-- Test of supabase/beta.sql on a plain PostgreSQL (CI). Supabase already has these roles and pgcrypto in «extensions».
\set ON_ERROR_STOP on
do $$ begin
  if not exists (select 1 from pg_roles where rolname = 'anon') then create role anon; end if;
  if not exists (select 1 from pg_roles where rolname = 'authenticated') then create role authenticated; end if;
end $$;
create schema if not exists extensions;
create extension if not exists pgcrypto schema extensions;
\i supabase/beta.sql
\i supabase/beta.sql
create temp table t as select public.beta_new_code('test') as code;
do $$
declare c text; r text;
begin
  select code into c from t;
  if c !~ '^MP-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}$' then raise exception 'bad code format %', c; end if;
  r := public.beta_activate(c, 'phone-aaaaaaaaaaaaaaaa');  if r <> 'ok' then raise exception 'first phone: %', r; end if;
  r := public.beta_activate(lower(c), 'phone-aaaaaaaaaaaaaaaa'); if r <> 'ok' then raise exception 'same phone again: %', r; end if;
  r := public.beta_activate(c, 'phone-bbbbbbbbbbbbbbbb');  if r <> 'used' then raise exception 'second phone: %', r; end if;
  r := public.beta_activate('MP-ZZZZ-ZZZZ', 'phone-aaaaaaaaaaaaaaaa'); if r <> 'invalid' then raise exception 'unknown code: %', r; end if;
  r := public.beta_activate(c, 'short');                   if r <> 'invalid' then raise exception 'short device: %', r; end if;
  update public.beta_invites set revoked = true where code = c;
  r := public.beta_activate(c, 'phone-aaaaaaaaaaaaaaaa');  if r <> 'invalid' then raise exception 'revoked: %', r; end if;
  update public.beta_invites set revoked = false, device = null where code = c;
  r := public.beta_activate(c, 'phone-bbbbbbbbbbbbbbbb');  if r <> 'ok' then raise exception 'freed for a new phone: %', r; end if;
end $$;
-- the app's role can call the check but cannot read the table or make codes
set role anon;
select public.beta_activate('MP-ZZZZ-ZZZZ', 'phone-aaaaaaaaaaaaaaaa');
do $$ begin
  begin perform 1 from public.beta_invites; raise exception 'anon could read the table';
  exception when insufficient_privilege then null; end;
  begin perform public.beta_new_code('x'); raise exception 'anon could create a code';
  exception when insufficient_privilege then null; end;
end $$;
reset role;
\echo 'beta.sql: all checks passed'
