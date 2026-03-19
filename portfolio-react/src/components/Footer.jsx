import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";

const footerLinks = {
  Navigate: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "GitHub", href: "https://github.com/Glenn-IT", external: true },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pagurayan-glenard-0057a9331",
      external: true,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/glenard.pagurayan",
      external: true,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/3ttzee_dumppp/",
      external: true,
    },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/Glenn-IT", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pagurayan-glenard-0057a9331",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:glenard2308@gmail.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/8 bg-[#070715]">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-amethyst-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amethyst-500 to-slate_blue-500 flex items-center justify-center font-bold text-white text-xl shadow-glow-purple">
                G
              </div>
              <span className="text-xl font-bold text-white">
                Glenard<span className="text-amethyst-400">.</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-xs">
              Software Developer · IT Specialist · Technical Support
              <br />
              Building solutions and solving tech challenges from the
              Philippines.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-amethyst-500/20 hover:border-amethyst-500/30 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <Icon
                    size={18}
                    className="text-gray-400 group-hover:text-amethyst-400 transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center gap-1.5 text-gray-400 hover:text-amethyst-400 transition-colors duration-200 text-sm group"
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink
                          size={11}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            © {currentYear} Glenard Pagurayan. Made with
            <Heart size={14} className="text-amethyst-500 fill-amethyst-500" />
            using React + Tailwind CSS.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a
              href="https://github.com/Glenn-IT/Glenard-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-amethyst-400 transition-colors"
            >
              <Github size={13} />
              Source Code
            </a>
            <span>·</span>
            <span>Philippines 🇵🇭</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
