import { useEffect, useRef } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  Trophy,
  Star,
} from "lucide-react";

const experiences = [
  {
    type: "work",
    icon: Briefcase,
    role: "IT Support Specialist",
    company: "Commission on Elections (COMELEC) Region 2",
    location: "Sto. Niño, Cagayan, Philippines",
    period: "July 2023 – May 2025",
    color: "amethyst",
    achievements: [
      "Provided technical support for 200+ employees, resolving hardware, software, and network issues",
      "Installed, configured, and maintained desktops, laptops, printers, and peripherals for government offices",
      "Assisted in setup and troubleshooting of election-related IT systems (Voting Counting Machines, servers)",
      "Managed user accounts, passwords, and access controls in compliance with government IT policies",
      "Documented IT issues and resolutions in a ticketing system, improving response time by 30%",
      "Conducted IT orientation sessions for staff on cybersecurity best practices",
      "Supported national/local election IT operations, ensuring minimal downtime for critical systems",
      "Assisted in configuration and testing of election hardware/software before deployment",
    ],
  },
  {
    type: "work",
    icon: Briefcase,
    role: "IT Support Intern",
    company: "Environmental Management Bureau – DENR Region II",
    location: "Tuguegarao City, Cagayan, Philippines",
    period: "2023",
    color: "slate_blue",
    achievements: [
      "Provided first-level support for staff experiencing hardware and software issues",
      "Troubleshot network and printer connectivity problems",
      "Configured and maintained desktops, laptops, and peripheral devices",
      "Assisted users with email configuration, login support, and password resets",
      "Performed scheduled software updates and antivirus monitoring",
      "Tracked IT equipment inventory and supported procurement processes",
      "Helped document IT procedures and assisted in report preparation",
    ],
  },
  {
    type: "freelance",
    icon: GraduationCap,
    role: "Freelance Software Developer",
    company: "Self-Employed",
    location: "Remote / Philippines",
    period: "2023 – Present",
    color: "klein_blue",
    achievements: [
      "Developed 15+ web-based management systems for clients across various industries",
      "Built full-stack solutions using PHP, MySQL, JavaScript, and Bootstrap",
      "Delivered e-commerce platform for JB Printing Services (forked by external developer)",
      "Created mobile Android application for PTODA booking using Kotlin",
      "Implemented QR code attendance tracking for government youth systems",
      "Provided technical consultation and ongoing maintenance support",
    ],
  },
];

const training = {
  title: "CSS NC II – TESDA",
  subtitle: "Computer System Servicing National Certificate II",
  modules: [
    {
      code: "COC 1",
      title: "Installing & Configuring Computer Systems",
      items: [
        "Assemble and disassemble PCs",
        "Install OS (Windows/Linux)",
        "Configure BIOS, drivers, and software",
      ],
    },
    {
      code: "COC 2",
      title: "Setting Up Computer Networks",
      items: [
        "Create UTP cables using crimping tools",
        "Configure LAN with routers/switches",
        "Assign static/DHCP IPs",
      ],
    },
    {
      code: "COC 3",
      title: "Setting Up Computer Servers",
      items: [
        "Install Windows/Linux Server",
        "Create user accounts and permissions",
        "Manage DHCP/DNS configuration",
      ],
    },
    {
      code: "COC 4",
      title: "Maintaining & Repairing Systems",
      items: [
        "Perform diagnostics and preventive maintenance",
        "Replace defective components",
        "Virus removal and data backup",
      ],
    },
  ],
};

const colorMap = {
  amethyst: {
    dot: "bg-amethyst-500",
    border: "border-amethyst-500/30",
    bg: "bg-amethyst-500/10",
    text: "text-amethyst-400",
    badge: "bg-amethyst-500/15 text-amethyst-300 border-amethyst-500/20",
    icon: "from-amethyst-500 to-amethyst-600",
  },
  slate_blue: {
    dot: "bg-slate_blue-500",
    border: "border-slate_blue-500/30",
    bg: "bg-slate_blue-500/10",
    text: "text-slate_blue-400",
    badge: "bg-slate_blue-500/15 text-slate_blue-300 border-slate_blue-500/20",
    icon: "from-slate_blue-500 to-slate_blue-600",
  },
  klein_blue: {
    dot: "bg-klein_blue-400",
    border: "border-klein_blue-500/30",
    bg: "bg-klein_blue-500/10",
    text: "text-klein_blue-300",
    badge: "bg-klein_blue-500/15 text-klein_blue-200 border-klein_blue-500/20",
    icon: "from-klein_blue-400 to-klein_blue-600",
  },
};

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
      id="experience"
      ref={sectionRef}
      className="section-padding relative"
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-amethyst-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-amethyst-400 font-mono text-sm tracking-widest uppercase mb-3 block">
            My journey
          </span>
          <h2 className="section-title">
            Experience &amp;{" "}
            <span className="bg-gradient-to-r from-amethyst-400 to-slate_blue-400 bg-clip-text text-transparent">
              Training
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amethyst-500 to-slate_blue-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amethyst-500/60 via-slate_blue-500/40 to-klein_blue-500/20 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const color = colorMap[exp.color];
              const Icon = exp.icon;
              return (
                <div key={i} className="reveal relative md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${color.icon} flex items-center justify-center shadow-lg z-10`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <div
                      className={`absolute w-16 h-16 rounded-full ${color.dot}/20 blur-md`}
                    />
                  </div>

                  {/* Card */}
                  <div className={`card p-6 border ${color.border}`}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className={`text-xl font-bold text-white mb-1`}>
                          {exp.role}
                        </h3>
                        <p className={`font-semibold ${color.text} mb-2`}>
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className={color.text} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <span
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium border ${color.badge}`}
                        >
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-lg text-xs font-medium ${color.bg} ${color.text} border ${color.border}`}
                        >
                          {exp.type === "work"
                            ? "💼 Work"
                            : exp.type === "freelance"
                              ? "💻 Freelance"
                              : "🎓 Education"}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full ${color.dot} flex-shrink-0`}
                          />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Training / CSS NC II */}
        <div className="reveal mt-16">
          <div className="flex items-center gap-3 mb-8">
            <Award size={24} className="text-amethyst-400" />
            <h3 className="text-2xl font-bold text-white">
              Technical Training
            </h3>
          </div>

          <div className="card p-6 border border-amethyst-500/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amethyst-500 to-slate_blue-500 flex items-center justify-center flex-shrink-0">
                <Award size={22} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">
                  {training.title}
                </h4>
                <p className="text-amethyst-400 text-sm mt-1">
                  {training.subtitle}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {training.modules.map((mod, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/3 border border-white/8 hover:border-amethyst-500/25 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-lg bg-amethyst-500/20 text-amethyst-400 text-xs font-bold font-mono">
                      {mod.code}
                    </span>
                    <h5 className="text-sm font-semibold text-white">
                      {mod.title}
                    </h5>
                  </div>
                  <ul className="space-y-1.5">
                    {mod.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs text-gray-400"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-amethyst-500/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Awards */}
        <div className="reveal mt-16 grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="card p-6 border border-slate_blue-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate_blue-500 to-klein_blue-500 flex items-center justify-center">
                <GraduationCap size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <div className="p-4 rounded-xl bg-white/3 border border-white/8">
              <p className="font-semibold text-white mb-1">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-amethyst-400 text-sm font-medium mb-2">
                Cagayan State University
              </p>
              <p className="text-gray-500 text-xs mb-3 flex items-center gap-1.5">
                <Calendar size={11} /> 2019 – 2023
              </p>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-amethyst-500/10 border border-amethyst-500/15">
                <Star size={13} className="text-amethyst-400 flex-shrink-0" />
                <span className="text-xs text-amethyst-300 font-medium">
                  Consistent Dean's Lister — All 4 Years
                </span>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="card p-6 border border-amethyst-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amethyst-500 to-slate_blue-500 flex items-center justify-center">
                <Trophy size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Awards & Recognition
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                {
                  icon: "🏆",
                  text: "Academic Distinction Award — Cagayan State University",
                },
                {
                  icon: "💻",
                  text: "Best Capstone Project (Online Category) — Online Appointment System",
                },
                {
                  icon: "⭐",
                  text: "Programmer of the Year — Class of 2023, Cagayan State University",
                },
                {
                  icon: "👑",
                  text: "Leadership Award — IT Department Student Council",
                },
              ].map((award, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/8 hover:border-amethyst-500/20 transition-all duration-200"
                >
                  <span className="text-lg flex-shrink-0">{award.icon}</span>
                  <span className="text-sm text-gray-300">{award.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
