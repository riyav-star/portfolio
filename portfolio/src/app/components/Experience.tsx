const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Ephanti",
    date: "Jun 2026 – Sep 2026",
    description: [
      "Built and improved AI agent workflows using Python, LlamaIndex, and LLM APIs.",
      "Built a Python/FastAPI AI support agent and integrated Langfuse to monitor LLM workflows, including traces, nested spans, latency, token usage, and errors.",
      "Developed automated tests and experiments to validate AI telemetry and evaluate LLM performance and failure behavior.",
    ],
    skills: [
      "Python",
      "FastAPI",
      "LlamaIndex",
      "LLM APIs",
      "LangChain",
      "Langfuse",
      "AI Agents",
      "Automated Testing",
      "API Development",
    ],
  },
  {
    title: "UI/UX Design Fellow",
    company: "Blueprint",
    date: "Oct 2025 – Dec 2025",
    description: [
      "Redesigned the Veo Rutgers micromobility experience by researching student pain points around parking discovery and no-ride zones.",
      "Created wireframes and interactive prototypes in Figma and conducted three rounds of usability testing.",
      "Iterated on designs based on user feedback and contributed to improvements including a Nearest Parking shortcut and clearer no-ride-zone visibility.",
    ],
    skills: [
      "Figma",
      "UI/UX Design",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
  },
  {
    title: "Teacher Assistant",
    company: "JEI Learning Center",
    date: "2021 – 2023",
    description: [
      "Provided individualized and small-group instruction to students in mathematics and academic subjects.",
      "Graded assignments, tracked student progress, and communicated updates with parents.",
      "Adapted explanations and teaching approaches to support different student learning needs.",
    ],
    skills: [
      "Communication",
      "Teaching",
      "Problem Solving",
      "Student Support",
      "Leadership",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="section-container">
        <p className="section-label">EXPERIENCE</p>

        <h2>Where I've worked.</h2>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-item"
              key={`${experience.company}-${experience.title}`}
            >
              <div className="experience-header">
                <div>
                  <h3>{experience.title}</h3>
                  <p className="company">{experience.company}</p>
                </div>

                <p className="date">{experience.date}</p>
              </div>

              <ul className="experience-description">
                {experience.description.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="experience-skills">
                {experience.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
