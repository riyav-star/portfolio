const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Python",
      "Java",
      "C++",
      "C",
      "SQL",
      "R",
    ],
  },
  {
    title: "Frontend & Backend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "AI & Data",
    skills: [
      "Scikit-learn",
      "Pandas",
      "OpenAI",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "Langfuse",
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Linux",
      "Vercel",
      "LaTeX",
      "MATLAB",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-container">
        <p className="section-label">SKILLS</p>

        <h2>Technologies I work with.</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-item" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
