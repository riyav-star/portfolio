const skillGroups = [
  {
    title: "Languages",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.simpleicons.org/python",
      },
      {
        name: "Java",
        icon: "https://cdn.simpleicons.org/openjdk",
      },
      {
        name: "C++",
        icon: "https://cdn.simpleicons.org/cplusplus",
      },
      {
        name: "C",
        icon: "https://cdn.simpleicons.org/c",
      },
      {
        name: "SQL",
        icon: "https://cdn.simpleicons.org/mysql",
      },
      {
        name: "R",
        icon: "https://cdn.simpleicons.org/r",
      },
    ],
  },
  {
    title: "Frontend & Backend",
    skills: [
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react",
      },
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.simpleicons.org/fastapi",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql",
      },
      {
        name: "HTML",
        icon: "https://cdn.simpleicons.org/html5",
      },
      {
        name: "CSS",
        icon: "https://cdn.simpleicons.org/css",
      },
    ],
  },
  {
    title: "AI & Data",
    skills: [
      {
        name: "Scikit-learn",
        icon: "https://cdn.simpleicons.org/scikitlearn",
      },
      {
        name: "Pandas",
        icon: "https://cdn.simpleicons.org/pandas",
      },
      {
        name: "OpenAI",
        icon: "https://cdn.simpleicons.org/openai",
      },
      {
        name: "LangChain",
        icon: "https://cdn.simpleicons.org/langchain",
      },
      {
        name: "LangGraph",
        icon: "https://cdn.simpleicons.org/langgraph",
      },
      {
        name: "Git",
        icon: "https://cdn.simpleicons.org/git",
      },
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
                  <div className="skill-item" key={skill.name}>
                    <img
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      className="skill-icon"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
