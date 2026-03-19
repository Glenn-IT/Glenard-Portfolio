import { useRef, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "glenard2308@gmail.com",
    href: "mailto:glenard2308@gmail.com",
    color: "from-red-500 to-orange-500",
    border: "border-red-500/20",
    hover: "hover:border-red-500/40 hover:bg-red-500/10",
    description: "Best for project inquiries",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Glenn-IT",
    href: "https://github.com/Glenn-IT",
    color: "from-gray-500 to-gray-700",
    border: "border-gray-500/20",
    hover: "hover:border-gray-400/40 hover:bg-gray-500/10",
    description: "View my repositories",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Glenard Pagurayan",
    href: "https://www.linkedin.com/in/pagurayan-glenard-0057a9331",
    color: "from-blue-500 to-blue-700",
    border: "border-blue-500/20",
    hover: "hover:border-blue-400/40 hover:bg-blue-500/10",
    description: "Professional profile",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "glenard.pagurayan",
    href: "https://www.facebook.com/glenard.pagurayan",
    color: "from-blue-600 to-indigo-600",
    border: "border-indigo-500/20",
    hover: "hover:border-indigo-400/40 hover:bg-indigo-500/10",
    description: "Connect on Facebook",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+65 8619 3011",
    href: "https://wa.me/+6586193011",
    color: "from-green-500 to-green-700",
    border: "border-green-500/20",
    hover: "hover:border-green-400/40 hover:bg-green-500/10",
    description: "Quick chat",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@glenn_3ttz",
    href: "https://t.me/glenn_3ttz",
    color: "from-sky-500 to-cyan-500",
    border: "border-sky-500/20",
    hover: "hover:border-sky-400/40 hover:bg-sky-500/10",
    description: "Message on Telegram",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@3ttzee_dumppp",
    href: "https://www.instagram.com/3ttzee_dumppp/",
    color: "from-pink-500 to-purple-500",
    border: "border-pink-500/20",
    hover: "hover:border-pink-400/40 hover:bg-pink-500/10",
    description: "Follow on Instagram",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@ThreeTeeTeeZee",
    href: "https://x.com/ThreeTeeTeeZee",
    color: "from-gray-700 to-gray-900",
    border: "border-gray-600/20",
    hover: "hover:border-gray-500/40 hover:bg-gray-700/20",
    description: "Follow on X",
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "@Ettz-23",
    href: "https://www.youtube.com/@Ettz-23",
    color: "from-red-600 to-red-800",
    border: "border-red-600/20",
    hover: "hover:border-red-500/40 hover:bg-red-600/10",
    description: "Watch my content",
  },
];

const infoItems = [
  {
    icon: MapPin,
    label: "Location",
    value: "Philippines · Open to Remote & Relocation",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Available immediately · Open to Work Pass Sponsorship",
  },
  {
    icon: Mail,
    label: "Response Time",
    value: "Usually within 24 hours",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
    <section id="contact" ref={sectionRef} className="section-padding relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-amethyst-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-klein_blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-amethyst-400 font-mono text-sm tracking-widest uppercase mb-3 block">
            Get in touch
          </span>
          <h2 className="section-title">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-amethyst-400 to-klein_blue-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="section-subtitle">
            Whether you have a project in mind, need IT support, or just want to
            say hi — I&apos;d love to hear from you!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amethyst-500 to-klein_blue-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Info Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* CTA Card */}
            <div className="reveal card p-6 bg-gradient-to-br from-amethyst-500/10 to-klein_blue-500/5 border border-amethyst-500/20">
              <h3 className="text-2xl font-bold text-white mb-3">
                Open to Opportunities
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I&apos;m actively looking for IT Support, Help Desk, and
                Developer roles. Available immediately and open to relocation or
                remote work.
              </p>

              <a
                href="mailto:glenard2308@gmail.com"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-amethyst-500 to-slate_blue-500 hover:from-amethyst-400 hover:to-slate_blue-400 shadow-glow-purple transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                Send an Email
              </a>
            </div>

            {/* Info items */}
            <div className="reveal space-y-3">
              {infoItems.map(({ icon: Icon, label, value }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/3 border border-white/8"
                >
                  <div className="w-10 h-10 rounded-xl bg-amethyst-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-amethyst-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-gray-200">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume link */}
            <div className="reveal">
              <a
                href="https://drive.google.com/file/d/1oTESN53KYenGwP9OU3i5vMLF69w1XC5T/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-medium text-gray-300 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-amethyst-500/30 hover:text-amethyst-400 transition-all duration-300"
              >
                <ExternalLink size={16} />
                View / Download Resume
              </a>
            </div>
          </div>

          {/* Right — Contact Links Grid */}
          <div className="lg:col-span-3">
            <div className="reveal grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#0f0f2a] border ${link.border} ${link.hover} transition-all duration-300 hover:-translate-y-2 hover:shadow-card`}
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg group-hover:shadow-card-hover transition-all duration-300 group-hover:scale-110`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>

                    {/* Label */}
                    <div className="text-center">
                      <p className="font-semibold text-white text-sm group-hover:text-amethyst-300 transition-colors">
                        {link.label}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {link.value}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {link.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
