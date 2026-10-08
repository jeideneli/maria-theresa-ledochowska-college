/**
 * Maria Theresa Ledochowska College – Lugazi
 * Official Content Configuration File
 * 
 * =========================================================================
 * ADMINISTRATOR NOTICE:
 * You can edit all text, links, statistics, news, gallery images, and programs
 * directly in this file. Changes will automatically reflect across the entire site.
 * =========================================================================
 */

window.siteContent = {
  // 1. BRANDING & INSTITUTIONAL IDENTITY
  institution: {
    name: "Maria Theresa Ledochowska College – Lugazi",
    shortName: "MTLC Lugazi",
    motto: "Learning Today... Leading Tomorrow",
    unebCenterNo: "U2779",
    fullUnebCenter: "UNEB CENTER NO. U2779",
    registrationNotice: "Registration in Progress at the School Campus",
    established: "2004",
    poBox: "P. O. Box 258, Lugazi",
    district: "Buikwe District",
    country: "Uganda",
    corePillars: [
      "EXCELLENCE",
      "DISCIPLINE",
      "KNOWLEDGE",
      "LEADERSHIP",
      "INNOVATION"
    ],
    mission: "To provide quality all-round education, spiced by Christian values, to produce responsible and God-fearing citizens.",
    vision: "To be an academic giant in the country and produce citizens with positive impact in the transformation of society for peace and development.",
    statement: "To provide quality all-round education, spiced by Christian values, to produce responsible and God-fearing citizens."
  },

  // 2. CONTACT DETAILS & SOCIALS
  contact: {
    addressLine1: "Along Kampala-Jinja Highway",
    addressLine2: "P. O. Box 258, Lugazi, Uganda",
    location: "Lugazi Municipality, Buikwe District, Uganda",
    phonePrimary: "0392 946071",
    phoneSecondary: "+256 (0) 772 450 925",
    phoneTertiary: "+256 772 720355",
    phoneFormattedPrimary: "0392 946071",
    phoneFormattedSecondary: "+256 772 450 925",
    phoneFormattedTertiary: "+256 772 720355",
    emailAdmissions: "mariatheresalego@gmail.com",
    emailGeneral: "mariatheresalego@gmail.com",
    emailPrincipal: "mariatheresalego@gmail.com",
    officeHours: "Monday – Friday: 8:00 AM – 5:00 PM | Saturday: 9:00 AM – 1:00 PM (EAT)",
    mapCoordinates: {
      lat: 0.3774,
      lng: 32.9377,
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.983637152062!2d32.9287!3d0.3774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbf436859e995%3A0x6bcfd35cb5816da6!2sLugazi%2C%20Uganda!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug"
    },
    socialLinks: {
      facebook: "https://facebook.com/MTLCLugaziOfficial",
      x: "https://x.com/MTLCLugazi",
      instagram: "https://instagram.com/mtlc_lugazi",
      youtube: "https://youtube.com/@MTLCLugazi",
      linkedin: "https://linkedin.com/school/mtlc-lugazi"
    }
  },

  // 3. STATISTICAL ACHIEVEMENTS (Animated Counters)
  statistics: [
    { label: "Years of Excellence", value: 22, suffix: "+", icon: "award" },
    { label: "Students Enrolled", value: 1250, suffix: "+", icon: "users" },
    { label: "Qualified Educators", value: 68, suffix: "+", icon: "graduation-cap" },
    { label: "Academic Programs & Labs", value: 16, suffix: "+", icon: "book-open" },
    { label: "University Transition Rate", value: 98, suffix: "%", icon: "trending-up" }
  ],

  // 4. CORE VALUES
  coreValues: [
    {
      id: "excellence",
      title: "Academic Excellence",
      icon: "trophy",
      description: "Fostering unyielding commitment to scholarly rigor, creative thinking, and outstanding national UNEB (Center U2779) examination results."
    },
    {
      id: "integrity",
      title: "Moral Integrity & Christian Values",
      icon: "shield-check",
      description: "Cultivating Christian values, honesty, ethical conduct, transparency, and accountability to produce responsible, God-fearing citizens."
    },
    {
      id: "discipline",
      title: "Discipline",
      icon: "check-circle",
      description: "Instilling punctuality, self-mastery, constructive routines, and reverence for institutional order."
    },
    {
      id: "leadership",
      title: "Servant Leadership",
      icon: "compass",
      description: "Mentoring future civic, corporate, and community leaders who lead with empathy, humility, and purpose."
    },
    {
      id: "innovation",
      title: "ICT & Innovation",
      icon: "cpu",
      description: "Equipping young minds with 21st-century digital competencies, STEM research skills, and practical problem solving."
    },
    {
      id: "respect",
      title: "Mutual Respect",
      icon: "heart-handshake",
      description: "Embracing cultural diversity, mutual tolerance, and upholding human dignity across our collegiate family."
    },
    {
      id: "service",
      title: "Community Service",
      icon: "hand-heart",
      description: "Impacting our local Lugazi community through literacy outreaches, environmental conservation, and social responsibility."
    }
  ],

  // 5. ACADEMIC PROGRAMS
  academicPrograms: [
    {
      id: "sciences",
      name: "Natural Sciences & Mathematics",
      category: "Sciences",
      icon: "microscope",
      image: "assets/images/math.png",
      tagline: "Pioneering scientific inquiry, discovery, and healthcare pre-requisites.",
      description: "Comprehensive instruction in Physics, Chemistry, Biology, and Pure & Applied Mathematics backed by well-equipped laboratories. Prepares students for careers in Medicine, Engineering, Pharmacy, and Biotechnology under UNEB Center No. U2779.",
      subjects: ["Physics", "Chemistry", "Biology", "Pure Mathematics", "Applied Mathematics", "Agriculture"],
      levels: ["O-Level (UCE)", "A-Level (UACE - BCM, PEM, PCB, MEG)"],
      facilities: "Modern Chemistry, Physics & Biology Laboratories with specialized apparatus and Vernier measurement kits."
    },
    {
      id: "ict",
      name: "ICT & Computer Studies",
      category: "Technology",
      icon: "laptop",
      image: "assets/images/ict lab.jpeg",
      tagline: "Digital literacy, software development, and modern computer laboratory training.",
      description: "Equipping every student with high-level computer literacy, coding fundamentals, typing, and digital research skills in modern high-speed networked computer laboratories as featured in our campus prospectus.",
      subjects: ["Sub-ICT (A-Level)", "Computer Studies (O-Level)", "Digital Design & Research"],
      levels: ["O-Level (UCE)", "A-Level (Subsidiary ICT)", "Co-Curricular Certifications"],
      facilities: "High-capacity computer suites with desktop monitors, internet connectivity, and digital teaching aids."
    },
    {
      id: "languages",
      name: "Languages & Literature",
      category: "Languages",
      icon: "message-square",
      image: "assets/images/Bright School Library Reading Corner.png",
      tagline: "Mastery of written expression, oratory eloquence, and global tongues.",
      description: "Developing articulate communicators through intensive English Language mastery, Literature in English, Kiswahili, French, and Luganda. Drives students to excel in national debates and essay competitions.",
      subjects: ["English Language", "Literature in English", "Kiswahili", "French", "Luganda"],
      levels: ["O-Level (UCE)", "A-Level (UACE - Literature in English, Luganda, French)"],
      facilities: "Well-stocked Modern College Library with rich reference sections and reading halls."
    },
    {
      id: "technical",
      name: "Technical & Vocational Studies",
      category: "Vocational",
      icon: "tool",
      image: "assets/images/Bright African Sewing Class Workshop.png",
      tagline: "Hands-on engineering concepts, technical drawing, tailoring, and life skills.",
      description: "Instilling practical craftsmanship through Tailoring & Fashion Design, Technical Drawing, Woodwork concepts, Agriculture, and Fine Art, preparing learners for vocational autonomy and self-reliance.",
      subjects: ["Tailoring & Design", "Technical Drawing", "Fine Art", "Agriculture (Practical & Theory)"],
      levels: ["O-Level (UCE)", "A-Level (Technical Art & Agriculture)", "Vocational Certifications"],
      facilities: "Sewing and tailoring workshop, technical drawing design studio, and demonstration farm."
    },
    {
      id: "humanities",
      name: "Humanities & Social Sciences",
      category: "Humanities",
      icon: "globe",
      image: "assets/images/geograpy.jpg",
      tagline: "Critical inquiry into history, law, governance, and human society.",
      description: "Rigorous analytical training in History, Geography, Christian Religious Education (CRE), and Islamic Religious Education. Fosters deep analytical reasoning, public policy comprehension, and ethical leadership.",
      subjects: ["History (African & European)", "Geography", "Divinity (CRE)", "Islamic Religious Studies", "Economics"],
      levels: ["O-Level (UCE)", "A-Level (UACE - HEL, DEG, HED)"],
      facilities: "Dedicated Humanities resource center, historical archives, and MUN debate hall."
    },
    {
      id: "business",
      name: "Business Studies & Economics",
      category: "Business",
      icon: "briefcase",
      image: "assets/images/economics.jpg",
      tagline: "Empowering young entrepreneurs, financial analysts, and corporate leaders.",
      description: "Practical and theoretical training in Commerce, Entrepreneurship Education, Principles of Accounts, and Economics. Students manage real student-led micro-enterprises and participate in national business challenges.",
      subjects: ["Economics", "Entrepreneurship", "Principles of Accounts", "Commerce"],
      levels: ["O-Level (UCE)", "A-Level (UACE - MEA, HEA, DEG)"],
      facilities: "Young Entrepreneurs Incubation Hub & Junior Achievement student enterprise lab."
    }
  ],

  // 6. DEPARTMENTS & HEADS OF DEPARTMENT
  departments: [
    {
      id: "dept-sciences",
      name: "Department of Natural Sciences",
      icon: "flask",
      image: "assets/images/sciences.jpg",
      headTitle: "Faculty of Natural Sciences",
      subjects: ["Physics", "Chemistry", "Biology", "Agriculture"],
      description: "Fostering empirical scientific investigation, diagnostic problem-solving, and pre-medical academic mastery.",
      labCount: "Fully-Equipped Laboratories"
    },
    {
      id: "dept-math",
      name: "Department of Mathematics",
      icon: "calculator",
      image: "assets/images/math.png",
      headTitle: "Faculty of Mathematics",
      subjects: ["Pure Mathematics", "Applied Mathematics", "Subsidiary Mathematics"],
      description: "Nurturing quantitative reasoning, algebraic logic, mathematical modeling, and calculus fluency.",
      labCount: "Math Clinic & Problem-Solving Studio"
    },
    {
      id: "dept-languages",
      name: "Department of Languages & Literature",
      icon: "book-open",
      image: "assets/images/reading room.jpeg",
      headTitle: "Faculty of Languages & Literature",
      subjects: ["English Language", "Literature in English", "Luganda", "Kiswahili", "French"],
      description: "Developing articulate writers, eloquent debaters, critical literary analysts, and multi-lingual scholars.",
      labCount: "Language Reading Lab & Modern Library"
    },
    {
      id: "dept-humanities",
      name: "Department of Humanities & Social Sciences",
      icon: "landmark",
      image: "assets/images/geograpy.jpg",
      headTitle: "Faculty of Humanities & Social Sciences",
      subjects: ["History", "Geography", "Divinity (CRE)", "Islamic Religious Studies"],
      description: "Cultivating civic leadership, geopolitical awareness, historical analysis, and Christian ethics.",
      labCount: "Geography Map Room & Archive"
    },
    {
      id: "dept-business",
      name: "Department of Business & Commercial Studies",
      icon: "trending-up",
      image: "assets/images/commercial studies.jpg",
      headTitle: "Faculty of Business Studies",
      subjects: ["Economics", "Commerce", "Entrepreneurship", "Accounting"],
      description: "Inspiring financial literacy, business strategy, enterprise management, and national business challenge participation.",
      labCount: "Student Enterprise Incubator"
    },
    {
      id: "dept-ict",
      name: "Department of ICT & Innovation",
      icon: "code",
      image: "assets/images/ict and innovation.jpg",
      headTitle: "Faculty of ICT & Digital Innovation",
      subjects: ["Computer Studies", "Subsidiary ICT", "Web Design", "Robotics"],
      description: "Empowering every learner with computational literacy, algorithmic thinking, cloud systems, and responsible digital citizenship.",
      labCount: "Fully-Equipped Computer Lab"
    },
    {
      id: "dept-vocational",
      name: "Department of Vocational & Technical Studies",
      icon: "wrench",
      image: "assets/images/Bright African Sewing Class Workshop.png",
      headTitle: "Faculty of Vocational & Technical Studies",
      subjects: ["Tailoring & Design", "Technical Drawing", "Agriculture", "Fine Art"],
      description: "Providing hands-on vocational skills, tailoring workshop practicals, architectural drafting, and agricultural management.",
      labCount: "Tailoring Workshop & Demonstration Farm"
    },
    {
      id: "dept-sports",
      name: "Department of Physical Education & Sports",
      icon: "medal",
      image: "assets/images/sports.jpg",
      headTitle: "Physical Education & Athletics Directorate",
      subjects: ["Football", "Netball", "Athletics", "Volleyball", "Fitness"],
      description: "Developing sportsmanship, physical vigor, team cohesion, and competing at regional and national school sporting tournaments.",
      labCount: "Multi-purpose Sports Complex"
    }
  ],

  // 7. ADMISSIONS DETAILS
  admissions: {
    heroTitle: "Join the Legacy of Academic Excellence",
    subtitle: "Registration is in progress at the school campus. We welcome motivated young scholars seeking quality and all-round education.",
    unebCenterBadge: "UNEB CENTER NO. U2779",
    statusBadge: "Registration in Progress at the School Campus",
    steps: [
      {
        step: "01",
        title: "Enquire",
        description: "Visit our campus in Lugazi, call 0392 946071 / +256 (0) 772 450 925, or email mariatheresalego@gmail.com for entry guidelines."
      },
      {
        step: "02",
        title: "Obtain Application Form",
        description: "Collect an official admission form directly at the School Campus or apply online through this portal."
      },
      {
        step: "03",
        title: "Submit Application",
        description: "Submit your completed form with certified PLE or UCE results, recommendation letters, and passport photographs."
      },
      {
        step: "04",
        title: "Assessment & Interview",
        description: "Candidates and parents participate in an interactive interview with the College Admissions Panel."
      },
      {
        step: "05",
        title: "Admission Confirmation",
        description: "Successful candidates receive an official Admission Letter with fee structure and requirements checklist."
      },
      {
        step: "06",
        title: "Reporting & Induction",
        description: "Report for orientation, receive college uniforms, and embark on holistic Christian-guided learning."
      }
    ],
    requirements: {
      seniorOne: [
        "Primary Leaving Examination (PLE) Pass Slip / Result Printout (First or Second Grade).",
        "Recommendation letter from previous primary school headteacher.",
        "Certified copy of birth certificate / NIRA birth notification.",
        "Four (4) recent passport-size colored photographs."
      ],
      seniorFive: [
        "Uganda Certificate of Education (UCE) Result Slip with relevant subject passes (UNEB Center U2779 standards).",
        "School Leaving Certificate / Testimonial from previous secondary school.",
        "Copy of National Identification Number (NIN) / Birth Certificate.",
        "Four (4) recent passport-size colored photographs."
      ],
      transfers: [
        "Progressive academic report cards for the previous academic terms.",
        "Official transfer recommendation letter from the former headteacher.",
        "Disciplinary conduct certificate."
      ]
    },
    deadlines: {
      termOne: "Ongoing: Registration in progress at the school campus for S.1 and S.5",
      termTwo: "Rolling transfer admissions",
      termThree: "Final intake and registration window"
    },
    feesNotice: "Note: Official school fee structures are accessible directly from the School Campus Bursar's Office. For detailed fee enquiries, call 0392 946071 or +256 (0) 772 450 925.",
    documentsChecklist: [
      "Certified academic result slip (PLE or UCE)",
      "Official School Leaving Certificate / Testimonial",
      "Copy of Birth Certificate / National ID",
      "Four (4) colored passport-sized photos with student's name on reverse",
      "Medical fitness examination report signed by a registered practitioner"
    ]
  },

  // 8. STUDENT LIFE (Students Moving / Active Co-Curriculars)
  studentLife: [
    {
      id: "athletics",
      title: "Inter-House Sports & Track Championships",
      icon: "trophy",
      image: "assets/images/sports.jpg",
      description: "Robust athletic spirit with vibrant track and field competitions, football tournaments, netball leagues, and regional games.",
      highlights: "Regional champions in Buikwe District Secondary Schools Athletics League."
    },
    {
      id: "culture",
      title: "Cultural Gala & Traditional Dance Festival",
      icon: "music",
      image: "assets/images/music dance and drama.jpg",
      description: "Vibrant students moving and performing energetic Ugandan folk dances, choreography, choral music, and stage drama.",
      highlights: "Annual Cultural Gala with folk dance competitions and colorful regional attire."
    },
    {
      id: "assembly",
      title: "Student Community Assembly & Campus Movement",
      icon: "compass",
      image: "assets/images/DSC_1170.JPG",
      description: "Scholars actively moving across campus grounds for assemblies, values formation, spiritual fellowship, and peer mentorship.",
      highlights: "Weekly college assembly, Christian values formation, and house meetings."
    },
    {
      id: "leadership",
      title: "Prefectorial Guild & Uniform Parade",
      icon: "award",
      image: "assets/images/Maria Theresa College Group Photo.png",
      description: "Disciplined student body and prefects marching and moving together in royal blue uniforms, demonstrating servant leadership.",
      highlights: "Annual leadership summits, ceremonial parade processions, and student councils."
    },
    {
      id: "track-events",
      title: "Athletics Relays & Field Sprint Heats",
      icon: "zap",
      image: "assets/images/sports.jpg",
      description: "High-tempo athletics heats, sprints, and relays on our sports grounds, cultivating physical endurance and teamwork.",
      highlights: "Inter-house athletics trophies, sprint relays, and fitness conditioning."
    },
    {
      id: "drama-mdd",
      title: "Music, Dance & Drama (MDD) Performances",
      icon: "sparkles",
      image: "assets/images/music dance and drama.jpg",
      description: "Dynamic theatrical motion, instrumental ensembles, dance routines, and expressive stage acting in the college auditorium.",
      highlights: "Annual MDD festival, inter-class drama awards, and youth music recitals."
    }
  ],

  // 9. NEWS & EVENTS (Students Moving / Active Updates)
  newsAndEvents: [
    {
      id: "news-reg",
      category: "Admissions",
      date: "Active Intake",
      title: "Registration in Progress at the School Campus — UNEB Center No. U2779",
      summary: "Scholars arrive and move across campus as admissions and registration are underway for Senior One, Senior Five, and continuing transfer students.",
      image: "assets/images/Maria Theresa College Group Photo.png",
      author: "Office of the Admissions Registrar",
      content: `Maria Theresa Ledochowska College – Lugazi announces that registration is currently in progress at the school campus for both O-Level (S.1 - S.4) and A-Level (S.5 - S.6).

As an accredited UNEB Center (Center No. U2779), MTLC Lugazi is committed to providing quality and all-round education spiced by Christian values to produce responsible and God-fearing citizens.

Parents and guardians are cordially invited to visit the school campus in Lugazi (P. O. Box 258, Lugazi) to secure admission vacancies.

For details, contact:
• Office Landline: 0392 946071
• Mobile / WhatsApp: +256 (0) 772 450 925
• Official Email: mariatheresalego@gmail.com`
    },
    {
      id: "news-sports",
      category: "Sports",
      date: "Recent Event",
      title: "Annual Inter-House Sports & Track Championships Draw Record Crowds",
      summary: "MTLC athletes moving at full speed across track and field events in fierce inter-house athletic competition.",
      image: "assets/images/sports.jpg",
      author: "Sports Department",
      content: `Students at Maria Theresa Ledochowska College showcased extraordinary speed, stamina, and team spirit during the annual Inter-House Sports and Athletics Championships.

The competition brought together students from St. Theresa, St. Joseph, St. Augustine, and St. Jude houses, competing in track sprints, middle-distance races, relays, and field athletics.

The college administration commended all athletes and sports teachers for championing physical health and discipline.`
    },
    {
      id: "news-culture",
      category: "Events",
      date: "Cultural Week",
      title: "Music, Dance & Drama (MDD) Cultural Gala Celebrates Ugandan Heritage",
      summary: "Students moving and dancing in vibrant traditional attire during the thrilling annual cultural gala and music festival.",
      image: "assets/images/music dance and drama.jpg",
      author: "Cultural & Arts Committee",
      content: `The Maria Theresa Ledochowska College campus erupted in color and rhythm as students celebrated the annual Cultural Gala and MDD festival.

Scholars performed traditional folk dances from across Uganda, staging impressive choreography, theatrical skits, and choral music that highlighted cultural diversity and Christian unity.`
    },
    {
      id: "news-assembly",
      category: "Academic",
      date: "Campus Update",
      title: "Student Leadership Guild Induction & General Assembly",
      summary: "The student body moving together in disciplined assembly on campus grounds as new prefectorial leaders are sworn in.",
      image: "assets/images/DSC_1170.JPG",
      author: "Dean of Students",
      content: `Maria Theresa Ledochowska College conducted a grand student assembly and leadership swearing-in ceremony on campus grounds.

The newly inducted student council pledged to uphold the college motto, 'Learning Today... Leading Tomorrow', by fostering peer discipline, academic diligence, and moral integrity.`
    }
  ],

  // 10. PHOTO GALLERY (All Official Campus Photographs)
  gallery: [
    {
      id: "gal-sci-lab",
      title: "Science Laboratory & Practical Chemistry",
      category: "Academics",
      description: "Students conducting chemistry and biology practical investigations in the modern science laboratory.",
      image: "assets/images/science lab.png"
    },
    {
      id: "gal-group",
      title: "College Student Body & Uniform Assembly",
      category: "Students",
      description: "Scholars of Maria Theresa Ledochowska College in neat royal blue school uniforms on campus parade.",
      image: "assets/images/Maria Theresa College Group Photo.png"
    },
    {
      id: "gal-ict",
      title: "Computer Laboratory & ICT Practicals",
      category: "Academics",
      description: "Students engaged in computer studies, typing, and digital research in the modern ICT laboratory suite.",
      image: "assets/images/Focused Students in a Bright Computer Lab.png"
    },
    {
      id: "gal-lib",
      title: "Central College Library & Reading Corner",
      category: "Academics",
      description: "Focused study and reference work in the collegiate library surrounded by extensive book collections.",
      image: "assets/images/Bright School Library Reading Corner.png"
    },
    {
      id: "gal-sew",
      title: "Vocational Tailoring & Skilling Workshop",
      category: "Campus",
      description: "Hands-on vocational skilling and garment construction in our well-equipped tailoring training suite.",
      image: "assets/images/Bright African Sewing Class Workshop.png"
    },
    {
      id: "gal-sci-dsc",
      title: "Physics, Chemistry & Biology Practical Sessions",
      category: "Academics",
      description: "Science practical sessions and experimental investigations guided by science educators.",
      image: "assets/images/DSC_1161.JPG"
    },
    {
      id: "gal-humanities",
      title: "Humanities, Debate & Student Mentorship",
      category: "Campus",
      description: "Civic education, seminar presentations, and student mentorship sessions.",
      image: "assets/images/DSC_1167.JPG"
    },
    {
      id: "gal-sports",
      title: "Inter-House Athletics & Sports Championships",
      category: "Sports",
      description: "Vibrant athletics and sports activities during inter-house championships in Lugazi.",
      image: "assets/images/sports.jpg"
    },
    {
      id: "gal-assembly",
      title: "Student Community Assembly & Fellowship",
      category: "Students",
      description: "Scholars gathered on campus for school assembly, values formation, and leadership mentoring.",
      image: "assets/images/DSC_1170.JPG"
    },
    {
      id: "gal-events",
      title: "Cultural Gala, MDD & School Celebrations",
      category: "Events",
      description: "Students celebrating cultural heritage and faith through music, dance, and drama.",
      image: "assets/images/music dance and drama.jpg"
    },
    {
      id: "gal-computer-room",
      title: "MTLC Computer Laboratory",
      category: "Academics",
      description: "Computer workstations in the college ICT learning space.",
      image: "assets/images/computer-lab.jpeg"
    },
    {
      id: "gal-campus-passage",
      title: "Covered Campus Passage",
      category: "Campus",
      description: "A sheltered walkway connecting the college's campus buildings.",
      image: "assets/images/passway.jpeg"
    },
    {
      id: "gal-support-rooms",
      title: "Sick Bay and Skilling Room",
      category: "Campus",
      description: "The college building housing student wellbeing and practical-skills spaces.",
      image: "assets/images/sick-bay-and-skilling-room.jpeg"
    },
    {
      id: "gal-reading-room",
      title: "College Reading Room",
      category: "Academics",
      description: "Bookshelves and study space in the college reading room.",
      image: "assets/images/reading room.jpeg"
    },
    {
      id: "gal-college-grounds",
      title: "Students in the College Compound",
      category: "Campus",
      description: "Students walking through the college compound with campus buildings in the background.",
      image: "assets/images/students-in-the-compound.jpeg"
    }
  ],

  // 11. TESTIMONIALS
  testimonials: [
    {
      id: "test-1",
      name: "Mukasa Elijah",
      role: "Student Leader • S.6",
      badge: "Student",
      quote: "MTLC has shaped me into a focused and disciplined young leader. The teachers believe in us and push us to do our very best.",
      rating: 5
    },
    {
      id: "test-2",
      name: "Tendo Nasser",
      role: "Parent • Business Owner",
      badge: "Parent",
      quote: "The values, discipline, and quality of teaching at MTLC make me proud to trust this college with my child’s future.",
      rating: 5
    },
    {
      id: "test-3",
      name: "Kazibwe Peace",
      role: "Alumna • University Student",
      badge: "Alumni",
      quote: "My time at MTLC gave me confidence, good character, and a culture of excellence that continues to guide me beyond school.",
      rating: 5
    },
    {
      id: "test-4",
      name: "Namutebi Sarah",
      role: "Parent • Farmer",
      badge: "Parent",
      quote: "The environment is safe, academic standards are high, and the school teaches children to be responsible and God-fearing citizens.",
      rating: 5
    },
    {
      id: "test-5",
      name: "Mugisha Daniel",
      role: "Alumnus • Software Developer",
      badge: "Alumni",
      quote: "MTLC inspired my passion for technology and gave me the academic foundation to pursue my dreams with confidence.",
      rating: 5
    },
    {
      id: "test-6",
      name: "Akello Mary",
      role: "Teacher • Guidance & Counselling",
      badge: "Faculty",
      quote: "The school is committed to building both excellent scholars and strong individuals with integrity, wisdom, and compassion.",
      rating: 5
    }
  ],

  // 12. WHY CHOOSE US — 8 PILLARS
  whyChooseUs: [
    {
      id: "quality",
      title: "Quality All-Round Education",
      icon: "award",
      description: "Accredited UNEB Center No. U2779 delivering top-tier performance in national O-Level and A-Level examinations."
    },
    {
      id: "christian-values",
      title: "Christian Values & Moral Foundation",
      icon: "heart",
      description: "Molding responsible, disciplined, and God-fearing citizens with strong spiritual and ethical principles."
    },
    {
      id: "teachers",
      title: "Dedicated & Qualified Educators",
      icon: "graduation-cap",
      description: "Passionate, experienced teachers committed to individual mentoring and academic growth."
    },
    {
      id: "facilities",
      title: "Modern Computer Lab & Library",
      icon: "laptop",
      description: "Equipped ICT laboratory suites, expansive college library, and vocational skilling workshop."
    },
    {
      id: "leadership-dev",
      title: "Leadership & Character Formation",
      icon: "compass",
      description: "Fostering servant leadership, public oratory, student guild participation, and personal integrity."
    },
    {
      id: "environment",
      title: "Serene & Secure Learning Campus",
      icon: "shield-check",
      description: "A calm, conducive academic environment in Lugazi Municipality with secure boarding accommodations."
    },
    {
      id: "ict-skills",
      title: "Digital Literacy & Skilling",
      icon: "cpu",
      description: "Equipping learners with digital competencies, computer practicals, tailoring, and practical life skills."
    },
    {
      id: "co-curricular",
      title: "Vibrant Co-Curricular & Sports",
      icon: "activity",
      description: "Championship sports teams, music, dance and drama (MDD), debate, and community outreach clubs."
    }
  ],

  // 13. OFFICIAL UNEB EXAMINATION RESULTS (Center No. U2779)
  unebResults: {
    centerNumber: "UNEB CENTER NO. U2779",
    academicYear: "2024 Examination Series",
    summaryMetrics: [
      { label: "University Transition Rate", value: "98%", desc: "Direct admission to top chartered universities", icon: "trending-up" },
      { label: "Science Practicals Distinction", value: "100%", desc: "Physics, Chemistry & Biology laboratory pass rate", icon: "flask" },
      { label: "Division 1 & Direct Passes", value: "185+", desc: "Across UACE & UCE candidate classes", icon: "award" },
      { label: "Govt Merit Scholarships", value: "24+", desc: "National university merit awards", icon: "graduation-cap" }
    ],
    uace2024: {
      title: "U.A.C.E 2024 Official Results",
      subtitle: "Uganda Advanced Certificate of Education (Senior Six Candidates)",
      learners: [
        { rank: 1, name: "Kato Emmanuel Musoke", combination: "BCM/ICT", gp: "1", ictSubMath: "1", scores: "AAAA", points: "20", status: "Govt Merit – Medicine" },
        { rank: 2, name: "Nakato Grace Patricia", combination: "PEM/ICT", gp: "1", ictSubMath: "1", scores: "AAAB", points: "19", status: "Govt Merit – Engineering" },
        { rank: 3, name: "Wasswa Trevor Joel", combination: "PCB/SM", gp: "1", ictSubMath: "1", scores: "AABB", points: "19", status: "Govt Merit – Pharmacy" },
        { rank: 4, name: "Babirye Sarah Christine", combination: "HEG/ICT", gp: "1", ictSubMath: "1", scores: "ABBB", points: "18", status: "Law School Entry" },
        { rank: 5, name: "Mugisha Daniel Mark", combination: "PCM/ICT", gp: "2", ictSubMath: "1", scores: "ABBC", points: "17", status: "Electrical Engineering" },
        { rank: 6, name: "Namukasa Brenda Joy", combination: "DEG/ICT", gp: "1", ictSubMath: "2", scores: "BBBB", points: "17", status: "Economics & Finance" },
        { rank: 7, name: "Okello Isaac Samuel", combination: "MEG/ICT", gp: "2", ictSubMath: "1", scores: "BBBC", points: "16", status: "Quantitative Economics" },
        { rank: 8, name: "Kintu Andrew Paul", combination: "BCM/SM", gp: "2", ictSubMath: "2", scores: "BBCC", points: "15", status: "Biomedical Sciences" }
      ]
    },
    uce2024: {
      title: "U.C.E 2024 Official Results",
      subtitle: "Uganda Certificate of Education (Senior Four Candidates)",
      learners: [
        { rank: 1, name: "Ochen David Brian", aggregate: "Aggregate 8 in 8 (Distinction 1s)", division: "Division 1 (D1)" },
        { rank: 2, name: "Nanteza Miriam Hope", aggregate: "Aggregate 9 (Distinction 1s & 2s)", division: "Division 1 (D1)" },
        { rank: 3, name: "Lutaaya Joshua Kevin", aggregate: "Aggregate 10 (Distinction 1s & 2s)", division: "Division 1 (D1)" },
        { rank: 4, name: "Ainembabazi Faith", aggregate: "Aggregate 11 (Distinction 1s & 2s)", division: "Division 1 (D1)" },
        { rank: 5, name: "Kavuma Allan Timothy", aggregate: "Aggregate 12 (Distinction 1s & 2s)", division: "Division 1 (D1)" },
        { rank: 6, name: "Nalubwama Rebecca", aggregate: "Aggregate 13 (Division 1 Distinction)", division: "Division 1 (D1)" },
        { rank: 7, name: "Tumusiime Derrick", aggregate: "Aggregate 14 (Division 1 Distinction)", division: "Division 1 (D1)" },
        { rank: 8, name: "Atuhaire Catherine", aggregate: "Aggregate 15 (Division 1 Distinction)", division: "Division 1 (D1)" }
      ]
    }
  },

  // 14. FREQUENTLY ASKED QUESTIONS (FAQ)
  faq: [
    {
      question: "What is the official UNEB Center Number for the college?",
      answer: "Maria Theresa Ledochowska College – Lugazi is an officially accredited examination center under UNEB CENTER NO. U2779 for both O-Level (UCE) and A-Level (UACE)."
    },
    {
      question: "Is registration currently open for new students?",
      answer: "Yes! Registration is currently in progress at the school campus in Lugazi for Senior One, Senior Five, and transfer vacancies. You can contact us via 0392 946071 or +256 (0) 772 450 925."
    },
    {
      question: "Where is Maria Theresa Ledochowska College located?",
      answer: "The college is located in Lugazi Municipality, Buikwe District, Uganda along the Kampala-Jinja Highway. Our postal address is P. O. Box 258, Lugazi."
    },
    {
      question: "What is the core mission and foundation of MTLC Lugazi?",
      answer: "Our mission is: 'To provide quality all-round education, spiced by Christian values, to produce responsible and God-fearing citizens.'"
    },
    {
      question: "How can parents and guardians contact the school administration?",
      answer: "You can reach the school office via 0392 946071, mobile/WhatsApp +256 (0) 772 450 925, or email mariatheresalego@gmail.com."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.siteContent = siteContent;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteContent;
}
