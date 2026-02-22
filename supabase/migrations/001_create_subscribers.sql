-- Create subscribers table
create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  subscribed_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.subscribers enable row level security;

-- Allow anonymous inserts (for the opt-in form)
create policy "Allow anonymous inserts"
  on public.subscribers
  for insert
  to anon
  with check (true);

-- Only authenticated/service role can read subscribers
create policy "Allow authenticated reads"
  on public.subscribers
  for select
  to authenticated
  using (true);
