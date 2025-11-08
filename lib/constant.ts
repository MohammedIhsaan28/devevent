export type EventItem = {
  id: string;
  title: string;
  image: string;
  date?: string;
  location?: string;
  url?: string;
  tags?: string[];
  description?: string;
};

export const events: EventItem[] = [
  {
    id: "aws-reinvent-2025",
    title: "AWS re:Invent 2025",
    image: "/images/event-full.png",
    date: "Nov 30 - Dec 4, 2025",
    location: "Las Vegas, NV & Online",
    url: "https://reinvent.awsevents.com/",
    tags: ["cloud", "aws", "infrastructure"],
    description:
      "The largest annual AWS conference covering cloud architecture, security, and new service announcements.",
  },
  {
    id: "nextjs-conf-2025",
    title: "Next.js Conf 2025",
    image: "/images/event1.png",
    date: "Nov 2025 (TBD)",
    location: "Online & San Francisco, CA",
    url: "https://nextjs.org/conf",
    tags: ["react", "nextjs", "frontend"],
    description:
      "Official Next.js conference with talks about performance, tooling and the framework roadmap.",
  },
  {
    id: "react-conf-2025",
    title: "React Conf 2025",
    image: "/images/event2.png",
    date: "Dec 2025 (TBD)",
    location: "Online",
    url: "https://reactjs.org/conf",
    tags: ["react", "frontend"],
    description:
      "Core React team and community speakers covering best practices, patterns and future of React.",
  },
  {
    id: "kubecon-2025",
    title: "KubeCon + CloudNativeCon 2025",
    image: "/images/event3.png",
    date: "Oct 2025 (regional dates vary)",
    location: "Location varies / Hybrid",
    url: "https://events.linuxfoundation.org/kubecon-cloudnativecon/",
    tags: ["kubernetes", "cloud-native", "devops"],
    description:
      "Gathering of the Cloud Native Computing Foundation projects, ecosystem leaders and contributors.",
  },
  {
    id: "github-universe-2025",
    title: "GitHub Universe 2025",
    image: "/images/event4.png",
    date: "Nov 2025 (TBD)",
    location: "San Francisco, CA & Online",
    url: "https://github.com/universe",
    tags: ["developer-tools", "git", "automation"],
    description:
      "Conference focused on developer tools, open source and software delivery practices.",
  },
  {
    id: "hackmit-2026",
    title: "HackMIT 2026",
    image: "/images/event5.png",
    date: "Jan 2026",
    location: "Cambridge, MA",
    url: "https://hackmit.org/",
    tags: ["hackathon", "student", "innovation"],
    description:
      "One of the largest student hackathons in the U.S., welcoming teams to build and ship projects in 24+ hours.",
  },
  {
    id: "jsconf-eu-2026",
    title: "JSConf EU 2026",
    image: "/images/event6.png",
    date: "Apr 2026",
    location: "Berlin, Germany",
    url: "https://jsconf.eu/",
    tags: ["javascript", "web"],
    description:
      "Community-driven JavaScript conference with diverse talks, workshops and social events.",
  },
];

export default events;
