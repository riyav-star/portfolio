const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "C", "SQL", "R"],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Linux",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Scikit-learn",
      "LangChain",
      "LangGraph",
      "LLM APIs",
      "RAG",
      "AI Agents",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-container">
        <p className="section-label">SKILLS</p>

        <h2>Technologies I work with.</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}