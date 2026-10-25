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
    established: "2011",
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
    addressLine1: "Plot 140 Kampala-Jinja Road, Central Division, Nakazadde LCI",
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
    { label: "Years of Excellence", value: 10, suffix: "+", icon: "award" },
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
      id: "vocational",
      name: "Vocational Studies Department",
      category: "Vocational Studies Department",
      icon: "wrench",
      image: "assets/images/students-sewing.jpg",
      tagline: "Applied learning across practical and creative subjects.",
      description: "The department brings together agriculture, physical education, art and design, entrepreneurship, and information and communication technology.",
      subjects: ["Agriculture", "Physical Education", "Art & Design", "Entrepreneurship", "Information & Communication Technology (ICT)"],
      levels: ["O-Level (UCE)", "Practical Skills Training"],
      facilities: "Learning through practical, creative, and digital subjects."
    },
    {
      id: "vocational-skills",
      name: "Vocational Skills",
      category: "Vocational Skills",
      icon: "scissors",
      image: "assets/images/students-sewing.jpg",
      tagline: "Hands-on skills for making and self-reliance.",
      description: "Learners develop practical skills in tailoring and shoe making.",
      subjects: ["Tailoring", "Shoe Making"],
      levels: ["O-Level (UCE)", "Practical Skills Training"],
      facilities: "Practical training in tailoring and shoe making."
    },
    {
      id: "languages",
      name: "Languages Department",
      category: "Languages Department",
      icon: "message-square",
      image: "assets/images/library.jpeg",
      tagline: "Building language, literacy, and communication.",
      description: "Learners study Luganda, Kiswahili, English, and Literature.",
      subjects: ["Luganda", "Kiswahili", "English", "Literature"],
      levels: ["O-Level (UCE)", "A-Level (UACE)"],
      facilities: "Library resources support reading and language learning."
    },
    {
      id: "sciences",
      name: "Sciences Department",
      category: "Sciences Department",
      icon: "flask",
      image: "assets/images/sciences 1.jpg",
      tagline: "Scientific learning, investigation, and numeracy.",
      description: "The department includes Physics, Chemistry, Biology, and Mathematics.",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
      levels: ["O-Level (UCE)", "A-Level (UACE)"],
      facilities: "Laboratory resources support practical science learning."
    },
    {
      id: "humanities",
      name: "Humanities Department",
      category: "Humanities Department",
      icon: "globe",
      image: "assets/images/geograpy.jpg",
      tagline: "Understanding people, places, and society.",
      description: "The department includes History and Geography.",
      subjects: ["History", "Geography"],
      levels: ["O-Level (UCE)", "A-Level (UACE)"],
      facilities: "Learning resources support the study of people and places."
    },
    {
      id: "religious-studies",
      name: "Religious Studies Department",
      category: "Religious Studies Department",
      icon: "cross",
      image: "assets/images/religion.jpeg",
      tagline: "Faith, values, and responsible living.",
      description: "Learners study CRE as part of their religious studies.",
      subjects: ["CRE"],
      levels: ["O-Level (UCE)", "A-Level (UACE)"],
      facilities: "Religious studies support reflection and character formation."
    }
  ],

  // 6. DEPARTMENTS
  departments: [
    {
      id: "dept-vocational",
      name: "Vocational Studies Department",
      icon: "wrench",
      image: "assets/images/students-sewing.jpg",
      headTitle: "Applied, creative & digital subjects",
      subjects: [
        { name: "Agriculture", description: "Explore agriculture and its practical applications." },
        { name: "Physical Education", description: "Develop fitness, coordination, and teamwork." },
        { name: "Art & Design", description: "Explore visual creativity and design." },
        { name: "Entrepreneurship", description: "Build enterprise awareness and problem-solving skills." },
        { name: "Information & Communication Technology (ICT)", description: "Develop digital literacy and computer skills." }
      ],
      description: "The department groups applied, creative, enterprise, and information technology subjects.",
      labCount: "Learning through practical, creative, and digital subjects"
    },
    {
      id: "dept-vocational-skills",
      name: "Vocational Skills",
      icon: "scissors",
      image: "assets/images/students-sewing.jpg",
      headTitle: "Hands-on practical skills",
      subjects: [
        { name: "Tailoring", description: "Build practical garment-making skills." },
        { name: "Shoe Making", description: "Learn practical footwear-making skills." }
      ],
      description: "Vocational skills give learners hands-on experience in tailoring and shoe making.",
      labCount: "Practical training in tailoring and shoe making"
    },
    {
      id: "dept-languages",
      name: "Languages Department",
      icon: "book-open",
      image: "assets/images/library.jpeg",
      headTitle: "Communication, literacy & literature",
      subjects: [
        { name: "Luganda", description: "Develop Luganda language and communication skills." },
        { name: "Kiswahili", description: "Develop Kiswahili language and communication skills." },
        { name: "English", description: "Build confident spoken and written communication." },
        { name: "Literature", description: "Explore literary works and interpretation." }
      ],
      description: "The Languages department develops language, literacy, and communication skills.",
      labCount: "Library resources include textbooks, dictionaries, novels, and reference materials"
    },
    {
      id: "dept-sciences",
      name: "Sciences Department",
      icon: "flask",
      image: "assets/images/sciences 1.jpg",
      headTitle: "Scientific understanding, mathematics & inquiry",
      subjects: [
        { name: "Physics", description: "Study the physical world through scientific thinking." },
        { name: "Chemistry", description: "Explore matter, reactions, and scientific investigation." },
        { name: "Biology", description: "Understand life and the living world." },
        { name: "Mathematics", description: "Develop numeracy, logic, and problem-solving." }
      ],
      description: "The Sciences department develops scientific understanding and mathematical reasoning.",
      labCount: "Laboratory resources support practical science learning"
    },
    {
      id: "dept-humanities",
      name: "Humanities Department",
      icon: "globe",
      image: "assets/images/geograpy.jpg",
      headTitle: "People, places, belief & society",
      subjects: [
        { name: "History", description: "Learn from events and experiences that shaped society." },
        { name: "Geography", description: "Understand people, places, environments, and society." }
      ],
      description: "The Humanities department studies people, places, history, and society.",
      labCount: "Learning resources support the study of people and places"
    },
    {
      id: "dept-religious-studies",
      name: "Religious Studies Department",
      icon: "cross",
      image: "assets/images/religion.jpeg",
      headTitle: "Faith, values & responsible living",
      subjects: [
        { name: "CRE", description: "Grow in faith, conscience, and responsible living." }
      ],
      description: "Religious Studies supports reflection, faith, and character formation through CRE.",
      labCount: "Learning supports reflection and character formation"
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

  // 8. STUDENT LIFE (Co-curricular activities)
  studentLife: [
    {
      id: "assembly",
      title: "Assemblies & College Community",
      icon: "compass",
      image: "assets/images/DSC_1170.JPG",
      description: "Assemblies and house gatherings bring students together as a college community. These shared occasions support reflection, spiritual formation, communication, and a sense of belonging, while giving students opportunities to listen, participate, and support one another.",
      highlights: "Shared college gatherings, Christian values, and house community."
    },
    {
      id: "drama-mdd",
      title: "Music, Dance & Drama (MDD) Performances",
      icon: "sparkles",
      image: "assets/images/school actvities mdd.jpeg",
      description: "Music, Dance and Drama gives students a platform to explore creative expression and celebrate Ugandan culture. Learners can contribute as performers or support the preparation and presentation of performances, developing confidence, collaboration, and appreciation of the arts.",
      highlights: "The annual MDD festival brings Francisca, Anna Maria, and Tereza houses together."
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
      title: "Student Assembly & Campus Community",
      summary: "Students gather on campus for assembly, reflection, and shared community activities.",
      image: "assets/images/prefects photo.png",
      author: "Dean of Students",
      content: `Maria Theresa Ledochowska College brings students together for assemblies and community activities on campus.

These gatherings support fellowship, reflection, shared responsibility, and the college motto, 'Learning Today... Leading Tomorrow'.`
    }
  ],

  // 10. PHOTO GALLERY (All Official Campus Photographs)
  gallery: [
    {
      id: "gal-group",
      title: "College Student Body & Uniform Assembly",
      category: "Students",
      description: "Scholars of Maria Theresa Ledochowska College in neat royal blue school uniforms on campus parade.",
      image: "assets/images/Maria Theresa College Group Photo.png"
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
      image: "assets/images/school actvities mdd.jpeg"
    },
    {
      id: "gal-support-rooms",
      title: "School Environment",
      category: "Campus",
      description: "Dedicated spaces supporting student wellbeing and practical skills development.",
      image: "assets/images/sick-bay-and-skilling-room.jpeg"
    },
    {
      id: "gal-reading-room",
      title: "College Reading Room",
      category: "Academics",
      description: "Bookshelves and study space in the college reading room.",
      image: "assets/images/library.jpeg"
    },
    {
      id: "gal-college-grounds",
      title: "Students in the College Compound",
      category: "Campus",
      description: "Students walking through the college compound with campus buildings in the background.",
      image: "assets/images/school view upper.jpeg"
    }
  ],

  spiritualGrowthPhotos: [
    {
      title: "School Dedication Day",
      description: "The school community gathers in faith for a special dedication celebration.",
      image: "assets/images/dedication day.jpeg"
    },
    {
      title: "School Community at General Mass",
      description: "Students and staff gather for the school community's general Mass.",
      image: "assets/images/general mass.jpeg"
    },
    {
      title: "Student Prayer and Reflection",
      description: "A student leads the school community in prayer and reflection.",
      image: "assets/images/prayer.jpeg"
    },
    {
      title: "Religious Education and Service",
      description: "Students take part in religious education and service as part of their faith formation.",
      image: "assets/images/religion.jpeg"
    },
    {
      title: "Student Faith Community",
      description: "Students participate in the school's faith community and religious life.",
      image: "assets/images/religion 2.jpeg"
    },
    {
      title: "Students at the School Dedication",
      description: "Students gather for a school dedication celebration.",
      image: "assets/images/religion 3.jpeg"
    },
    {
      title: "Students in Worship and Song",
      description: "Students join together in song during a faith gathering.",
      image: "assets/images/religion 4.jpeg"
    },
    {
      title: "School Community at Mass",
      description: "Students and clergy gather for a school Mass.",
      image: "assets/images/religion 5.jpeg"
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
      title: "Vibrant Co-Curricular Excellence",
      icon: "activity",
      description: "Music, dance and drama (MDD), debate, leadership clubs, and community outreach initiatives."
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
      answer: "The college is located at Plot 140 Kampala-Jinja Road, Central Division, Lugazi Municipality, Nakazadde LCI. Our postal address is P. O. Box 258, Lugazi."
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
