import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ darkMode, setDarkMode, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a1a]/95 backdrop-blur-md border-b border-amethyst-500/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amethyst-500 to-slate_blue-500 flex items-center justify-center font-bold text-white text-lg shadow-glow-purple group-hover:shadow-card-hover transition-all duration-300">
                G
              </div>
              <span className="font-bold text-lg text-white group-hover:text-amethyst-400 transition-colors">
                Glenn
                <span className="text-amethyst-400">.</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-sm font-medium transition-all duration-300 group
                      ${isActive ? "text-amethyst-400" : "text-gray-300 hover:text-amethyst-400"}`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amethyst-500 to-slate_blue-500 rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Dark mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-amethyst-500/20 hover:border-amethyst-500/30 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun size={18} className="text-amethyst-400" />
                ) : (
                  <Moon size={18} className="text-gray-300" />
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-amethyst-500/20 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X size={20} className="text-amethyst-400" />
                ) : (
                  <Menu size={20} className="text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-[#0f0f2a] border-l border-amethyst-500/20 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full p-6 pt-20">
            <div className="space-y-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-amethyst-500/20 text-amethyst-400 border border-amethyst-500/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-amethyst-400"
                    }`}
                  >
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-amethyst-500 animate-pulse" />
                    )}
                    <span className="font-medium">{link.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
              <p className="text-xs text-gray-500 text-center">
                © 2025 Glenard Pagurayan
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
