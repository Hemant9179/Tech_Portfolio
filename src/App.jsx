import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const projects = [
  {
    name: "Job Magnet Website",
    desc: "MERN stack recruitment platform with JWT auth & OTP verification.",
    live: "https://job-magnet-sigma.vercel.app/",
    code: "https://github.com/Hemant9179/Job-Magnet",
     img: "/img/job.png"
  },
  {
    name: "Weather Checker App",
    desc: "HTML/CSS/JS app with real-time temperature, humidity, and wind info.",
    live: "https://hemant9179.github.io/weather-checker-app/",
    code: "https://github.com/Hemant9179/weather-checker-app",
    img: "/img/weather.png"
  },
  {
    name:"News-Mania App",
    desc:"News-Mania App — A real-time news application built with HTML, CSS, and JavaScript, offering personalized news feeds across multiple categories like politics, tech, and entertainment.",
    code:"https://github.com/Hemant9179/NEW-APP/tree/master",
    img :"/img/news.png"
  },
];

const skills = [
  { name: "HTML 5", img: "/skills/html.png" },
  { name: "CSS 3", img: "/skills/css.png" },
  { name: "JavaScript", img: "/skills/javascript.png" },
  { name: "TypeScript", img: "/skills/typescript.png" },
  { name: "C", img: "/skills/c.png" },
  { name: "C++", img: "/skills/cpp.png" },
  { name: "Python", img: "/skills/python.png" },
  { name: "Node JS", img: "/skills/node.png" },
  { name: "Next JS", img: "/skills/next.png" },
  { name: "React JS", img: "/skills/react.png" },
  { name: "React Native", img: "/skills/react-native.png" },
  { name: "Firebase", img: "/skills/firebase.png" },
  { name: "MongoDB", img: "/skills/mongodb.png" },
  { name: "Express JS", img: "/skills/express.png" },
  { name: "AWS", img: "/skills/aws.png" },
  { name: "Git", img: "/skills/git.png" },
  { name: "Tailwind CSS", img: "/skills/tailwind.png" },
];

const blogPosts = [
  {
  title: "Becoming a Full Stack Developer in 2025",
  desc: "Explore the complete roadmap, essential technologies, and real-world tips to master full stack development—from frontend frameworks to backend APIs and databases.",
  date: "July 20, 2025",
  link: "#",
  img: "/img/Fullstack.png"

  },
  {
    title: "My Internship Experience at Amazon",
    desc: "Sharing my journey, learnings, and key takeaways from my 6-month internship at Amazon.",
    date: "August 1, 2025",
    link: "#",
    img: "/img/amazon.png",
  },
  {
  title: "Mastering Git & GitHub for Developers",
  desc: "Learn essential Git commands, branching strategies, and how to manage open-source contributions like a pro.",
  date: "August 2, 2025",
  link: "#",
  img: "/img/github.png"
}

];

export default function Portfolio() {
  return (
    <main className="relative min-h-screen font-sans scroll-smooth overflow-hidden  bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md py-3 px-6 flex justify-between items-center">
        <h1 className="text-lg font-bold ">Hemant|Dev Portfolio</h1>
        <ul className="flex gap-6 text-sm">
          <li><a href="#overview" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
          <li><a href="#blogs" className="hover:text-blue-400">Blog</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>

   <header className="relative flex flex-col md:flex-row justify-between items-center min-h-screen px-6 md:px-20 pt-24 bg-black text-white overflow-hidden">

  {/* Overlay and side line */}
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-0" />
  <div className="absolute left-6 top-1/3 h-1/2 w-1 bg-purple-500 rounded-full hidden sm:block z-10" />

  {/* Left Content */}
  <div className="z-10 max-w-2xl relative">
    <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6 whitespace-nowrap">
      Hi, I'm <span className="text-purple-500">Hemant</span>
    </h1>

    <p className="text-xl sm:text-2xl font-medium text-gray-300 mb-6">
      I develop web applications using MERN Stack, Next.js, and AWS.
    </p>

    <p className="text-lg text-blue-400 mb-6">
      <Typewriter
        words={[
          "SDE Intern @ Amazon",
          "MERN Stack Developer",
          "C++, JavaScript, AWS Enthusiast",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={60}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </p>

    <div className="flex flex-wrap gap-4">
      <a href="https://github.com/Hemant9179" target="_blank">
        <Github className="w-6 h-6 hover:text-blue-400" />
      </a>
      <a href="https://www.linkedin.com/in/hemant9981" target="_blank">
        <Linkedin className="w-6 h-6 hover:text-blue-400" />
      </a>
      <a href="mailto:hemantjnv2003@gmail.com">
        <Button variant="outline" size="sm">Email Me</Button>
      </a>
      <a
        href="https://drive.google.com/file/d/1wsOUfG02e7NzUvNs8H5y1p5gCs2Y1ELk/view?usp=sharing"
        target="_blank"
      >
        <Button size="sm">Download Resume</Button>
      </a>
    </div>
  </div>

  {/* Right Side Profile Image */}
  <div className="z-8 mt-10 md:mt-0 md:ml-6">  {/* reduced from ml-12 to ml-6 */}
  <img
    src="/hemant-profile.jpg"
    alt="Hemant Profile"
    className="w-64 h-64 object-cover rounded-full border-4 border-purple-600 shadow-lg"
  />
</div>

</header>

<section id="overview" className="w-full py-24 px-6 md:px-20 bg-[#0f0f1a] text-white">
  <p className="text-purple-400 text-sm mb-2 uppercase tracking-wider">Introduction</p>
  <h2 className="text-5xl font-extrabold mb-6">Overview.</h2>
  <p className="text-gray-400 max-w-3xl text-lg mb-16">
    I'm a skilled web developer with experience in JavaScript, TypeScript, and expertise in frameworks and libraries like Next.js, React.js, React Native, and Node.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="bg-[#12122a] border border-purple-500 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <img src="/img/web.png" alt="Web Dev" className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold">Web Developer</h3>
    </div>

    {/* Card 2 */}
    <div className="bg-[#12122a] border border-cyan-500 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <img src="/img/react.png" alt="React Native" className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold">React Native Developer</h3>
    </div>

    {/* Card 3 */}
    <div className="bg-[#12122a] border border-blue-500 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <img src="/img/backend.png" alt="Backend Dev" className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold">Backend Developer</h3>
    </div>
  </div>
</section>

 
    <section id="projects" className="w-full pt-12 pb-20 px-6 md:px-20">
  <p className="text-sm text-gray-400">MY WORK</p>
  <h2 className="text-4xl font-extrabold mb-4">Projects</h2>
  <p className="text-gray-400 mb-10 max-w-3xl">
    Following projects showcase my skills and experience through real-world examples of my work.
    Each project is briefly described with links to code repositories and live demos in it.
    It reflects my ability to solve complex problems, work with different technologies,
    and manage projects effectively.
  </p>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((proj, index) => (
      <div key={index} className="bg-[#12122a] rounded-3xl p-4">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={proj.img}
            alt={proj.name}
            className="rounded-xl object-cover h-52 w-full"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <a href={proj.live} target="_blank" className="bg-white p-2 rounded-full shadow-md">
              <img src="/icons/link.png" className="w-4 h-4" alt="Live Link" />
            </a>
            <a href={proj.code} target="_blank" className="bg-white p-2 rounded-full shadow-md">
              <img src="/icons/github.svg" className="w-4 h-4" alt="GitHub Code" />
            </a>
          </div>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">{proj.name}</h3>
        <p className="text-gray-400 text-sm mt-1">{proj.desc}</p>
      </div>
    ))}
  </div>
</section>


      <section id="skills" className="w-full py-24 px-6 md:px-20">
  <h2 className="text-3xl font-bold mb-10">Skills</h2>
  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
    {skills.map((skill, idx) => (
      <div key={idx} className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
          <img src={skill.img} alt={skill.name} className="w-10 h-10 object-contain" />
        </div>
        <p className="mt-2 text-sm text-center text-white">{skill.name}</p>
      </div>
    ))}
  </div>
</section>


      <section id="testimonials" className="w-full py-24 px-6 md:px-20 bg-[#0f0f1a]">
  <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-[#0a0a17] p-6 rounded-2xl">
      <p className="text-3xl text-white font-bold mb-4">"</p>
      <p className="text-white mb-6 leading-relaxed">
        I thought it was impossible to make a website as beautiful as our services, but Hemant proved me wrong.
      </p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-blue-400 font-semibold">@ Kapil Singh</p>
          <p className="text-sm text-white">Co-Owner of Technosoft</p>
        </div>
        <img src="/img/badge.png" className="w-10 h-10 rounded-full object-cover" alt="Kapil" />
      </div>
    </div>

    <div className="bg-[#0a0a17] p-6 rounded-2xl">
      <p className="text-3xl text-white font-bold mb-4">"</p>
      <p className="text-white mb-6 leading-relaxed">
        After Hemant optimized our website, our traffic increased by 50%. We can't thank them enough!
      </p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-blue-400 font-semibold">@ Abhishek Kumar</p>
          <p className="text-sm text-white">CMO of Diva</p>
        </div>
        <img src="/img/badge.png" className="w-10 h-10 rounded-full object-cover" alt="Abhishek" />
      </div>
    </div>

    <div className="bg-[#0a0a17] p-6 rounded-2xl">
      <p className="text-3xl text-white font-bold mb-4">"</p>
      <p className="text-white mb-6 leading-relaxed">
        I've never met a web developer who truly cares about their clients' success like Hemant does.
      </p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-blue-400 font-semibold">@ Shivam Chandel</p>
          <p className="text-sm text-white">Owner of GetPant</p>
        </div>
        <img src="/img/badge.png" className="w-10 h-10 rounded-full object-cover" alt="Shivam" />
      </div>
    </div>
  </div>
</section>


  <section id="blogs" className="w-full py-24 bg-gray-900 px-6 md:px-20">
  <h2 className="text-4xl font-bold mb-4 text-white text-center">Blogs</h2>
  <p className="text-gray-400 text-center mb-10">
    Explore insights, personal experiences, and tutorials I've written based on real-world development and my career journey.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {blogPosts.map((post, idx) => (
      <div key={idx} className="bg-[#1a1a2e] rounded-xl shadow-md overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="h-55 w-105 object-cover"
        />
        <div className="p-4">
          <p className="text-xs text-gray-400 mb-1">{post.date}</p>
          <h3 className="text-lg font-semibold text-white">{post.title}</h3>
          <p className="text-sm text-gray-400 mt-1">{post.desc}</p>
          <a
            href={post.link}
            target="_blank"
            className="inline-block mt-3 text-blue-400 hover:underline text-sm"
          >
            Read More →
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


      <section
  id="contact"
  className="w-full flex flex-col md:flex-row justify-between items-center bg-[#0a0a17] px-6 md:px-20 py-20 text-white"
>
  {/* Contact Form */}
  <div className="w-full md:w-1/2 max-w-md">
    <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-2">
      Get in Touch
    </h3>
    <h2 className="text-4xl font-bold mb-10">
      Contact<span className="text-purple-500"></span>
    </h2>
    <form
  action="https://formsubmit.co/chaurasiya9179@gmail.com"
  method="POST"
  className="space-y-6"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://your-portfolio-site.com/thank-you" />

      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="What's your name?"
          className="w-full px-4 py-3 rounded-lg bg-[#12122a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Your email
        </label>
        <input
          type="email"
          id="email"
          placeholder="What's your email?"
          className="w-full px-4 py-3 rounded-lg bg-[#12122a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          placeholder="What do you want to say?"
          rows="5"
          className="w-full px-4 py-3 rounded-lg bg-[#12122a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        ></textarea>
      </div>
<Button
  variant="default"
  className="relative bg-purple-600 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:scale-105 hover:bg-purple-700 transition-all duration-300 overflow-hidden"
>
  <span className="absolute inset-0 bg-purple-800 opacity-20 blur-sm animate-pulse"></span>
  <span className="relative z-10 flex items-center gap-2">
    🚀 Send Message
  </span>
</Button>

    </form>
  </div>
  
  
  {/* 3D Earth or Globe Image */}
  <div className="rounded-xl overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/img/earth.mp4" type="video/mp4" />
    </video>
  </div>
</section>

 <footer className="w-full py-6 flex justify-center bg-transparent">
  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md shadow-lg animate-fade-in text-sm sm:text-base">
    <span className="font-medium">Made with</span>
    <span className="animate-pulse">❤️</span>
    <span className="font-medium">by</span>
    <span className="font-bold">HKC</span>
  </div>
</footer>


    </main>
  );
}
