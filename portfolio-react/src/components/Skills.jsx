import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-amethyst-500 to-slate_blue-500",
    icon: "🎨",
    skills: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        level: 90,
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        level: 85,
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        level: 80,
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        level: 85,
      },
      {
        name: "jQuery",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
        level: 75,
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        level: 65,
      },
    ],
  },
  {
    title: "Backend",
    color: "from-slate_blue-500 to-klein_blue-500",
    icon: "⚙️",
    skills: [
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        level: 85,
      },
      {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        level: 75,
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        level: 80,
      },
      {
        name: "SQL Server",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        level: 75,
      },
      {
        name: "Kotlin",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        level: 55,
      },
      {
        name: "XAMPP",
        icon: "https://www.svgrepo.com/show/354575/xampp.svg",
        level: 85,
      },
    ],
  },
  {
    title: "Dev Tools",
    color: "from-klein_blue-500 to-federal_blue-500",
    icon: "🛠️",
    skills: [
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        level: 95,
      },
      {
        name: "Visual Studio",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
        level: 80,
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        level: 75,
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        level: 80,
      },
      {
        name: "Photoshop",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        level: 70,
      },
      {
        name: "Canva",
        icon: "https://www.svgrepo.com/show/353428/canva.svg",
        level: 85,
      },
    ],
  },
  {
    title: "IT Support",
    color: "from-amethyst-500 to-federal_blue-500",
    icon: "🔧",
    skills: [
      { name: "Hardware Repair", icon: "🖥️", level: 90, emoji: true },
      { name: "Network Setup", icon: "🌐", level: 85, emoji: true },
      { name: "Windows Server", icon: "🪟", level: 80, emoji: true },
      {
        name: "TeamViewer",
        icon: "https://img.icons8.com/fluency/48/teamviewer.png",
        level: 85,
      },
      {
        name: "AnyDesk",
        icon: "https://img.icons8.com/color/48/anydesk.png",
        level: 85,
      },
      { name: "Active Directory", icon: "📋", level: 75, emoji: true },
    ],
  },
];

function SkillBar({ level, color }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${level}%`;
              }
            }, 200);
          }
        });
      },
      { threshold: 0.5 },
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="mt-1.5 h-1 bg-white/10 rounded-full overflow-hidden">
      <div
        ref={barRef}
        className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
        style={{ width: "0%" }}
      />
    </div>
  );
}

export default function Skills() {
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
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate_blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-amethyst-400 font-mono text-sm tracking-widest uppercase mb-3 block">
            What I work with
          </span>
          <h2 className="section-title">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-amethyst-400 to-slate_blue-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amethyst-500 to-slate_blue-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="reveal card p-6 group"
              style={{ transitionDelay: `${catIdx * 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-lg`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group/skill">
                    <div className="flex items-center gap-3 mb-1">
                      {/* Icon */}
                      <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                        {skill.emoji ? (
                          <span className="text-xl">{skill.icon}</span>
                        ) : (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 h-6 object-contain tech-badge"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-300 flex-1">
                        {skill.name}
                      </span>
                      <span className="text-xs text-amethyst-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <SkillBar level={skill.level} color={category.color} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certifications Banner */}
        <div className="reveal mt-12 p-6 rounded-2xl bg-gradient-to-r from-amethyst-500/10 via-slate_blue-500/10 to-klein_blue-500/10 border border-amethyst-500/20">
          <h3 className="text-lg font-bold text-white mb-4 text-center">
            🏆 Certifications
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Google IT Support Professional",
              "Google AI Essentials",
              "Technical Support Fundamentals",
              "IT Security: Defense against Digital Dark Arts",
              "System Administration & IT Infrastructure",
              "Computer Networking Fundamentals",
              ".NET Full Stack Foundation",
              "Cybersecurity for Everyone",
              "CSS NC II – TESDA",
            ].map((cert, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amethyst-500/15 border border-amethyst-500/25 text-amethyst-300 hover:bg-amethyst-500/25 transition-colors duration-200"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
