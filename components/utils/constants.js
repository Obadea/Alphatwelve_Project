import {
  SvgArrowDowntIcon,
  SvgArrowUptIcon,
  SvgBellIcon,
  SvgCalenderIcon,
  SvgDocumentIcon,
  SvgDoubleChatIcon,
  SvgDoubleChevronLeftIcon,
  SvgDoubleChevronRightIcon,
  SvgEventIcon,
  SvgHomeIcon,
  SvgReport2Icon,
  SvgSettingsTwoIcon,
  SvgSpeaker2Icon,
  SvgUserSpeakerIcon,
} from './SvgIcons';

export const navMenu = [
  {
    href: '/',
    text: 'Home',
    icon: SvgHomeIcon,
  },
  {
    href: '/',
    text: 'Events',
    icon: SvgCalenderIcon,
  },
  {
    href: '/',
    text: 'Speakers',
    icon: SvgUserSpeakerIcon,
  },
  {
    href: '/',
    text: 'Reports',
    icon: SvgDocumentIcon,
  },
  {
    href: '/',
    text: 'Notifications',
    icon: SvgBellIcon,
    message: '3',
  },
  {
    href: '/',
    text: 'Messages',
    icon: SvgDoubleChatIcon,
  },
  {
    href: '/',
    text: 'Settings',
    icon: SvgSettingsTwoIcon,
  },
  {
    href: '/',
    text: 'Collapse',
    icon: SvgDoubleChevronLeftIcon,
  },
];

export const navMenuCollapse = [
  {
    href: '/',
    text: 'Home',
    icon: SvgHomeIcon,
  },
  {
    href: '/',
    text: 'Events',
    icon: SvgEventIcon,
  },
  {
    href: '/',
    text: 'Speakers',
    icon: SvgSpeaker2Icon,
  },
  {
    href: '/',
    text: 'Reports',
    icon: SvgReport2Icon,
  },
  {
    href: '/',
    text: 'Notifications',
    icon: SvgBellIcon,
    message: '3',
  },
  {
    href: '/',
    text: 'Messages',
    icon: SvgDoubleChatIcon,
  },
  {
    href: '/',
    text: 'Settings',
    icon: SvgSettingsTwoIcon,
  },
  {
    href: '/',
    text: 'Collapse',
    icon: SvgDoubleChevronRightIcon,
  },
];

export const cardData = [
  {
    name: 'Total Events',
    amount: '100,000',
    icon: SvgArrowUptIcon,
    status: 'up',
  },
  {
    name: 'Active Speakers',
    amount: '25',
    icon: SvgArrowDowntIcon,
    status: 'down',
  },
  {
    name: 'Total Registrations',
    amount: '300',
    icon: SvgArrowUptIcon,
    status: 'up',
  },
  {
    name: 'Total Revenue',
    amount: '$500,000',
    icon: SvgArrowUptIcon,
    status: 'up',
  },
];

export const eventData = [
  {
    eventName: 'Alphatwelve Frontend Developer Project',
    date: '2025-06-12',
    speaker: 'Obadea 😁',
    status: 'Completed',
    eventDescription:
      'This project is a responsive Event Management Dashboard built based on a Figma design. The dashboard allows users to view key event statistics, news updates, and event details with interactive features like a collapsible sidebar, overview cards, an interactive chart, a modal pop-up and many more.',
    numGuestSpeakers: 1,
    attendees: 150,
  },
  {
    eventName: 'Decentralized composite data-warehouse',
    date: '2024-06-18',
    speaker: 'Cynthia Joseph',
    status: 'In Progress',
    eventDescription: 'An in-depth discussion on decentralized data solutions.',
    numGuestSpeakers: 3,
    attendees: 200,
  },
  {
    eventName: 'Re-engineered real-time instruction set',
    date: '2024-07-01',
    speaker: 'Joseph Miller',
    status: 'In Progress',
    eventDescription: 'A workshop on real-time instruction set technologies.',
    numGuestSpeakers: 1,
    attendees: 120,
  },
  {
    eventName: 'Quality-focused attitude-oriented adapter',
    date: '2024-06-26',
    speaker: 'Rachel Smith',
    status: 'In Progress',
    eventDescription:
      'A lecture on improving workplace adaptability through a quality-first approach.',
    numGuestSpeakers: 4,
    attendees: 180,
  },
  {
    eventName: 'Organic human-resource challenge',
    date: '2024-07-08',
    speaker: 'Christopher Murray',
    status: 'Completed',
    eventDescription:
      'An interactive session on HR challenges in the modern workplace.',
    numGuestSpeakers: 2,
    attendees: 220,
  },
  {
    eventName: 'Streamlined logistical matrix',
    date: '2024-05-30',
    speaker: 'Ashley Brown',
    status: 'Completed',
    eventDescription:
      'Exploring new strategies for optimizing logistical operations.',
    numGuestSpeakers: 1,
    attendees: 95,
  },
  {
    eventName: 'Synergized intermediate system engine',
    date: '2024-08-04',
    speaker: 'Daniel Taylor',
    status: 'In Progress',
    eventDescription:
      'A panel on intermediate system engines and their future.',
    numGuestSpeakers: 5,
    attendees: 300,
  },
  {
    eventName: 'Self-enabling context-sensitive function',
    date: '2024-04-11',
    speaker: 'Emily Wilson',
    status: 'Completed',
    eventDescription:
      'Understanding context-sensitive functions and their impact.',
    numGuestSpeakers: 3,
    attendees: 170,
  },
  {
    eventName: 'Customizable bi-directional methodology',
    date: '2024-09-17',
    speaker: 'James Anderson',
    status: 'In Progress',
    eventDescription:
      'A customizable approach to bi-directional methodologies.',
    numGuestSpeakers: 2,
    attendees: 140,
  },
  {
    eventName: 'Optimized coherent website',
    date: '2024-07-25',
    speaker: 'Olivia Harris',
    status: 'Completed',
    eventDescription: 'Best practices for optimizing website performance.',
    numGuestSpeakers: 1,
    attendees: 110,
  },
  {
    eventName: 'Ergonomic user-facing functionalities',
    date: '2024-03-05',
    speaker: 'Mia Campbell',
    status: 'In Progress',
    eventDescription:
      'Enhancing user-facing functionalities through ergonomic design.',
    numGuestSpeakers: 2,
    attendees: 160,
  },
  {
    eventName: 'Balanced hybrid infrastructure',
    date: '2024-06-14',
    speaker: 'Ethan Thompson',
    status: 'In Progress',
    eventDescription:
      'A guide to balancing hybrid infrastructure for modern companies.',
    numGuestSpeakers: 3,
    attendees: 180,
  },
  {
    eventName: 'Configurable empowering firmware',
    date: '2024-02-22',
    speaker: 'Sophia Lewis',
    status: 'Completed',
    eventDescription: 'Configuring firmware to empower system performance.',
    numGuestSpeakers: 4,
    attendees: 210,
  },
  {
    eventName: 'User-friendly multi-tasking framework',
    date: '2024-05-03',
    speaker: 'Michael Martinez',
    status: 'In Progress',
    eventDescription:
      'Exploring frameworks to enhance multi-tasking capabilities.',
    numGuestSpeakers: 1,
    attendees: 130,
  },
  {
    eventName: 'Up-sized eco-centric approach',
    date: '2024-04-16',
    speaker: 'Charlotte Clark',
    status: 'Completed',
    eventDescription: 'An eco-centric approach to business expansion.',
    numGuestSpeakers: 2,
    attendees: 160,
  },
  {
    eventName: 'Monitored global productivity',
    date: '2024-10-10',
    speaker: 'Liam Scott',
    status: 'In Progress',
    eventDescription:
      'A forum on monitoring and improving global productivity.',
    numGuestSpeakers: 4,
    attendees: 240,
  },
  {
    eventName: 'Re-contextualized exuding solution',
    date: '2024-01-25',
    speaker: 'Lucas Perez',
    status: 'Completed',
    eventDescription: 'Redefining exuding solutions in the current market.',
    numGuestSpeakers: 3,
    attendees: 100,
  },
  {
    eventName: 'Advanced empowering synergy',
    date: '2024-03-27',
    speaker: 'Ava Lee',
    status: 'Completed',
    eventDescription: 'Synergy in empowering businesses for rapid growth.',
    numGuestSpeakers: 2,
    attendees: 90,
  },
  {
    eventName: 'Cross-platform intuitive middleware',
    date: '2024-02-12',
    speaker: 'Amelia Robinson',
    status: 'In Progress',
    eventDescription: 'A deep dive into middleware solutions across platforms.',
    numGuestSpeakers: 5,
    attendees: 260,
  },
  {
    eventName: 'Profound full-range instruction set',
    date: '2024-09-20',
    speaker: 'Isabella White',
    status: 'Completed',
    eventDescription: 'Exploring full-range instruction set developments.',
    numGuestSpeakers: 1,
    attendees: 80,
  },
  {
    eventName: 'Automated radical interface',
    date: '2024-04-02',
    speaker: 'Oliver Hill',
    status: 'In Progress',
    eventDescription:
      'Creating interfaces that automate radical user experiences.',
    numGuestSpeakers: 2,
    attendees: 190,
  },
  {
    eventName: 'Integrated multimedia orchestration',
    date: '2024-07-14',
    speaker: 'Jack King',
    status: 'In Progress',
    eventDescription:
      'Orchestrating multimedia elements for enhanced experiences.',
    numGuestSpeakers: 4,
    attendees: 210,
  },
  {
    eventName: 'Object-based solution-oriented workforce',
    date: '2024-09-05',
    speaker: 'William Green',
    status: 'Completed',
    eventDescription:
      'Building a solution-oriented workforce through object-based strategies.',
    numGuestSpeakers: 3,
    attendees: 230,
  },
  {
    eventName: 'Pre-emptive demand-driven support',
    date: '2024-10-01',
    speaker: 'Emma Adams',
    status: 'Completed',
    eventDescription: 'Proactively meeting demand-driven support requirements.',
    numGuestSpeakers: 2,
    attendees: 120,
  },
  {
    eventName: 'Upgradable logistical projection',
    date: '2024-01-19',
    speaker: 'Benjamin Nelson',
    status: 'In Progress',
    eventDescription: 'Upgrading logistics for future-focused projections.',
    numGuestSpeakers: 1,
    attendees: 90,
  },
  {
    eventName: 'Persistent optimal neural-net',
    date: '2024-05-25',
    speaker: 'Charlotte Baker',
    status: 'Completed',
    eventDescription:
      'Maintaining optimal performance in neural-net frameworks.',
    numGuestSpeakers: 5,
    attendees: 240,
  },
  {
    eventName: 'Distributed systematic time-frame',
    date: '2024-09-10',
    speaker: 'Lucas Carter',
    status: 'Completed',
    eventDescription:
      'Designing systematic time-frames in distributed environments.',
    numGuestSpeakers: 3,
    attendees: 170,
  },
  {
    eventName: 'Optimized asymmetric implementation',
    date: '2024-06-07',
    speaker: 'Emily Diaz',
    status: 'In Progress',
    eventDescription:
      'Leveraging asymmetric strategies for optimized performance.',
    numGuestSpeakers: 4,
    attendees: 210,
  },
  {
    eventName: 'Centralized logistical flexibility',
    date: '2024-03-14',
    speaker: 'Henry Roberts',
    status: 'Completed',
    eventDescription: 'Centralizing logistics while maintaining flexibility.',
    numGuestSpeakers: 2,
    attendees: 140,
  },
  {
    eventName: 'Synergistic multi-tiered strategy',
    date: '2024-02-28',
    speaker: 'Lily Mitchell',
    status: 'In Progress',
    eventDescription: 'Building multi-tiered strategies through synergy.',
    numGuestSpeakers: 2,
    attendees: 180,
  },
  {
    eventName: 'Seamless cohesive extranet',
    date: '2024-08-12',
    speaker: 'Samuel Perez',
    status: 'Completed',
    eventDescription: 'Integrating seamless extranet solutions for businesses.',
    numGuestSpeakers: 1,
    attendees: 110,
  },
  {
    eventName: 'Virtual eco-centric architecture',
    date: '2024-06-05',
    speaker: 'Ella Hall',
    status: 'In Progress',
    eventDescription:
      'Exploring virtual architecture with an eco-centric focus.',
    numGuestSpeakers: 4,
    attendees: 190,
  },
  {
    eventName: 'Expanded background infrastructure',
    date: '2024-09-24',
    speaker: 'Lucas Wright',
    status: 'Completed',
    eventDescription:
      'Expanding infrastructure capabilities for background operations.',
    numGuestSpeakers: 3,
    attendees: 170,
  },
  {
    eventName: 'Open-architected bifurcated initiative',
    date: '2024-05-18',
    speaker: 'Mason Sanchez',
    status: 'Completed',
    eventDescription:
      'Driving bifurcated initiatives in open-architected systems.',
    numGuestSpeakers: 2,
    attendees: 130,
  },
  {
    eventName: 'Re-engineered interactive extranet',
    date: '2024-04-29',
    speaker: 'Sophia Allen',
    status: 'In Progress',
    eventDescription: 'Creating re-engineered interactive extranets.',
    numGuestSpeakers: 5,
    attendees: 250,
  },
  {
    eventName: 'Fundamental content-based methodology',
    date: '2024-07-27',
    speaker: 'Oliver Young',
    status: 'Completed',
    eventDescription: 'Methodologies in content-based strategy development.',
    numGuestSpeakers: 2,
    attendees: 140,
  },
  {
    eventName: 'Synchronised value-added time-frame',
    date: '2024-09-15',
    speaker: 'Amelia Hernandez',
    status: 'In Progress',
    eventDescription:
      'Adding value through synchronized time-frame structures.',
    numGuestSpeakers: 1,
    attendees: 85,
  },
  {
    eventName: 'Business-focused context-sensitive open system',
    date: '2024-08-02',
    speaker: 'Jacob Martin',
    status: 'Completed',
    eventDescription: 'Developing business-focused open systems.',
    numGuestSpeakers: 3,
    attendees: 170,
  },
  {
    eventName: 'Phased asynchronous migration',
    date: '2024-06-19',
    speaker: 'Alexander Turner',
    status: 'Completed',
    eventDescription: 'Phased migrations for asynchronous systems.',
    numGuestSpeakers: 1,
    attendees: 100,
  },
  {
    eventName: 'Reverse-engineered real-time workforce',
    date: '2024-03-23',
    speaker: 'Isabella Lewis',
    status: 'In Progress',
    eventDescription:
      'Re-engineering workforce solutions for real-time environments.',
    numGuestSpeakers: 4,
    attendees: 230,
  },
  {
    eventName: 'Intuitive motivating standardization',
    date: '2024-07-19',
    speaker: 'Liam Phillips',
    status: 'Completed',
    eventDescription: 'Motivating standardization through intuitive practices.',
    numGuestSpeakers: 3,
    attendees: 90,
  },
  {
    eventName: 'Up-sized solution-oriented synergy',
    date: '2024-05-07',
    speaker: 'Ava Evans',
    status: 'In Progress',
    eventDescription: 'Upsizing solutions for synergy-driven environments.',
    numGuestSpeakers: 2,
    attendees: 140,
  },
  {
    eventName: 'Extended coherent approach',
    date: '2024-04-20',
    speaker: 'Charlotte Turner',
    status: 'In Progress',
    eventDescription: 'Creating extended strategies with a coherent approach.',
    numGuestSpeakers: 5,
    attendees: 220,
  },
  {
    eventName: 'Innovative dynamic forecast',
    date: '2024-02-10',
    speaker: 'James Collins',
    status: 'Completed',
    eventDescription: 'Forecasting business trends with dynamic innovation.',
    numGuestSpeakers: 2,
    attendees: 80,
  },
  {
    eventName: 'Secured impactful model',
    date: '2024-08-25',
    speaker: 'Benjamin Reed',
    status: 'In Progress',
    eventDescription: 'Securing models for impactful business strategies.',
    numGuestSpeakers: 1,
    attendees: 190,
  },
  {
    eventName: 'Streamlined content-based function',
    date: '2024-03-31',
    speaker: 'Henry Diaz',
    status: 'Completed',
    eventDescription: 'Streamlining content-based functions across industries.',
    numGuestSpeakers: 3,
    attendees: 120,
  },
  {
    eventName: 'Configurable background leverage',
    date: '2024-07-23',
    speaker: 'Ella Rogers',
    status: 'In Progress',
    eventDescription:
      'Configuring leverage strategies for background operations.',
    numGuestSpeakers: 4,
    attendees: 200,
  },
  {
    eventName: 'Persistent heuristic internet solution',
    date: '2024-05-10',
    speaker: 'Lily Bell',
    status: 'Completed',
    eventDescription: 'Heuristic solutions for internet-focused strategies.',
    numGuestSpeakers: 1,
    attendees: 150,
  },
  {
    eventName: 'AI Conference',
    date: '2024-04-15',
    speaker: 'John Doe',
    eventDescription: 'Discussing AI advancements and applications.',
    numGuestSpeakers: 3,
    attendees: 250,
    status: 'Completed',
  },
  {
    eventName: 'React Summit',
    date: '2024-04-20',
    speaker: 'Jane Smith',
    eventDescription: 'Exploring the latest trends in React development.',
    numGuestSpeakers: 2,
    attendees: 400,
    status: 'In Progress',
  },
  {
    eventName: 'Next.js Workshop',
    date: '2024-05-05',
    speaker: 'David Lee',
    eventDescription: 'A hands-on workshop for building Next.js applications.',
    numGuestSpeakers: 1,
    attendees: 150,
    status: 'Completed',
  },
  {
    eventName: 'JavaScript Bootcamp',
    date: '2024-05-12',
    speaker: 'Emily Johnson',
    eventDescription: 'A comprehensive bootcamp on modern JavaScript.',
    numGuestSpeakers: 4,
    attendees: 300,
    status: 'In Progress',
  },
  {
    eventName: 'Cloud Computing Expo',
    date: '2024-06-02',
    speaker: 'Michael Green',
    eventDescription: 'Exhibition and talks on cloud computing technologies.',
    numGuestSpeakers: 5,
    attendees: 600,
    status: 'Completed',
  },
  {
    eventName: 'Cybersecurity Forum',
    date: '2024-06-18',
    speaker: 'Sarah White',
    eventDescription: 'Forum discussing the latest in cybersecurity.',
    numGuestSpeakers: 3,
    attendees: 450,
    status: 'In Progress',
  },
  {
    eventName: 'Data Science Meetup',
    date: '2024-07-10',
    speaker: 'Kevin Brown',
    eventDescription: 'Meetup for data scientists to share knowledge.',
    numGuestSpeakers: 4,
    attendees: 200,
    status: 'Completed',
  },
  {
    eventName: 'Mobile App Development',
    date: '2024-07-15',
    speaker: 'Lisa Black',
    eventDescription: 'Workshop on building mobile applications.',
    numGuestSpeakers: 2,
    attendees: 180,
    status: 'Completed',
  },
  {
    eventName: 'Tech Leadership Summit',
    date: '2024-08-01',
    speaker: 'Robert Wilson',
    eventDescription: 'Summit focused on technology leadership skills.',
    numGuestSpeakers: 5,
    attendees: 500,
    status: 'In Progress',
  },
  {
    eventName: 'UI/UX Design Conference',
    date: '2024-08-20',
    speaker: 'Jessica Hall',
    eventDescription:
      'Conference on user interface and user experience design.',
    numGuestSpeakers: 4,
    attendees: 300,
    status: 'Completed',
  },
  {
    eventName: 'Python for Data Science',
    date: '2024-09-05',
    speaker: 'Peter Adams',
    eventDescription: 'Workshop on using Python for data science projects.',
    numGuestSpeakers: 1,
    attendees: 250,
    status: 'In Progress',
  },
  {
    eventName: 'Blockchain and Cryptocurrency',
    date: '2024-09-15',
    speaker: 'Samantha Taylor',
    eventDescription: 'A deep dive into blockchain and cryptocurrencies.',
    numGuestSpeakers: 3,
    attendees: 400,
    status: 'Completed',
  },
  {
    eventName: 'Machine Learning Symposium',
    date: '2024-09-25',
    speaker: 'James Moore',
    eventDescription: 'Symposium on the latest trends in machine learning.',
    numGuestSpeakers: 5,
    attendees: 550,
    status: 'Completed',
  },
  {
    eventName: 'DevOps Days',
    date: '2024-10-10',
    speaker: 'Rachel King',
    eventDescription: 'Conference on DevOps practices and tools.',
    numGuestSpeakers: 2,
    attendees: 300,
    status: 'In Progress',
  },
  {
    eventName: 'Agile Project Management',
    date: '2024-10-22',
    speaker: 'Thomas Harris',
    eventDescription:
      'Workshop on managing projects using Agile methodologies.',
    numGuestSpeakers: 1,
    attendees: 220,
    status: 'Completed',
  },
  {
    eventName: 'Artificial Intelligence Ethics',
    date: '2024-11-01',
    speaker: 'Anna Wright',
    eventDescription: 'Exploring the ethics of artificial intelligence.',
    numGuestSpeakers: 4,
    attendees: 350,
    status: 'Completed',
  },
  {
    eventName: 'Big Data Summit',
    date: '2024-11-12',
    speaker: 'Chris Scott',
    eventDescription: 'Summit on big data analytics and infrastructure.',
    numGuestSpeakers: 3,
    attendees: 450,
    status: 'In Progress',
  },
  {
    eventName: 'Startup Incubator Program',
    date: '2024-11-22',
    speaker: 'Amy Miller',
    eventDescription: 'Incubation program for new startup founders.',
    numGuestSpeakers: 6,
    attendees: 100,
    status: 'Completed',
  },
  {
    eventName: 'Web Development Conference',
    date: '2024-12-05',
    speaker: 'Oliver Clark',
    eventDescription: 'Conference focused on full-stack web development.',
    numGuestSpeakers: 2,
    attendees: 300,
    status: 'Completed',
  },
  {
    eventName: 'Digital Marketing Bootcamp',
    date: '2024-12-18',
    speaker: 'Ella Lewis',
    eventDescription: 'A bootcamp for digital marketing professionals.',
    numGuestSpeakers: 3,
    attendees: 180,
    status: 'In Progress',
  },
  {
    eventName: 'IoT and Smart Cities',
    date: '2025-01-10',
    speaker: 'Henry Walker',
    eventDescription: 'Discussion on IoT applications for smart cities.',
    numGuestSpeakers: 4,
    attendees: 400,
    status: 'Completed',
  },
  {
    eventName: 'SaaS Conference',
    date: '2025-01-22',
    speaker: 'Laura Young',
    eventDescription: 'Conference on SaaS solutions for businesses.',
    numGuestSpeakers: 2,
    attendees: 320,
    status: 'In Progress',
  },
  {
    eventName: 'Virtual Reality Summit',
    date: '2025-02-05',
    speaker: 'George Allen',
    eventDescription: 'Summit on the latest trends in virtual reality.',
    numGuestSpeakers: 3,
    attendees: 270,
    status: 'Completed',
  },
  {
    eventName: 'Fintech Innovations',
    date: '2025-02-18',
    speaker: 'Diana Evans',
    eventDescription:
      'Exploring the latest innovations in financial technology.',
    numGuestSpeakers: 5,
    attendees: 450,
    status: 'In Progress',
  },
  {
    eventName: 'HealthTech Conference',
    date: '2025-03-02',
    speaker: 'Oscar Martin',
    eventDescription: 'Conference on technology in healthcare.',
    numGuestSpeakers: 4,
    attendees: 300,
    status: 'Completed',
  },
  {
    eventName: 'Sustainable Energy Forum',
    date: '2025-03-15',
    speaker: 'Nancy Mitchell',
    eventDescription: 'Forum on sustainable energy solutions.',
    numGuestSpeakers: 5,
    attendees: 550,
    status: 'Completed',
  },
  {
    eventName: 'Digital Transformation',
    date: '2025-04-01',
    speaker: 'Steven Phillips',
    eventDescription: 'Workshop on digital transformation strategies.',
    numGuestSpeakers: 2,
    attendees: 200,
    status: 'In Progress',
  },
  {
    eventName: 'The 5G and Beyond',
    date: '2025-04-10',
    speaker: 'Barbara Ross',
    eventDescription: 'Discussing the future of 5G and communication networks.',
    numGuestSpeakers: 3,
    attendees: 350,
    status: 'Completed',
  },
  {
    eventName: 'Ethical Hacking Bootcamp',
    date: '2025-04-22',
    speaker: 'Larry Cooper',
    eventDescription: 'Bootcamp on ethical hacking and cybersecurity.',
    numGuestSpeakers: 4,
    attendees: 230,
    status: 'In Progress',
  },
  {
    eventName: 'E-commerce Innovations',
    date: '2025-05-05',
    speaker: 'Sharon Hughes',
    eventDescription: 'Innovations in the e-commerce industry.',
    numGuestSpeakers: 2,
    attendees: 300,
    status: 'Completed',
  },
  {
    eventName: 'Quantum Computing Conference',
    date: '2025-06-01',
    speaker: 'Kate Sanders',
    eventDescription: 'Conference on quantum computing applications.',
    numGuestSpeakers: 4,
    attendees: 320,
    status: 'Completed',
  },
  {
    eventName: 'SpaceTech Forum',
    date: '2025-06-12',
    speaker: 'Brian Peterson',
    eventDescription: 'Forum on space technology and exploration.',
    numGuestSpeakers: 5,
    attendees: 500,
    status: 'Completed',
  },
];
