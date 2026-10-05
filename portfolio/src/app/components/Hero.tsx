import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <Image
          src="/riya.jpg"
          alt="Riya Venkat"
          width={160}
          height={160}
          className="profile-photo"
          priority
        />

        <p className="eyebrow">COMPUTER SCIENCE • AI/ML • SOFTWARE ENGINEERING</p>

        <h1>
          Hi, I'm <span>Riya Venkat</span>
        </h1>

        <p className="hero-description">
          I build AI-powered applications, full-stack systems, and
          data-driven tools with a focus on practical software engineering.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary">
            View My Projects
          </a>
          <a
            href="https://github.com/riyav-star"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
