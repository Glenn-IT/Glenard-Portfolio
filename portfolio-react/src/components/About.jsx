import { useEffect, useRef } from "react";
import {
  Code2,
  Shield,
  Wrench,
  Globe,
  Star,
  Users,
  Trophy,
  GraduationCap,
} from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Built", value: "20+" },
  { icon: Shield, label: "Certifications", value: "8+" },
  { icon: Wrench, label: "IT Experience", value: "2+ yrs" },
  { icon: Users, label: "Employees Supported", value: "200+" },
];

const highlights = [
  { icon: Globe, text: "Philippines · Open to Remote & Relocation" },
  { icon: Star, text: "Google IT Support Professional Certified" },
  { icon: Code2, text: "Full-stack & Desktop App Developer" },
  { icon: Wrench, text: "IT Support @ COMELEC — 200+ employees" },
  { icon: Trophy, text: "Programmer of the Year — CSU Class of 2023" },
  {
    icon: GraduationCap,
    text: "BS Information Technology — Dean's Lister (All 4 yrs)",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amethyst-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-amethyst-400 font-mono text-sm tracking-widest uppercase mb-3 block">
            Get to know me
          </span>
          <h2 className="section-title">
            About{" "}
            <span className="bg-gradient-to-r from-amethyst-400 to-slate_blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amethyst-500 to-slate_blue-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image with decorations */}
          <div className="reveal relative flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amethyst-500/20 to-klein_blue-500/10 rounded-3xl blur-2xl" />

              {/* Image */}
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden border border-amethyst-500/20 shadow-card">
                <img
                  src="/P2-removebg.png"
                  alt="Glenard Pagurayan"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add(
                      "bg-gradient-to-br",
                      "from-amethyst-500/20",
                      "to-klein_blue-500/10",
                      "flex",
                      "items-center",
                      "justify-center",
                    );
                    const span = document.createElement("span");
                    span.className = "text-9xl font-bold text-white/10";
                    span.textContent = "G";
                    e.target.parentElement.appendChild(span);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/60 to-transparent" />
              </div>

              {/* Floating cert badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#0f0f2a] border border-amethyst-500/30 rounded-2xl p-4 shadow-glow-purple">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amethyst-500 to-slate_blue-500 flex items-center justify-center">
                    <Shield size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Certified</p>
                    <p className="text-sm font-semibold text-white">
                      Google IT Support
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-5 -left-5 bg-[#0f0f2a] border border-klein_blue-500/30 rounded-2xl p-4 shadow-glow-blue">
                <div className="text-center">
                  <p className="text-2xl font-bold text-klein_blue-300">2+</p>
                  <p className="text-xs text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="space-y-6">
            <div className="reveal">
              <h3 className="text-2xl font-bold text-white mb-4">
                IT Specialist &amp; Freelance Developer
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I&apos;m{" "}
                  <span className="text-amethyst-400 font-semibold">
                    Glenard Pagurayan
                  </span>
                  , an IT Support Specialist with{" "}
                  <span className="text-white font-medium">
                    1 year and 11 months
                  </span>{" "}
                  of hands-on experience at{" "}
                  <span className="text-white font-medium">
                    COMELEC Region 2
                  </span>
                  , providing technical support to 200+ government employees. I
                  specialize in troubleshooting, system maintenance, and user
                  support in high-stakes environments.
                </p>
                <p>
                  On the development side, I build full-stack web and desktop
                  applications using{" "}
                  <span className="text-white font-medium">
                    PHP, C#, MySQL, JavaScript,
                  </span>{" "}
                  and <span className="text-white font-medium">Kotlin</span> —
                  delivering real-world solutions like billing systems,
                  e-commerce platforms, and Android booking apps.
                </p>
                <p>
                  A{" "}
                  <span className="text-amethyst-400 font-semibold">
                    Consistent Dean's Lister
                  </span>{" "}
                  and{" "}
                  <span className="text-amethyst-400 font-semibold">
                    Programmer of the Year
                  </span>{" "}
                  at Cagayan State University. Currently seeking opportunities
                  in <span className="text-amethyst-400">IT Support</span>,{" "}
                  <span className="text-amethyst-400">Help Desk</span>, or{" "}
                  <span className="text-amethyst-400">Junior Developer</span>{" "}
                  roles — available immediately and open to Work Pass
                  Sponsorship.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/3 border border-white/8 hover:border-amethyst-500/30 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-amethyst-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-amethyst-400" />
                  </div>
                  <span className="text-sm text-gray-300">{text}</span>
                </div>
              ))}
            </div>

            {/* Status */}
            <div className="reveal flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <p className="text-green-300 text-sm font-medium">
                Available immediately · Open to Work Pass Sponsorship
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map(({ icon: Icon, label, value }, i) => (
            <div
              key={i}
              className="reveal card p-6 text-center group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amethyst-500/20 to-slate_blue-500/10 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-purple transition-all duration-300">
                <Icon size={26} className="text-amethyst-400" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{value}</p>
              <p className="text-sm text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
