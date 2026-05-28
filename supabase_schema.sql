create table devices (
  id uuid primary key default gen_random_uuid(),
  serial text unique not null,
  mac text,
  model text,
  type text,
  stage text,
  outcome text,
  notes text,
  created_at timestamp default now()
);