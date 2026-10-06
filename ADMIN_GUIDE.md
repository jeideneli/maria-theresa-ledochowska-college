# Website Content & Administration Guide
**Maria Theresa Ledochowska College – Lugazi**
*Motto: “Learning Today... Leading Tomorrow”*
*P. O. Box 258, Lugazi, Uganda*
*UNEB CENTER NO. U2779*

---

## Welcome to Your College Website!

This website has been built as a **complete 9-page multi-page website**. Most reference content is in `js/site-content.js`; submitted applications, contact enquiries, newsletter subscriptions, and editable news/gallery content use Supabase.

📁 `js/site-content.js`  
📁 `supabase/schema.sql`

The Supabase tables are created by running the SQL setup below. The protected admin page is `admin.html`; it requires an authorized Supabase Auth account.

## Supabase Setup

1. Open the Supabase project dashboard and select **SQL Editor**.
2. Open `supabase/schema.sql`, copy its contents into a new SQL query, and run it. This creates the tables, initial news/gallery entries, and row-level security policies.
3. In **Authentication → Users**, create an administrator account using a school-controlled email address and a strong password.
4. Copy that user's ID from the Auth users list. In the SQL Editor, run the following with the actual UUID:

   ```sql
   insert into public.admin_users (user_id)
   values ('YOUR-AUTH-USER-UUID');
   ```

5. Visit `/admin.html` on the deployed website and sign in with that account. The admin page can manage news and gallery entries and review applications and contact enquiries.
6. News and gallery image paths can be existing website paths such as `assets/images/computer-lab.jpeg`. To add a new image, upload the file to the website's `assets/images/` folder before publishing its path.

The public website uses only the Supabase Project URL and **publishable** key in `js/supabase-client.js`. Never put a database password, secret key, or service-role key in website files. Row-level security prevents public users from reading applications, enquiries, or newsletter email addresses. Only an authorized admin can view or edit those records.

To change other reference content—such as school details, programs, FAQs, or statistics—edit `js/site-content.js`.

---

## Multi-Page Website Architecture

The website consists of **9 dedicated HTML pages**, linked seamlessly together with persistent academic navigation, active page highlighting, mobile slide-out drawer, quick contact access, and global "Apply Now" application modals:

| Page | File | Purpose & Dynamic Sections |
| :--- | :--- | :--- |
| **Home** | [`index.html`](file:///d:/mtlc/index.html) | Grand hero banner, key statistics counters, principal's welcome note, academic pillars, featured highlights, UNEB achievements summary (Center U2779), admissions registration notice, testimonials carousel, recent news cards, interactive FAQ, and contact overview. |
| **About Us** | [`about.html`](file:///d:/mtlc/about.html) | History & heritage in Lugazi, founding legacy, official mission, vision, 7 core values grid, board of governors & senior administrative leadership profiles, modern campus facilities overview. |
| **Academics** | [`academics.html`](file:///d:/mtlc/academics.html) | UNEB curriculum overview (Center No. U2779), O-Level (UCE) subject tracks, A-Level (UACE) subject combinations (PCM, BCM, PCB, PEM, HEG, DEG, MEA, etc.), filterable academic departments, academic calendar, exam performance statistics. |
| **Admissions** | [`admissions.html`](file:///d:/mtlc/admissions.html) | "Registration in Progress at the School Campus" announcement, 6-step admissions roadmap, S.1 / S.5 / Transfer eligibility criteria, fee structure guidelines, required documents checklist, intake deadlines, embedded interactive application form, and admissions FAQ. |
| **Departments** | [`departments.html`](file:///d:/mtlc/departments.html) | Comprehensive profiles of all 8 teaching departments (Sciences, Mathematics, Languages, Humanities, Business Studies, ICT & Computer Studies, Technical Skills, Physical Education), faculty head listings, and dedicated laboratory facilities. |
| **Student Life** | [`students.html`](file:///d:/mtlc/students.html) | 12+ student clubs and academic societies, sports disciplines and trophies, student guild/prefects council structure, annual cultural gala, boarding house pastoral care, health & wellness center, and dining services. |
| **News & Events** | [`news.html`](file:///d:/mtlc/news.html) | Filterable announcements, press releases, term dates, school calendar highlights, academic competitions, sports events, and full-article modal reading reader. |
| **Photo Gallery** | [`gallery.html`](file:///d:/mtlc/gallery.html) | Filterable high-resolution campus photo gallery featuring the official campus prospectus, computer laboratory practicals, central library, and student assembly, with interactive fullscreen lightbox viewer and keyboard navigation (`←`, `→`, `Esc`). |
| **Contact Us** | [`contact.html`](file:///d:/mtlc/contact.html) | Official postal address (P. O. Box 258, Lugazi), direct landline (`0392 946071`), mobile/WhatsApp (`+256 (0) 772 450 925`), official email (`mariatheresalego@gmail.com`), office hours, interactive contact inquiry form, directions from Kampala/Jinja highways, and Google Map embed. |

---

## 1. Updating School Branding & Motto

In `js/site-content.js`, locate the `institution` section:

```javascript
institution: {
  name: "Maria Theresa Ledochowska College – Lugazi",
  shortName: "MTLC Lugazi",
  motto: "Learning Today... Leading Tomorrow",
  unebCenterNo: "U2779",
  fullUnebCenter: "UNEB CENTER NO. U2779",
  registrationNotice: "Registration in Progress at the School Campus",
  established: "2004",
  poBox: "P. O. Box 258, Lugazi",
  mission: "To provide quality all-round education, spiced by Christian values, to produce responsible and God-fearing citizens.",
  vision: "To be an academic giant in the country and produce citizens with positive impact in the transformation of society for peace and development.",
  pillars: [
    { title: "Excellence", description: "Pursuit of the highest standards in academics, arts, and athletics." },
    { title: "Discipline", description: "Cultivating self-mastery, respect, and personal accountability." },
    { title: "Knowledge", description: "Inspiring intellectual curiosity and evidence-based problem solving." },
    { title: "Leadership", description: "Empowering visionary servant leaders prepared for societal transformation." },
    { title: "Innovation", description: "Embracing science, technology, and creative solutions for our nation." }
  ]
}
```
* **To change the logo**: The college crest is located at `assets/images/logo.svg`. You can replace this file with any updated SVG, PNG, or JPG file.

---

## 2. Updating Contact Numbers, Emails & Map

Locate the `contact` section in `js/site-content.js`:

```javascript
contact: {
  phonePrimary: "0392 946071",                  // Official office landline
  phoneSecondary: "+256 (0) 772 450 925",        // Admissions WhatsApp / mobile
  emailAdmissions: "mariatheresalego@gmail.com",
  emailGeneral: "mariatheresalego@gmail.com",
  emailPrincipal: "mariatheresalego@gmail.com",
  officeHours: "Monday – Friday: 8:00 AM – 5:00 PM | Saturday: 9:00 AM – 1:00 PM",
  physicalAddress: "Lugazi Town Council, Buikwe District, Central Region, Uganda",
  poBox: "P. O. Box 258, Lugazi",
  socialLinks: {
    facebook: "https://facebook.com/MTLCLugaziOfficial",
    x: "https://x.com/MTLCLugazi",
    youtube: "https://youtube.com/@MTLCLugazi",
    linkedin: "https://linkedin.com/school/mtlc-lugazi"
  }
}
```

---

## 3. Updating Academic Programs & Subject Combinations

Locate the `academicPrograms` array in `js/site-content.js`.
To add or update curriculum details shown on [`academics.html`](file:///d:/mtlc/academics.html):

```javascript
{
  id: "sciences",
  name: "Natural Sciences & Mathematics",
  category: "Sciences",
  tagline: "Pioneering scientific inquiry, discovery, and medical foundation.",
  description: "...",
  subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Agriculture"],
  levels: ["O-Level (UCE)", "A-Level (UACE)"],
  combinations: ["PCM/ICT", "PCB/Sub-Math", "BCM/ICT", "PEM/ICT"],
  facilities: "3 modern science labs with digital Vernier sensors and fume hoods.",
  icon: "flask"
}
```

---

## 4. Updating Faculty & Departments

Locate the `departments` array in `js/site-content.js`.
To change the Head of Department or teacher name shown on [`departments.html`](file:///d:/mtlc/departments.html):

```javascript
{
  id: "dept-sciences",
  name: "Department of Sciences",
  headName: "Mr. Patrick Mukasa, M.Sc.",
  headTitle: "Head of Department (Physics & Chemistry)",
  facultyCount: 14,
  subjects: ["Physics", "Chemistry", "Biology", "Agriculture"],
  description: "Fostering analytical rigor and practical experimentation.",
  labCount: "3 Modern Laboratories"
}
```

---

## 5. Adding or Editing News & Events

Locate the `newsAndEvents` array in `js/site-content.js`.
To publish a new story shown on both [`index.html`](file:///d:/mtlc/index.html) and [`news.html`](file:///d:/mtlc/news.html):

```javascript
{
  id: "news-reg",
  category: "Admissions",
  date: "September 2026 (Active)",
  title: "Registration in Progress at the School Campus — UNEB Center No. U2779",
  summary: "Admissions and registration are currently underway at Maria Theresa Ledochowska College – Lugazi for Senior One, Senior Five, and continuing transfer students.",
  image: "assets/images/flyer.jpg",
  author: "Office of the Admissions Registrar",
  content: `Full text of the announcement appears here.`
}
```

---

## 6. Updating Gallery Photos

Locate the `gallery` array in `js/site-content.js`:

```javascript
{
  id: "gal-flyer",
  title: "Official College Prospectus & Campus Life",
  category: "Campus",
  description: "Official Maria Theresa Ledochowska College flyer showing student body assembly, computer laboratory practicals, and central library.",
  image: "assets/images/flyer.jpg"
}
```

---

## 7. Updating Testimonials

Locate the `testimonials` array in `js/site-content.js`:

```javascript
{
  id: "test-2",
  name: "Dr. Arthur Mugisha",
  role: "Parent & PTA Executive Member",
  badge: "Parent",
  quote: "Enrolling my children at MTLC Lugazi (UNEB Center U2779) is the best decision our family made. The Christian values and academic dedication give parents total confidence.",
  rating: 5
}
```

---

## 8. Deployment & Hosting Options

The website is standard, modern, zero-build HTML5/CSS3/JavaScript. It requires **no node build step, no npm compilation, and no database setup** to host:

* **Option A: Traditional CPanel / Web Hosting (e.g., MTN Uganda, Airtel Business, Bluehost, Namecheap)**:
  Upload the entire project folder to your `public_html/` directory using cPanel File Manager, Cyberduck, or FileZilla FTP.
* **Option B: Free Static Cloud Hosting (GitHub Pages, Netlify, Vercel, Cloudflare Pages)**:
  Drag-and-drop the project folder directly into Netlify Drop or Vercel, or push to GitHub and activate GitHub Pages in repository settings.
* **Option C: Offline / Local Viewing**:
  Simply double-click `index.html` (or any `.html` page) in Windows File Explorer. All navigation links and JavaScript data loaders work out of the box with zero errors.
