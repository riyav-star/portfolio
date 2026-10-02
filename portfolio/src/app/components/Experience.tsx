const experiences = [
  {
    company: "Ephanti",
    role: "Software Engineering Intern",
    date: "2026",
    description:
      "Built AI customer engagement and automation software using Python and LLM-based APIs. Developed an AI support agent and implemented Langfuse observability to track traces, latency, token usage, and errors.",
  },
  {
    company: "Blueprint",
    role: "UI/UX Design Fellow",
    date: "2025",
    description:
      "Worked on a Rutgers micromobility redesign focused on improving parking discovery and visibility of no-ride zones. Created wireframes and prototypes in Figma and conducted usability testing.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-container">
        <p className="section-label">EXPERIENCE</p>

        <h2>Where I've worked.</h2>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-item" key={experience.company}>
              <div className="experience-header">
                <div>
                  <h3>{experience.role}</h3>
                  <p className="company">{experience.company}</p>
                </div>

                <span className="date">{experience.date}</span>
              </div>

              <p>{experience.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}