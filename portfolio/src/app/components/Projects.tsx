const projects = [
  {
    title: "Green Plants",
    description:
      "A full-stack plant management application with plant CRUD operations, JWT authentication, care schedules, and ML-based watering predictions.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Python", "Scikit-learn"],
  },
  {
    title: "Personal Finance AI Coach",
    description:
      "A financial analysis application that processes bank statements, categorizes transactions, detects anomalies, and provides data-driven insights.",
    technologies: ["React", "FastAPI", "Python", "Pandas", "Scikit-learn"],
  },
  {
    title: "AI Vinyl CD Music Player",
    description:
      "A music player with a vinyl-inspired interface and an AI DJ that uses conversational input and music features to support personalized recommendations.",
    technologies: ["React", "FastAPI", "LangGraph", "LangChain", "OpenAI"],
  },
  {
    title: "Langfuse Agent",
    description:
      "An AI agent observability project that tracks traces, nested spans, latency, token usage, and errors for LLM-based workflows.",
    technologies: ["Python", "FastAPI", "Langfuse", "OpenAI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="section-container">
        <p className="section-label">PROJECTS</p>

        <h2>Things I've built.</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>

              <div className="tech-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="center-button">
          <a
            href="https://github.com/riyav-star"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            View More on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}