import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    // tripguide,
    handDigit,
    threejs,
    nagarro,
    nagarro2,
    nagarro3,
    galgotias
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Spring Boot Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Python Developer",
      company_name: "GCET",
      icon: galgotias,
      iconBg: "#383E56",
      date: "August 2021 - April 2022",
      points: [
        "Final Year Research based Project",
        "Research paper published in IEEE Conference and utilized CNN and MLP with Adam optimizer",
        "Classified speech signals into gender and emotion categories",
        "DOI: 10.1109/ICACITE53722.2022.9823781",
      ],
    },
    {
      title: "Spring Boot Developer",
      company_name: "Nagarro",
      icon: nagarro2 ,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Jan 2022",
      points: [
        "Proficient in designing and developing robust Spring Boot applications, ensuring scalability, security, and high performance",
        "Experienced in building microservices-based systems, employing Spring Cloud, Eureka for efficient communication and deployment.",
        "Skillful in integrating various databases, such as MySQL, PostgreSQL, or NoSQL databases like MongoDB, to store and retrieve data effectively",
        "Demonstrated expertise in resolving performance bottlenecks, optimizing code of Spring Boot applications.",
      ],
    },
    {
      title: "React Js Developer",
      company_name: "Nagarro",
      icon: nagarro3,
      iconBg: "#383E56",
      date: "Jan 2022 - Aug 2023",
      points: [
        "Proficient in developing dynamic and responsive user interfaces using React.js, ensuring seamless user experiences",
        "Experienced in state management with libraries like Redux or Context API, optimizing application performance and data flow.",
        " Adept at creating reusable and modular components, streamlining development workflows and code maintenance",
        "Skilled in integrating third-party APIs and libraries, enhancing application functionality and data retrieval.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Nagarro",
      icon: nagarro,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Ekansh is an exceptional mentee. His dedication, curiosity, and willingness to learn make them a standout learner. I'm confident he will achieve great success.",
      name: "Osheen Gulati",
      designation: "Mentor",
      company: "Nagarro",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I highly recommend Ekansh as a colleague. His passion for his work, attention to detail, and ability to adapt to new challenges make him a valuable asset to any team.",
      name: "Shivam Sharma",
      designation: "Project Lead",
      company: "Nagarro",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Ekansh is not only a skilled professional but also a great team player. He's always willing to assist his colleagues and shares his knowledge generously.",
      name: "Shailya Chauhan",
      designation: "Colleague",
      company: "Nagarro",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce App",
      description:
        "A Spring Boot backend project using microservices, Test Containers, Maven, and Java, supporting an e-commerce web app with efficiency and scalability and seamless e-commerce functionality.",
      tags: [
        {
          name: "Spring Boot",
          color: "white-text-gradient",
        },
        {
          name: "mongodb",
          color: "white-text-gradient",
        },
        {
          name: "Java",
          color: "white-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/EkanshMishra04/EcommerceWebApp.git",
    },
    {
      name: "Kanban Board WebApp",
      description:
      "A React-powered Kanban board with a user-friendly interface, encompassing essential task management features, including drag-and-drop, labels, due dates, and task assignments. Ideal for efficient project management and collaboration.",
      tags: [
        {
          name: "react",
          color: "white-text-gradient",
        },
        {
          name: "CSS",
          color: "white-text-gradient",
        },
        {
          name: "JavaScript",
          color: "white-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/EkanshMishra04/KanbanBoard.git",
    },
    {
      name: "Hand Digit Recognition System",
      description:
      "A Python program using Keras, TensorFlow, and CNNs to recognize hand-written digits, paired with a Pygame app for real-time recognition.",
      tags: [
        {
          name: "Keras",
          color: "white-text-gradient",
        },
        {
          name: "TensorFLow",
          color: "white-text-gradient",
        },
        {
          name: "Python",
          color: "white-text-gradient",
        },
      ],
      image: handDigit,
      source_code_link: "https://github.com/EkanshMishra04/HandDigitRecognition",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };