import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Yogesh",
  lastName: "Parekh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "yogesh98parekh@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about software engineering, AI, and personal growth — often
      weaving insights from the Bhagavad Gita, leadership experiences, and
      real-world tech projects to inspire and empower professionals and students
      alike.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/yogesh-parekh",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/engineered-by-yogesh/",
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@engineered-by-yogesh",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting Scalable Solutions with Code</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Yogesh, a pragmatic Software Engineer, mastering Python and AWS to
      deliver scalable, secure solutions. Beyond work, I innovate through
      personal coding ventures.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        👋 Namaste! I'm a software engineer passionate about building purposeful
        tech. Outside of work, I serve as a volunteer and orator at BAPS
        Swaminarayan Sanstha. I enjoy mentoring, exploring AI, and blending
        spiritual wisdom with modern innovation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Tech Prescient",
        timeframe: "Aug 2021 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            <b>Pioneered Centralized Application Management Platform: </b>
            Led a team of 7 to develop a Python and AWS-based platform,
            replacing manual workflows and Google Sheets. Streamlined approvals,
            cutting manual effort by 80% and saving dozens of hours weekly.
          </>,
          <>
            <b>Designed Secure RBAC System: </b>Built an automated Role-Based
            Access Control system integrated with multiple Identity Providers,
            reducing access errors by 30% and enhancing security across 150+
            enterprise applications.
          </>,
          <>
            <b>Drove Stakeholder Success: </b>Collaborated with cross-functional
            teams, gathering requirements and delivering detailed designs,
            accelerating project completion by 15%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "SevenRE UG",
        timeframe: "Jan 2021 - Aug 2021",
        role: "Software Engineer",
        achievements: [
          <>
            <b>Built Scalable Microservices for Urban Mobility: </b>Developed
            secure microservices using AWS Lambda, Terraform, and DynamoDB,
            powering city transportation solutions in partnership with the
            German government.
          </>,
          <>
            <b>Integrated Advanced APIs: </b>Enhanced security and communication
            by integrating Okta for authentication and Twilio for messaging,
            enabling seamless ticketing for public transport.
          </>,
          <>
            <b>Impacted Urban Mobility: </b>Contributed to a government-backed
            project that streamlined ticketing, improving access to public
            transportation for thousands of users.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
