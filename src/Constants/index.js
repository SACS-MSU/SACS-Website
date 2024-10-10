import {
  //CS Declassified
  Acing_your_internship,

  SACS_interest_Meeting,

  CS_Declassified,
  projectIncubator,
  springFullstack,
  workshop_series,
  Acing_your_technical_interview
} from '../assets'

const events = {
  'upcoming': [
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

const members = [
    {
      name: "Daniel Oluwarotimi",
      title: "President",
      major: "Computer Science",
      year: "Class of 2025 🎉",
      skills: ["Web Development", "Backend Development", "Data Engineering"],
      interests: ["Working out", "Reading", "Playing the piano", "Playing table tennis"],
      bio: "Come talk to me about CS, Anime, Books, Music.",
      linkedIn: "https://www.linkedin.com/in/daniel-oluwarotimi/",
      gitHb:"https://github.com/Damilola-4th"
    },
    {
      name: "Ashley Pryor",
      title: "Vice President",
      major: "Computer Science",
      year: "Class of 2025",
      skills: ["Front-end engineering", "Researched CLIs", "IDEs", "Computer science education"],
      interests: ["Reading", "Writing", "Broadway musicals", "K-dramas"],
      bio: "I can help with class registration, job applications, and conference/career fair prep. Feel free to share any recommendations!",
      linkedIn: "https://www.linkedin.com/in/ashley-s-pryor/",
      gitHb:""
    },
    {
      name: "Chukwulenyeudo Uwaeme",
      title: "WebMaster",
      major: "Computer Science",
      year: "Class of 2025",
      skills: ["Machine Learning", "AI/ML", "UI/UX", "Data Science", "Building innovative applications with sleek UIs"],
      interests: ["Building projects", "AI/ML", "UI/UX", "Data Science"],
      bio: "Passionate about creating innovative applications with eye-catching UIs.",
      linkedIn: "https://www.linkedin.com/in/lennythecreator/",
      gitHb:"https://github.com/lennythecreator"
    },
    {
      name: "Krystalyn Douglas",
      title: "Secretary",
      major: "Computer Science / Engineering Physics",
      year: "Class of 2027",
      skills: ["Aerospace Engineering", "Experimental and unmanned vehicles", "Scholarship search", "Employment and internship opportunities"],
      interests: ["Crocheting", "Lacrosse", "Swimming", "Learning"],
      bio: "Passionate about Aerospace Engineering and finding scholarship, employment, and internship opportunities.",
      linkedIn: "https://www.linkedin.com/in/kdouglas-5b383b200/",
      gitHb:""
    }
  ];
  

const about = {
    Mission: "Create Network and Job Opportunities, To Engender Mentorship Opportunities, Sharpening the Technical and Professional Skills of Members, Showcasing the diverse and vast talent pool of Morgan State University.",
    
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
    groupMe:'https://groupme.com/join_group/85581669/HYtLnscb',
    email:'https://mail.google.com/mail/?view=cm&fs=1&to=msu.sacs64@gmail.com'
  }

  const links ={
    signUp:'https://forms.gle/EdJoZPMs8VqUULTY6',
    sponsorship: 'https://forms.gle/MSiPLnqEtmmySfA16'
  }

  
  
  export {
    members,
    about,
    socials,
    events,
    links
  }
  
  