import {
  //CS Declassified
  Acing_your_internship,

  SACS_interest_Meeting,

  CS_Declassified,
  projectIncubator,
  springFullstack,
  workshop_series,
  Acing_your_technical_interview,
  SACS_2nd_Interest_Meeting,
  Data_Science_Competition_SACS,
} from '../assets'

const events = {
  'upcoming': [
    {
      'Name': 'Data Science Competition and Workshop',
      'Event_flyer': Data_Science_Competition_SACS,
      'Description': "Whether you’re looking to sharpen your Python skills, build an impressive résumé, or take home some exciting prizes, we’ve got just the opportunity for you! Join us tomorrow at 1 PM for our Data Science Competition & Workshop.",
      'Date': 'Wednesdays & Fridays 1-2pm'
    },

    {
      'Name': 'SACS 2nd Interest Meeting',
      'Event_flyer': SACS_2nd_Interest_Meeting,
      'Description': "Come join for our second interest meeting to learn about who we are and what we do",
      'Date': 'Thursday October 29th'
    },
    {
      'Name': 'Acing Your technical Interview',
      'Event_flyer': Acing_your_technical_interview,
      'Description': "This event is done in collaboration with the Google in residence in order to help students learn data structers and algorithm while also givine them an opportunity to simulate a live interview environment",
      'Date': 'Thursdays'
    }

  ],
  'all': [
    {
      'Name': 'Acing Your technical Interview',
      'Event_flyer': Acing_your_technical_interview,
      'Description': "This event is done in collaboration with the Google in residence in order to help students learn data structers and algorithm while also givine them an opportunity to simulate a live interview environment",
      'Date': 'Thursdays'
    },
    {
      'Name': 'Acing_your_internship',
      'Event_flyer': Acing_your_internship,
      'Description': "Event features a series of speakers who successfully completed their internships and received return offers, they share their journey and stories of how they were successful in jobs",
      'Date': '4/13/2023'
    },
    {
      'Name': 'SACS interest meeting',
      'Event_flyer': SACS_interest_Meeting,
      'Description': "A meeting aimed at providing students that are interested in joining SACS more information about the organization",
      'Date': '9/24/2024'
    },
    {
      'Name': 'CS Declassified',
      'Event_flyer': CS_Declassified,
      'Description': "An event geared at uncovering and breaking down Computer Science concepts of 112 and 241",
      'Date': '2/13/2024'
    },
    {
      'Name': 'Acing your internship',
      'Event_flyer': projectIncubator,
      'Description': "Event features a series of speakers who successfully completed their internships and received return offers, they share their journey and stories of how they were successful in jobs",
      'Date': '4/13/2023'
    },
    {
      'Name': 'Workshop series',
      'Event_flyer': springFullstack,
      'Description': "A event geared atgiving students a intro level introduction to full stack development teaching them skills in both front end and backend using ther PERN stack",
      'Date': '4/13/2023'
    },
    {
      'Name': 'Workshop series',
      'Event_flyer': workshop_series,
      'Description': 'Help student gaving introductions in different coding languages and skill sets in Computer Sience (Exp. python, html, css, flask, C++',
      'Date': '4/13/2023'
    }
  ],
  'guestspeakers': [
    {
     'Name': 'Acing_your_internship',
     'Event_flyer': Acing_your_internship,
     'Description': "Event features a series of speakers who successfully completed their internships and received return offers, they share their jouney and stories of how they were succeesfully in jobs",
     'Date': '4/13/2023'
    },
  ],
  'networking': [
    {
      'Name': 'SACS interest meeting',
      'Event_flyer': SACS_interest_Meeting,
      'Description': "A meeting aimed at provide students mthat are interested in joining SACS more informaton about the organizations",
      'Date': '9/24/2024'
     },
  ],
  'workshops': [
    {
      'Name': 'CS Declassified',
      'Event_flyer': CS_Declassified,
      'Description': "A event Geared at uncovering and breaking down Computer science concepts of 112 and 241",
      'Date': '2/13/2024'
     },
     {
      'Name': 'Acing your internship',
      'Event_flyer': projectIncubator,
      'Description': "Event features a series of speakers who successfully completed their internships and received return offers, they share their jouney and stories of how they were succeesfully in jobs",
      'Date': '4/13/2023'
     },
     {
      'Name': 'Workshop series',
      'Event_flyer': springFullstack,
      'Description': "A event geared atgiving students a intro level introduction to full stack development teaching them skills in both front end and backend using ther PERN stack",
      'Date': '4/13/2023'
     },

     {
      'Name': 'Workshop series',
      'Event_flyer': workshop_series,
      'Description': 'Help student gaving introductions in different coding languages and skill sets in Computer Sience (Exp. python, html, css, flask, C++',
      'Date': '4/13/2023'
     }
  ]
}

const eboard = [
  {
    name: "Clyde Tandjong",
    title: "President",
    major: "Computer Science",
    year: "Class of 2025",
    skills: [],
    interests: [],
    bio: "",
    funFact: "I once built a PC from scratch using spare parts.",
    linkedIn: "https://www.linkedin.com/in/clyde-tandjong",
    github: "https://github.com/clydewtt",
    image: "clyde-tandjong.jpg"
  },
  {
    name: "Mikayla Brown",
    title: "Vice President",
    major: "Computer Science",
    year: "Class of 2025",
    skills: [],
    interests: [],
    bio: "",
    funFact: "I'm a coffee enthusiast and love coding in cafes.",
    linkedIn: "https://www.linkedin.com/in/mikayla-brown",
    github: "",
    image: "mikayla-brown.jpeg"
  },
  {
    name: "Oluwatobi Olajide",
    title: "Tech Lead",
    major: "Computer Science",
    year: "Class of 2025",
    skills: [],
    interests: [],
    bio: "",
    funFact: "I built my first app when I was 15.",
    linkedIn: "https://www.linkedin.com/in/oluwatobi-olajide",
    github: "",
    image: "oluwatobi-olajide.jpeg"
  },
  {
    name: "Oluwole Adetife",
    title: "Tutoring Coordinator",
    major: "Computer Science",
    year: "Class of 2025",
    skills: [],
    interests: [],
    bio: "",
    funFact: "I can solve a Rubik's cube in under a minute.",
    linkedIn: "https://www.linkedin.com/in/oluwole-adetifa-278586113",
    github: "",
    image: "oluwole-adetife.jpeg"
  },
  {
    name: "Elizabeth Stewart",
    title: "Secretary",
    major: "Computer Science",
    year: "Class of 2025",
    skills: [],
    interests: [],
    bio: "",
    funFact: "I’ve visited over 10 national parks.",
    linkedIn: "https://www.linkedin.com/in/elizabeth-h-stewart28",
    github: "",
    image: "elizabeth-stewart.jpeg"
  },
  {
    name: "Isaiah Simpson",
    title: "Sponsorship Coordinator",
    major: "Computer Science",
    year: "Class of 2025",
    skills: [],
    interests: [],
    bio: "",
    funFact: "I’m a huge fan of Marvel and know every movie in order.",
    linkedIn: "https://www.linkedin.com/in/isaiah-simpson-/",
    github: "",
    image: "isaiah-simpson.jpeg"
  },
  {
    name: "Destiny Bertier",
    title: "Volunteering Chair",
    major: "Computer Science",
    year: "Class of 2025",
    skills: [],
    interests: [],
    bio: "",
    funFact: "I enjoy writing poetry in my free time.",
    linkedIn: "https://www.linkedin.com/in/destinybertier/",
    github: "",
    image: "destiny-bertier.jpeg"
  },
  {
    name: "Najae Potts",
    title: "Webmaster/Social Media Coordinator",
    major: "Computer Science",
    year: "Class of 2025",
    skills: [],
    interests: [],
    bio: "",
    funFact: "I'm a self-taught digital artist as well.",
    linkedIn: "https://www.linkedin.com/in/najae-potts/",
    github: "",
    image: "najae-potts.jpeg"
  },
  {
    name: "Collin Umeh",
    title: "Treasurer",
    major: "Computer Science",
    year: "Class of 2025",
    skills: [],
    interests: [],
    bio: "",
    funFact: "I love analyzing financial data for fun.",
    linkedIn: "https://www.linkedin.com/in/collin-umeh17/",
    github: "",
    image: "collin-umeh.jpeg"
  },
  {
    name: "Chukwulenyeudo Uwaeme",
    title: "Elder",
    major: "Computer Science",
    year: "Class of 2025",
    skills: [],
    interests: [],
    bio: "",
    funFact: "I once built a robot that can play chess.",
    linkedIn: "https://www.linkedin.com/in/lennythecreator/",
    github: "",
    image: "chukwulenyeudo-uwaeme.jpeg"
  }
];


  

const about = {
    Mission: "We launch Morgan State's top tech talent into the future — by unlocking career-defining opportunities, building powerful mentorship networks, and sharpening the skills that drive innovation, impact, and leadership.",
    
    Goals: [
      "To partner with over 15 different Companies/Organizations to provide Computer Science students at Morgan State University with access to opportunities for growth, development, and career advancement.",
      "To provide technical workshops throughout the semesters that will allow students to develop their technical skills in their respective fields of interest.",
      "Tutorship opportunities for computer science students at Morgan State University aimed at helping them in their CS classes (Note: May be limited to the skillset of the tutors at the time).",
      "To help over 10 students in SACS land career-changing opportunities through their involvement and participation in SACS.",
      "CS students will be provided with scholarships to help alleviate any financial burden that could impact their completion of college.",
      "Providing every member of SACS with the opportunity to be mentored by a knowledgeable member or partner of SACS."
    ],
  
    Vision: "To create partnerships with various companies to provide students with access to the necessary resources and networks that will help them succeed. This includes job opportunities (FTE and internships), training sessions, workshops, and a pair mentoring program linking members with established professionals for feedback, guidance, and further opportunities.",
  
    OfficersResponsibilities: {
      President: [
        "Responsible for reaching out to sponsors of SACS to plan events.",
        "Responsible for Biweekly/Triweekly e-board meetings.",
        "Responsible for ensuring events are conducted correctly.",
        "Responsible for managing the responsibilities of other e-board positions.",
        "Responsible for planning events with industry engineers.",
        "Responsible for making the organization’s scholarship program available to the members.",
        "Responsible for ensuring SACS completes service hours.",
        "Responsible for leading SACS service hours efforts.",
        "Work closely with the Vice President to update the sponsorship package if required.",
        "Work closely with the Tech Lead to recruit SACS technical interviewers and tutors.",
        "Responsible for recruiting industry leaders/engineers to host events with SACS.",
        "Work closely with the Vice President to plan collaborative events with other organizations.",
        "Ensure SACS is present for caucus meetings, in coordination with the Vice President.",
        "Responsible for submitting documents for SOS points."
      ],
      VicePresident: [
        "Work closely with the President to plan events with sponsors.",
        "Responsible for the management of the Notion page.",
        "Responsible for scheduling rooms.",
        "Work closely with the President to plan collaborative events with other organizations.",
        "Work closely with the President to update the sponsorship package if required.",
        "Work closely with the President and Tech Lead to recruit SACS technical interviewers and tutors.",
        "Ensure SACS is present for caucus meetings, in coordination with the President.",
        "Responsible for submitting documents for SOS points."
      ],
      Secretary: [
        "Responsible for creating meeting notes for biweekly e-board meetings.",
        "Responsible for the management of the Notion page.",
        "Create presentation slides for sponsors.",
        "Create accurate, detailed, and organized meeting notes and organization records.",
        "Email e-board members with organization updates.",
        "Create event flyers and send out reminder emails."
      ],
      TechLead: [
        "Responsible for tutoring efforts and leading tutoring events.",
        "Work closely with other SACS technical interviewers to ensure interviews are conducted well.",
        "Recruit technical interviewer volunteers (may be eligible for service hours).",
        "Conduct technical interviews and manage technical interview requests.",
        "Create slides and teach SACS technical concepts related to software engineering and other fields in CS.",
        "Work closely with the President and VP to discuss technical concepts and events being taught."
      ],
      Treasurer: [
        "Maintain all financial records and the checkbook.",
        "Organize records for the ACM annual financial report.",
        "Supply a budget report and the current financial status to the e-board."
      ]
    },
  
    MembershipRequirements: [
      "Must attend at least 3 SACS CS events per semester.",
      "Must fill out the application to become a member of SACS.",
      "Must be recommended for membership by a member of the executive board."
    ]
  };

  const socials = {
    instagram:'https://www.instagram.com/sacs_msu/',
    linkedIn: "https://www.linkedin.com/company/sacs-msu/",
    groupMe:'https://groupme.com/join_group/85581669/HYtLnscb',
    email:'https://mail.google.com/mail/?view=cm&fs=1&to=msu.sacs64@gmail.com'
  }

  const links ={
    signUp:'https://forms.gle/EdJoZPMs8VqUULTY6',
    sponsorship: 'https://forms.gle/MSiPLnqEtmmySfA16'
  }


  const qualities = [
    "Mentorship",
    "Career Growth",
    "Technical Workshops",
    "Community",
    "Leadership",
    "Networking",
    "Diversity",
  ];

  const conciseGoals = [
    "Partner with 15+ organizations for career growth.",
    "Host technical workshops each semester.",
    "Offer tutoring support for CS courses.",
    "Help members land impactful career roles.",
    "Provide scholarships to reduce financial strain.",
    "Enable mentoring from peers and professionals.",
  ];
  
  const testimonials = [
    {
      name: "Jasmine T.",
      text: "SACS helped me land my first internship and gave me a community to grow with!",
    },
    {
      name: "Malik W.",
      text: "The workshops and mentorship completely transformed my confidence and skills.",
    },
    {
      name: "Aaliyah R.",
      text: "I met my tech mentor through SACS and got my dream role after graduation!",
    },
  ];
  
  const sponsors = ["Kyndryl", "CACI", "Capital One", "Google", "Microsoft"];
  
  const faqs = [
    {
      question: "How do I become a member of SACS?",
      answer:
        "You can become a member by filling out the sign-up form and attending at least three SACS events per semester.",
    },
    {
      question: "Do I need to be a CS major to join?",
      answer:
        "No! While we focus on computer science, students from all majors with an interest in tech are welcome.",
    },
    {
      question: "What kind of events does SACS host?",
      answer:
        "We host technical workshops, hack nights, speaker series, mentorship meetups, and career development sessions.",
    },
  ];
  
  export const currentMembers = [
    { name: "Tyon Robinson", image: "tyon-robinson.jpg", linkedIn: "https://www.linkedin.com/in/tyon-robinson/" },
    { name: "Montay Howard", image: "montay-howard.jpg", linkedIn: "https://www.linkedin.com/in/montay-howard/" },
    { name: "Amyra Harry", image: "amyra-harry.jpg", linkedIn: "https://www.linkedin.com/in/amyra-harry/" },
    { name: "Mahki Titus", image: "mahki-titus.jpg", linkedIn: "https://www.linkedin.com/in/mahki-titus/" },
    { name: "Daniel Onyejiekwe", image: "daniel-onyejiekwe.jpg", linkedIn: "https://www.linkedin.com/in/daniel-onyejiekwe/" },
    { name: "Arthur Core III", image: "arthur-core-iii.jpg", linkedIn: "https://www.linkedin.com/in/arthur-core-iii/" },
    { name: "Jeremiah Essilfie", image: "jeremiah-essilfie.jpg", linkedIn: "https://www.linkedin.com/in/jeremiah-essilfie/" },
    { name: "Iyinoluwa Ayodele", image: "iyinoluwa-ayodele.jpg", linkedIn: "https://www.linkedin.com/in/iyinoluwa-ayodele/" },
    { name: "Jaunel Panton", image: "jaunel-panton.jpg", linkedIn: "https://www.linkedin.com/in/jaunel-panton/" },
    { name: "Theodore Hagan", image: "theodore-hagan.jpg", linkedIn: "https://www.linkedin.com/in/theodore-hagan/" },
    { name: "Etinosa Ogbeide", image: "etinosa-ogbeide.jpg", linkedIn: "https://www.linkedin.com/in/etinosa-ogbeide/" },
    { name: "Amber Swift-Rose", image: "amber-swift-rose.jpg", linkedIn: "https://www.linkedin.com/in/amber-swift-rose/" },
    { name: "Joshua Akeredolu", image: "joshua-akeredolu.jpg", linkedIn: "https://www.linkedin.com/in/joshua-akeredolu/" },
    { name: "Tarique Cummings", image: "tarique-cummings.jpg", linkedIn: "https://www.linkedin.com/in/tarique-cummings/" },
    { name: "Jason Sampson", image: "jason-sampson.jpg", linkedIn: "https://www.linkedin.com/in/jason-sampson/" },
  ];
  
  
  
  export {
    qualities,
    eboard as members,
    about,
    socials,
    events,
    links,
    conciseGoals,
    faqs,
    testimonials,
    sponsors
  }
  
  