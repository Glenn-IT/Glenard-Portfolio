import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";

const roles = [
  "Software Developer",
  "IT Specialist",
  "Technical Support",
  "Web Developer",
  "IT Technician",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amethyst-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-klein_blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate_blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amethyst-500/10 border border-amethyst-500/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-gray-300 font-medium">
                Available for opportunities
              </span>
            </div>

            {/* Greeting */}
            <p className="text-amethyst-400 font-mono text-lg mb-3 font-medium">
              Hello, I&apos;m
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-white">Glenard</span>
              <br />
              <span className="bg-gradient-to-r from-amethyst-400 via-slate_blue-400 to-klein_blue-400 bg-clip-text text-transparent">
                Pagurayan
              </span>
            </h1>

            {/* Typing Role */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 h-10">
              <span className="text-xl sm:text-2xl text-gray-200 font-medium">
                {displayed}
              </span>
              <span className="text-amethyst-400 text-2xl font-light animate-pulse">
                |
              </span>
            </div>

            {/* Value Statement */}
            <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              IT Support Specialist &amp; Freelance Developer from the
              Philippines. I build custom web and desktop solutions that solve
              real-world tech challenges for businesses and individuals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => handleScroll("projects")}
                className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden
                           bg-gradient-to-r from-amethyst-500 to-slate_blue-500
                           hover:from-amethyst-400 hover:to-slate_blue-400
                           shadow-glow-purple hover:shadow-card-hover
                           transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ChevronDown
                    size={18}
                    className="group-hover:translate-y-0.5 transition-transform"
                  />
                </span>
              </button>

              <button
                onClick={() => handleScroll("contact")}
                className="px-8 py-4 rounded-xl font-semibold text-white
                           border border-amethyst-500/40 bg-amethyst-500/10
                           hover:bg-amethyst-500/20 hover:border-amethyst-400
                           transition-all duration-300 hover:-translate-y-1"
              >
                Contact Me
              </button>

              <a
                href="https://drive.google.com/file/d/1oTESN53KYenGwP9OU3i5vMLF69w1XC5T/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold
                           border border-klein_blue-500/40 text-klein_blue-300 bg-klein_blue-500/10
                           hover:bg-klein_blue-500/20 hover:border-klein_blue-400
                           transition-all duration-300 hover:-translate-y-1"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 justify-center lg:justify-start">
              <a
                href="https://github.com/Glenn-IT"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-amethyst-500/20 hover:border-amethyst-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Github
                  size={20}
                  className="text-gray-400 group-hover:text-amethyst-400 transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/pagurayan-glenard-0057a9331"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-amethyst-500/20 hover:border-amethyst-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Linkedin
                  size={20}
                  className="text-gray-400 group-hover:text-amethyst-400 transition-colors"
                />
              </a>
              <a
                href="mailto:glenard2308@gmail.com"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-amethyst-500/20 hover:border-amethyst-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Mail
                  size={20}
                  className="text-gray-400 group-hover:text-amethyst-400 transition-colors"
                />
              </a>
              <div className="h-8 w-px bg-white/10" />
              <span className="text-sm text-gray-500">PH | Open to Remote</span>
            </div>
          </div>

          {/* Avatar / Visual */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amethyst-500/30 to-klein_blue-500/20 blur-2xl scale-110 animate-pulse-slow" />

              {/* Ring decorations */}
              <div className="absolute inset-[-16px] rounded-full border border-amethyst-500/20 animate-spin-slow" />
              <div className="absolute inset-[-32px] rounded-full border border-slate_blue-500/10 animate-[spin_15s_linear_reverse_infinite]" />

              {/* Floating dots */}
              {[
                {
                  top: "10%",
                  right: "-10%",
                  size: "w-3 h-3",
                  color: "bg-amethyst-500",
                },
                {
                  bottom: "15%",
                  left: "-8%",
                  size: "w-4 h-4",
                  color: "bg-klein_blue-500",
                },
                {
                  top: "50%",
                  right: "-15%",
                  size: "w-2 h-2",
                  color: "bg-slate_blue-500",
                },
              ].map((dot, i) => (
                <div
                  key={i}
                  className={`absolute ${dot.size} ${dot.color} rounded-full animate-float shadow-glow-purple`}
                  style={{
                    top: dot.top,
                    right: dot.right,
                    bottom: dot.bottom,
                    left: dot.left,
                    animationDelay: `${i * 2}s`,
                  }}
                />
              ))}

              {/* Avatar container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-amethyst-500/30 shadow-glow-purple animate-float">
                <img
                  src="/P1-removebg.png"
                  alt="Glenard Pagurayan"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-amethyst-500/30 to-klein_blue-500/20 flex items-center justify-center">
                        <span class="text-8xl font-bold text-white/30">G</span>
                      </div>
                    `;
                  }}
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/40 to-transparent" />
              </div>

              {/* Floating skill badges */}
              <div
                className="absolute -bottom-6 -left-8 bg-[#0f0f2a] border border-amethyst-500/30 rounded-xl px-4 py-2 text-xs font-semibold text-amethyst-400 shadow-glow-purple animate-float"
                style={{ animationDelay: "1s" }}
              >
                💻 Full Stack Dev
              </div>
              <div
                className="absolute -top-4 -right-4 bg-[#0f0f2a] border border-klein_blue-500/30 rounded-xl px-4 py-2 text-xs font-semibold text-klein_blue-300 shadow-glow-blue animate-float"
                style={{ animationDelay: "3s" }}
              >
                🔧 IT Specialist
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-xs text-gray-500 tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown size={20} className="text-amethyst-400" />
        </div>
      </div>
    </section>
  );
}
