import { ExternalLink, Github, Filter } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "Water Billing Management System",
    description:
      "A full-featured web-based system for managing water utility billing, customer accounts, meter readings, and payment tracking. Includes admin dashboard and reporting.",
    image: null,
    gradient: "from-blue-500/20 to-cyan-500/10",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery", "AJAX"],
    github: "https://github.com/Glenn-IT/wbms",
    demo: null,
    category: "Web App",
    featured: true,
  },
  {
    title: "Youth Information System (PMS)",
    description:
      "A comprehensive barangay management system for tracking youth (SK) member profiles, events, QR attendance, announcements, and officials. Features QR code integration.",
    image: null,
    gradient: "from-amethyst-500/20 to-purple-500/10",
    tags: ["PHP", "MySQL", "JavaScript", "CSS", "QR Code API", "Bootstrap"],
    github: "https://github.com/Glenn-IT/pms",
    demo: null,
    category: "Web App",
    featured: true,
  },
  {
    title: "JB Printing Services",
    description:
      "Full e-commerce web platform for a printing business. Includes product catalog, cart, checkout, order management, design uploads, GCash payment, and email notifications via PHPMailer.",
    image: null,
    gradient: "from-orange-500/20 to-red-500/10",
    tags: ["PHP", "MySQL", "CSS", "PHPMailer", "Bootstrap", "JavaScript"],
    github: "https://github.com/Glenn-IT/JB_Printing_Services",
    demo: null,
    category: "E-Commerce",
    featured: true,
  },
  {
    title: "PTODA Booking App",
    description:
      "Android mobile application for booking tricycle (PTODA) rides. Built with Kotlin, connected to a PHP REST API backend for real-time booking management.",
    image: null,
    gradient: "from-green-500/20 to-teal-500/10",
    tags: ["Kotlin", "Android", "PHP API", "MySQL", "REST API"],
    github: "https://github.com/Glenn-IT/PTODABookingApp",
    demo: null,
    category: "Mobile App",
    featured: true,
  },
  {
    title: "OTAS – Online Task & Attendance System",
    description:
      "Web-based system for managing employee tasks and tracking attendance. Features role-based access control, task assignment, and status tracking.",
    image: null,
    gradient: "from-slate_blue-500/20 to-indigo-500/10",
    tags: ["JavaScript", "PHP", "MySQL", "Bootstrap", "AJAX"],
    github: "https://github.com/Glenn-IT/otas",
    demo: null,
    category: "Web App",
    featured: false,
  },
  {
    title: "BAC – Bidding & Awards Committee System",
    description:
      "Government procurement management system for tracking bids, resolutions, and contract awards. Designed for compliance with RA 9184.",
    image: null,
    gradient: "from-federal_blue-500/20 to-blue-500/10",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Glenn-IT/bac-system",
    demo: null,
    category: "Web App",
    featured: false,
  },
  {
    title: "Shakira Salon Online",
    description:
      "Online booking and showcase website for a salon business. Features service listings, appointment booking, and gallery section.",
    image: null,
    gradient: "from-pink-500/20 to-rose-500/10",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/Glenn-IT/Shakira-Salon_Online",
    demo: null,
    category: "Website",
    featured: false,
  },
  {
    title: "Attendance Monitoring System",
    description:
      "Web-based attendance monitoring and timekeeping application for organizations. Tracks employee check-in/out and generates attendance reports.",
    image: null,
    gradient: "from-violet_blue-500/20 to-purple-500/10",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Glenn-IT/Attendance_Monitoring",
    demo: null,
    category: "Web App",
    featured: false,
  },
  {
    title: "Doctor Appointment System",
    description:
      "Patients can schedule appointments with doctors or dentists. Includes SMS/Email reminders and admin management panel.",
    image: null,
    gradient: "from-cyan-500/20 to-blue-500/10",
    tags: ["PHP", "MySQL", "SMS API", "Email API", "Bootstrap"],
    github: "https://github.com/Glenn-IT",
    demo: null,
    category: "Web App",
    featured: false,
  },
  {
    title: "Payroll Management System",
    description:
      "Calculates employee salaries, deductions, and generates payslips for organizations. Includes tax computation and HR integration.",
    image: null,
    gradient: "from-yellow-500/20 to-amber-500/10",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/Glenn-IT",
    demo: null,
    category: "Web App",
    featured: false,
  },
];

const categories = ["All", "Web App", "Mobile App", "E-Commerce", "Website"];

const techColors = {
  PHP: "bg-purple-500/15 text-purple-300 border-purple-500/25",
  MySQL: "bg-blue-500/15 text-blue-300 border-blue-500/25",
  JavaScript: "bg-yellow-500/15 text-yellow-300 border-yellow-500/25",
  Bootstrap: "bg-violet-500/15 text-violet-300 border-violet-500/25",
  jQuery: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  AJAX: "bg-orange-500/15 text-orange-300 border-orange-500/25",
  React: "bg-sky-500/15 text-sky-300 border-sky-500/25",
  Kotlin: "bg-green-500/15 text-green-300 border-green-500/25",
  Android: "bg-lime-500/15 text-lime-300 border-lime-500/25",
  HTML: "bg-orange-500/15 text-orange-300 border-orange-500/25",
  CSS: "bg-blue-500/15 text-blue-300 border-blue-500/25",
  default: "bg-amethyst-500/15 text-amethyst-300 border-amethyst-500/25",
};

function getTechColor(tag) {
  for (const [key, val] of Object.entries(techColors)) {
    if (tag.toLowerCase().includes(key.toLowerCase())) return val;
  }
  return techColors.default;
}

function ProjectCard({ project, index }) {
  return (
    <div
      className="reveal group relative rounded-2xl overflow-hidden border border-white/8 bg-gradient-to-br from-[#0f0f2a] to-[#1a1a4a] shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-400"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-20 px-2 py-1 rounded-lg bg-amethyst-500/80 text-white text-xs font-bold backdrop-blur-sm">
          ⭐ Featured
        </div>
      )}

      {/* Image / Preview */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            {/* Code snippet decoration */}
            <div className="font-mono text-xs text-white/20 text-center leading-relaxed select-none">
              <div>&lt;System&gt;</div>
              <div className="text-amethyst-300/40 text-lg font-bold my-1">
                {project.category === "Mobile App"
                  ? "📱"
                  : project.category === "E-Commerce"
                    ? "🛒"
                    : project.category === "Website"
                      ? "🌐"
                      : "💻"}
              </div>
              <div className="text-white/30 text-base font-semibold px-4 text-center leading-tight">
                {project.title}
              </div>
              <div>&lt;/System&gt;</div>
            </div>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f2a] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-amethyst-500/0 group-hover:bg-amethyst-500/10 transition-all duration-300" />

        {/* Hover action buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#0f0f2a]/90 border border-amethyst-500/40 text-amethyst-400 hover:bg-amethyst-500/20 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#0f0f2a]/90 border border-klein_blue-500/40 text-klein_blue-300 hover:bg-klein_blue-500/20 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Card content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-2 py-0.5 rounded-md text-xs font-mono text-amethyst-400 bg-amethyst-500/10 border border-amethyst-500/20 mb-3">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amethyst-300 transition-colors duration-300 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className={`px-2 py-0.5 rounded-md text-xs font-medium border ${getTechColor(tag)}`}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-xs font-medium border border-white/10 text-gray-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-white bg-amethyst-500/15 border border-amethyst-500/25 hover:bg-amethyst-500/30 transition-all duration-200"
            >
              <Github size={15} />
              Code
            </a>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-klein_blue-300 bg-klein_blue-500/15 border border-klein_blue-500/25 hover:bg-klein_blue-500/30 transition-all duration-200"
            >
              <ExternalLink size={15} />
              Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-gray-500 bg-white/5 border border-white/8 cursor-not-allowed">
              Private
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amethyst-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-klein_blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="text-amethyst-400 font-mono text-sm tracking-widest uppercase mb-3 block">
            My work
          </span>
          <h2 className="section-title">
            Project{" "}
            <span className="bg-gradient-to-r from-amethyst-400 to-klein_blue-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="section-subtitle">
            A collection of systems and applications I&apos;ve built — from
            utility management to e-commerce platforms.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amethyst-500 to-klein_blue-500 rounded-full mx-auto" />
        </div>

        {/* Filter Tabs */}
        <div className="reveal flex flex-wrap gap-2 justify-center mb-10">
          <div className="flex items-center gap-1 text-gray-400 mr-2">
            <Filter size={14} />
            <span className="text-xs font-medium">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-amethyst-500 to-slate_blue-500 text-white shadow-glow-purple"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:bg-amethyst-500/15 hover:border-amethyst-500/30"
              }`}
            >
              {cat}
              <span className="ml-1.5 text-xs opacity-60">
                (
                {cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length}
                )
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* Show more / GitHub link */}
        <div className="reveal text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {filtered.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-amethyst-500 to-slate_blue-500 hover:from-amethyst-400 hover:to-slate_blue-400 shadow-glow-purple hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {showAll ? "Show Less" : `View All ${filtered.length} Projects`}
            </button>
          )}
          <a
            href="https://github.com/Glenn-IT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-gray-300 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-amethyst-500/30 hover:text-amethyst-400 transition-all duration-300 hover:-translate-y-1"
          >
            <Github size={18} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
