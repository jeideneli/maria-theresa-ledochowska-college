-- Run this entire file in the Supabase SQL Editor.
-- Never put a service-role key in the website or this file.

create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.is_mtlc_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = (select auth.uid())
  );
$$;

revoke all on function public.is_mtlc_admin() from public;
grant execute on function public.is_mtlc_admin() to authenticated;

create table if not exists public.admission_applications (
  id uuid primary key default gen_random_uuid(),
  reference_code text not null unique,
  student_name text not null check (char_length(trim(student_name)) between 2 and 160),
  date_of_birth date not null,
  gender text not null check (gender in ('Female', 'Male')),
  entry_level text not null check (entry_level in ('Senior 1', 'Senior 2', 'Senior 3', 'Senior 5')),
  boarding_status text not null check (boarding_status in ('Boarding', 'Day')),
  previous_school text not null check (char_length(trim(previous_school)) between 2 and 200),
  uneb_index text,
  aggregate text,
  program_interest text,
  guardian_name text not null check (char_length(trim(guardian_name)) between 2 and 160),
  guardian_phone text not null check (char_length(trim(guardian_phone)) between 5 and 40),
  guardian_email text,
  residence text,
  status text not null default 'new' check (status in ('new', 'reviewing', 'contacted', 'closed')),
  created_at timestamptz not null default now()
);

create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 2 and 160),
  email text not null check (char_length(trim(email)) between 5 and 254),
  phone text check (phone is null or char_length(phone) <= 40),
  subject text not null check (char_length(trim(subject)) between 2 and 120),
  message text not null check (char_length(trim(message)) between 10 and 5000),
  status text not null default 'new' check (status in ('new', 'reviewing', 'replied', 'closed')),
  created_at timestamptz not null default now()
);

create table if not exists public.news_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  category text not null,
  date_label text not null,
  title text not null,
  summary text not null,
  image_url text not null,
  author text not null,
  content text not null,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null unique,
  category text not null,
  description text not null default '',
  image_url text not null,
  sort_order integer not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (char_length(trim(email)) between 5 and 254),
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists news_posts_set_updated_at on public.news_posts;
create trigger news_posts_set_updated_at
before update on public.news_posts
for each row execute function public.set_updated_at();

drop trigger if exists gallery_items_set_updated_at on public.gallery_items;
create trigger gallery_items_set_updated_at
before update on public.gallery_items
for each row execute function public.set_updated_at();

alter table public.admin_users enable row level security;
alter table public.admission_applications enable row level security;
alter table public.contact_inquiries enable row level security;
alter table public.news_posts enable row level security;
alter table public.gallery_items enable row level security;
alter table public.newsletter_subscribers enable row level security;

drop policy if exists "Admins can read their own admin record" on public.admin_users;
create policy "Admins can read their own admin record"
on public.admin_users for select to authenticated
using (user_id = (select auth.uid()));

drop policy if exists "Public can submit applications" on public.admission_applications;
create policy "Public can submit applications"
on public.admission_applications for insert to anon, authenticated
with check (status = 'new');
drop policy if exists "Admins can manage applications" on public.admission_applications;
create policy "Admins can manage applications"
on public.admission_applications for all to authenticated
using ((select public.is_mtlc_admin()))
with check ((select public.is_mtlc_admin()));

drop policy if exists "Public can submit contact inquiries" on public.contact_inquiries;
create policy "Public can submit contact inquiries"
on public.contact_inquiries for insert to anon, authenticated
with check (status = 'new');
drop policy if exists "Admins can manage contact inquiries" on public.contact_inquiries;
create policy "Admins can manage contact inquiries"
on public.contact_inquiries for all to authenticated
using ((select public.is_mtlc_admin()))
with check ((select public.is_mtlc_admin()));

drop policy if exists "Public can read published news" on public.news_posts;
create policy "Public can read published news"
on public.news_posts for select to anon, authenticated
using (published);
drop policy if exists "Admins can manage news" on public.news_posts;
create policy "Admins can manage news"
on public.news_posts for all to authenticated
using ((select public.is_mtlc_admin()))
with check ((select public.is_mtlc_admin()));

drop policy if exists "Public can read published gallery items" on public.gallery_items;
create policy "Public can read published gallery items"
on public.gallery_items for select to anon, authenticated
using (published);
drop policy if exists "Admins can manage gallery" on public.gallery_items;
create policy "Admins can manage gallery"
on public.gallery_items for all to authenticated
using ((select public.is_mtlc_admin()))
with check ((select public.is_mtlc_admin()));

drop policy if exists "Public can subscribe to newsletter" on public.newsletter_subscribers;
create policy "Public can subscribe to newsletter"
on public.newsletter_subscribers for insert to anon, authenticated
with check (true);
drop policy if exists "Admins can manage newsletter subscriptions" on public.newsletter_subscribers;
create policy "Admins can manage newsletter subscriptions"
on public.newsletter_subscribers for all to authenticated
using ((select public.is_mtlc_admin()))
with check ((select public.is_mtlc_admin()));

grant usage on schema public to anon, authenticated;
grant insert on public.admission_applications to anon, authenticated;
grant insert on public.contact_inquiries to anon, authenticated;
grant insert on public.newsletter_subscribers to anon, authenticated;
grant select on public.news_posts, public.gallery_items to anon, authenticated;
grant select, insert, update, delete on public.admin_users to authenticated;
grant select, insert, update, delete on public.admission_applications to authenticated;
grant select, insert, update, delete on public.contact_inquiries to authenticated;
grant select, insert, update, delete on public.news_posts to authenticated;
grant select, insert, update, delete on public.gallery_items to authenticated;
grant select, insert, update, delete on public.newsletter_subscribers to authenticated;

insert into public.news_posts
  (slug, category, date_label, title, summary, image_url, author, content, published)
values
  ('registration-in-progress', 'Admissions', 'Active Intake',
   'Registration in Progress at the School Campus — UNEB Center No. U2779',
   'Scholars arrive and move across campus as admissions and registration are underway for Senior One, Senior Five, and continuing transfer students.',
   'assets/images/Maria Theresa College Group Photo.png', 'Office of the Admissions Registrar',
   'Maria Theresa Ledochowska College – Lugazi announces that registration is currently in progress at the school campus for both O-Level (S.1 - S.4) and A-Level (S.5 - S.6).' || E'\n\n' ||
   'As an accredited UNEB Center (Center No. U2779), MTLC Lugazi is committed to providing quality all-round education, spiced by Christian values, to produce responsible and God-fearing citizens.' || E'\n\n' ||
   'Parents and guardians are cordially invited to visit the school campus in Lugazi (P. O. Box 258, Lugazi) to secure admission vacancies.' || E'\n\n' ||
   'For details, contact the Office Landline: 0392 946071, Mobile / WhatsApp: +256 (0) 772 450 925, or mariatheresalego@gmail.com.',
   true),
  ('annual-inter-house-sports', 'Sports', 'Recent Event',
   'Annual Inter-House Sports & Track Championships Draw Record Crowds',
   'MTLC athletes moving at full speed across track and field events in fierce inter-house athletic competition.',
   'assets/images/sports.jpg', 'Sports Department',
   'Students at Maria Theresa Ledochowska College showcased extraordinary speed, stamina, and team spirit during the annual Inter-House Sports and Athletics Championships.' || E'\n\n' ||
   'The competition brought together students from St. Theresa, St. Joseph, St. Augustine, and St. Jude houses, competing in track sprints, middle-distance races, relays, and field athletics.' || E'\n\n' ||
   'The college administration commended all athletes and sports teachers for championing physical health and discipline.',
   true),
  ('mdd-cultural-gala', 'Events', 'Cultural Week',
   'Music, Dance & Drama (MDD) Cultural Gala Celebrates Ugandan Heritage',
   'Students moving and dancing in vibrant traditional attire during the thrilling annual cultural gala and music festival.',
   'assets/images/music dance and drama.jpg', 'Cultural & Arts Committee',
   'The Maria Theresa Ledochowska College campus erupted in color and rhythm as students celebrated the annual Cultural Gala and MDD festival.' || E'\n\n' ||
   'Scholars performed traditional folk dances from across Uganda, staging impressive choreography, theatrical skits, and choral music that highlighted cultural diversity and Christian unity.',
   true),
  ('student-leadership-induction', 'Academic', 'Campus Update',
   'Student Leadership Guild Induction & General Assembly',
   'The student body moving together in disciplined assembly on campus grounds as new prefectorial leaders are sworn in.',
   'assets/images/DSC_1170.JPG', 'Dean of Students',
   'Maria Theresa Ledochowska College conducted a grand student assembly and leadership swearing-in ceremony on campus grounds.' || E'\n\n' ||
   'The newly inducted student council pledged to uphold the college motto, Learning Today... Leading Tomorrow, by fostering peer discipline, academic diligence, and moral integrity.',
   true)
on conflict (slug) do nothing;

insert into public.gallery_items (title, category, description, image_url, sort_order, published)
values
  ('Science Laboratory & Practical Chemistry', 'Academics', 'Students conducting chemistry and biology practical investigations in the modern science laboratory.', 'assets/images/science lab.png', 1, true),
  ('College Student Body & Uniform Assembly', 'Students', 'Scholars of Maria Theresa Ledochowska College in neat royal blue school uniforms on campus parade.', 'assets/images/Maria Theresa College Group Photo.png', 2, true),
  ('Computer Laboratory & ICT Practicals', 'Academics', 'Students engaged in computer studies, typing, and digital research in the modern ICT laboratory suite.', 'assets/images/Focused Students in a Bright Computer Lab.png', 3, true),
  ('Central College Library & Reading Corner', 'Academics', 'Focused study and reference work in the collegiate library surrounded by extensive book collections.', 'assets/images/Bright School Library Reading Corner.png', 4, true),
  ('Vocational Tailoring & Skilling Workshop', 'Campus', 'Hands-on vocational skilling and garment construction in our well-equipped tailoring training suite.', 'assets/images/Bright African Sewing Class Workshop.png', 5, true),
  ('Physics, Chemistry & Biology Practical Sessions', 'Academics', 'Science practical sessions and experimental investigations guided by science educators.', 'assets/images/DSC_1161.JPG', 6, true),
  ('Humanities, Debate & Student Mentorship', 'Campus', 'Civic education, seminar presentations, and student mentorship sessions.', 'assets/images/DSC_1167.JPG', 7, true),
  ('Inter-House Athletics & Sports Championships', 'Sports', 'Vibrant athletics and sports activities during inter-house championships in Lugazi.', 'assets/images/sports.jpg', 8, true),
  ('Student Community Assembly & Fellowship', 'Students', 'Scholars gathered on campus for school assembly, values formation, and leadership mentoring.', 'assets/images/DSC_1170.JPG', 9, true),
  ('Cultural Gala, MDD & School Celebrations', 'Events', 'Students celebrating cultural heritage and faith through music, dance, and drama.', 'assets/images/music dance and drama.jpg', 10, true),
  ('Official College Prospectus & Admissions Brochure', 'Campus', 'Official Maria Theresa Ledochowska College prospectus and UNEB Center U2779 admissions guide.', 'assets/images/flyer.jpg', 11, true),
  ('MTLC Computer Laboratory', 'Academics', 'Computer workstations in the college ICT learning space.', 'assets/images/computer-lab.jpeg', 12, true),
  ('Covered Campus Passage', 'Campus', 'A sheltered walkway connecting the college campus buildings.', 'assets/images/passway.jpeg', 13, true),
  ('Sick Bay and Skilling Room', 'Campus', 'The college building housing student wellbeing and practical-skills spaces.', 'assets/images/sick-bay-and-skilling-room.jpeg', 14, true),
  ('College Reading Room', 'Academics', 'Bookshelves and study space in the college reading room.', 'assets/images/reading room.jpeg', 15, true),
  ('Students in the College Compound', 'Campus', 'Students walking through the college compound with campus buildings in the background.', 'assets/images/students-in-the-compound.jpeg', 16, true)
on conflict (title) do nothing;

-- After creating the first administrator through Supabase Auth, grant admin
-- access by replacing the UUID below with that user's Auth ID:
-- insert into public.admin_users (user_id) values ('YOUR-AUTH-USER-UUID');
