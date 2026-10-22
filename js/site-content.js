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
      id: "vocational",
      name: "Vocational Studies",
      category: "Vocational Studies",
      icon: "wrench",
      image: "assets/images/students-sewing.jpg",
      tagline: "Practical skills for self-employment, entrepreneurship, and future careers.",
      description: "Learners develop practical skills in shoemaking and tailoring. Computers support digital learning, computer skills, and practical training, helping learners prepare for self-employment, entrepreneurship, and future employment.",
      subjects: ["Shoemaking", "Tailoring", "Computer Skills", "Digital Learning"],
      levels: ["O-Level (UCE)", "Practical Skills Training"],
      facilities: "Computers to support digital learning and practical training."
    },
    {
      id: "language",
      name: "Language",
      category: "Language",
      icon: "message-square",
      image: "assets/images/library.jpeg",
      tagline: "Building confident communication in speech and writing.",
      description: "Learners develop essential written and spoken communication skills. A well-stocked library with textbooks, dictionaries, novels, reference materials, and other reading resources supports vocabulary, reading culture, comprehension, and communication.",
      subjects: ["Written Communication", "Spoken Communication", "Reading", "Comprehension"],
      levels: ["O-Level (UCE)", "A-Level (UACE)"],
      facilities: "A well-stocked library with textbooks, dictionaries, novels, and reference materials."
    },
    {
      id: "sciences",
      name: "Sciences",
      category: "Sciences",
      icon: "flask",
      image: "assets/images/sciences 1.jpg",
      tagline: "Scientific knowledge and practical investigation through experiments.",
      description: "Biology, Chemistry, and Physics lessons combine scientific knowledge with practical activities. Learners use laboratory equipment, apparatus, and materials to conduct experiments and develop scientific inquiry, critical thinking, and problem-solving skills.",
      subjects: ["Biology", "Chemistry", "Physics", "Scientific Inquiry"],
      levels: ["O-Level (UCE)", "A-Level (UACE)"],
      facilities: "A well-stocked laboratory with equipment, apparatus, and materials for experiments."
    },
    {
      id: "humanities",
      name: "Humanities",
      category: "Humanities",
      icon: "globe",
      image: "assets/images/geograpy.jpg",
      tagline: "Understanding society, culture, history, and the environment.",
      description: "History, Geography, Religious Education, and related social sciences help learners understand human society and relationships. Learners build critical thinking, analytical, decision-making, and problem-solving skills, while developing good citizenship, respect for cultures, moral values, and awareness of social and economic issues.",
      subjects: ["History", "Geography", "Religious Education", "Social Sciences"],
      levels: ["O-Level (UCE)", "A-Level (UACE)"],
      facilities: "Learning resources for the study of society, culture, history, and the environment."
    }
  ],

  // 6. DEPARTMENTS
  departments: [
    {
      id: "dept-vocational",
      name: "Vocational Studies",
      icon: "wrench",
      image: "assets/images/students-sewing.jpg",
      headTitle: "Digital literacy, design & practical trades",
      subjects: [
        { name: "Computer Studies", description: "Build digital literacy through computer use, essential software, and responsible technology skills for learning and work." },
        { name: "Tailoring", description: "Develop garment-making skills through fabric selection, measuring, pattern work, sewing, finishing, and simple clothing repairs." },
        { name: "Shoemaking", description: "Learn the foundations of footwear design and construction, material use, assembly, and basic repair." }
      ],
      description: "Vocational Studies connects classroom learning with practical, transferable skills. Learners are introduced to digital tools and hands-on trades that can support further training, self-reliance, and future employment.",
      labCount: "Practical training in computer skills, tailoring, and shoemaking"
    },
    {
      id: "dept-language",
      name: "Languages",
      icon: "book-open",
      image: "assets/images/library.jpeg",
      headTitle: "Communication, literacy & literature",
      subjects: [
        { name: "English Language", description: "Develop confident spoken and written English for classroom learning, communication, and everyday life." },
        { name: "Reading", description: "Build fluency, vocabulary, comprehension, and the habits needed to learn from a wide range of texts." },
        { name: "Writing", description: "Practice clear, accurate writing, from sentence construction and composition to organised academic responses." },
        { name: "Literature", description: "Explore stories, poetry, and drama to develop interpretation, imagination, appreciation, and thoughtful expression." }
      ],
      description: "The Languages department helps learners express ideas clearly and understand the written word. Reading and writing practice are strengthened through engagement with literature and the school's library resources.",
      labCount: "Library resources include textbooks, dictionaries, novels, and reference materials"
    },
    {
      id: "dept-sciences",
      name: "Sciences",
      icon: "flask",
      image: "assets/images/sciences 1.jpg",
      headTitle: "Scientific understanding, mathematics & inquiry",
      subjects: [
        { name: "Biology", description: "Study living organisms, human and plant life, health, and the relationships between organisms and their environments." },
        { name: "Physics", description: "Explore forces, energy, matter, and physical systems through explanation, problem-solving, and practical investigation." },
        { name: "Mathematics", description: "Strengthen numeracy, logical reasoning, quantitative analysis, and the mathematical tools used across disciplines." },
        { name: "Chemistry", description: "Understand substances, their properties, and how they change through chemical reactions and practical study." }
      ],
      description: "The Sciences department develops curiosity and evidence-based thinking. Learners build core scientific knowledge and mathematical reasoning, supported by practical activities and laboratory investigation.",
      labCount: "Laboratory activities use available equipment, apparatus, and learning materials"
    },
    {
      id: "dept-humanities",
      name: "Humanities",
      icon: "globe",
      image: "assets/images/geograpy.jpg",
      headTitle: "People, places, belief & society",
      subjects: [
        { name: "History", description: "Examine people, events, and ideas from the past to understand how societies change and how the past shapes the present." },
        { name: "Geography", description: "Explore places, environments, people, and the connections between communities and the world around them." },
        { name: "Religious Education", description: "Consider religious beliefs, values, and moral questions while developing reflection, respect, and responsible choices." },
        { name: "Social Sciences", description: "Build understanding of communities, social relationships, citizenship, and the issues that affect people's lives." }
      ],
      description: "The Humanities department helps learners make sense of people, places, cultures, beliefs, and society. Study encourages informed discussion, analytical thinking, respect for different perspectives, and responsible citizenship.",
      labCount: "Learning resources support the study of society, culture, history, and the environment"
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
      id: "assembly",
      title: "Student Community Assembly & Campus Movement",
      icon: "compass",
      image: "assets/images/DSC_1170.JPG",
      description: "Scholars actively moving across campus grounds for assemblies, values formation, spiritual fellowship, and peer mentorship.",
      highlights: "Weekly college assembly, Christian values formation, and house meetings."
    },
    {
      id: "drama-mdd",
      title: "Music, Dance & Drama (MDD) Performances",
      icon: "sparkles",
      image: "assets/images/school actvities mdd.jpeg",
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
      image: "assets/images/DSC_1170.JPG",
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
      id: "gal-ict",
      title: "Computer Laboratory & ICT Practicals",
      category: "Academics",
      description: "Students engaged in computer studies, typing, and digital research in the modern ICT laboratory suite.",
      image: "assets/images/Focused Students in a Bright Computer Lab.png"
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
      image: "assets/images/school actvities mdd.jpeg"
    },
    {
      id: "gal-computer-room",
      title: "MTLC Computer Laboratory",
      category: "Academics",
      description: "Computer workstations in the college ICT learning space.",
      image: "assets/images/computer-lab.jpeg"
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
      image: "assets/images/library.jpeg"
    },
    {
      id: "gal-college-grounds",
      title: "Students in the College Compound",
      category: "Campus",
      description: "Students walking through the college compound with campus buildings in the background.",
      image: "assets/images/school view upper.jpeg"
    },
    {
      id: "gal-dedication",
      title: "School Dedication Day",
      category: "Events",
      description: "The school community gathers in faith for a special dedication celebration.",
      image: "assets/images/dedication day.jpeg"
    },
    {
      id: "gal-general-mass",
      title: "School Community at General Mass",
      category: "Events",
      description: "Students, staff, and guests join together for the school community's general Mass.",
      image: "assets/images/general mass.jpeg"
    },
    {
      id: "gal-prayer",
      title: "Student Prayer and Reflection",
      category: "Events",
      description: "A student leads the school community in prayer and reflection.",
      image: "assets/images/prayer.jpeg"
    },
    {
      id: "gal-religion",
      title: "Religious Education and Service",
      category: "Students",
      description: "Students take part in religious education and service as part of the school's faith formation.",
      image: "assets/images/religion.jpeg"
    },
    {
      id: "gal-religion-2",
      title: "Student Faith Community",
      category: "Students",
      description: "Students participate in the school's faith community and religious life.",
      image: "assets/images/religion 2.jpeg"
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
