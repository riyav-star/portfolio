export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-container">
        <p className="section-label">EDUCATION</p>
        <h2>My education.</h2>

        <div className="education-list">

          {/* Rutgers University */}
          <div className="education-item">
            <div className="education-header">
              <div>
                <h3>Rutgers University – New Brunswick</h3>
                <p className="education-degree">
                  B.S. in Computer Science | Minor in Data Science
                </p>
              </div>

              <p className="education-date">
                Sep 2023 – May 2027
              </p>
            </div>

            <p className="education-coursework">
              <strong>Relevant Coursework:</strong>{" "}
              Data Structures, Intro to Artificial Intelligence,
              Computer Architecture, Numerical Analysis, Data 101,
              Data Management for Data Science, Statistical Inference
              for Data Science, Linear Algebra, Calculus I & II
            </p>
          </div>

          {/* Monroe Township High School */}
          <div className="education-item">
            <div className="education-header">
              <div>
                <h3>Monroe Township High School</h3>
                <p className="education-degree">
                  High School Diploma
                </p>
              </div>

              <p className="education-date">
                Sep 2019 – Jun 2023
              </p>
            </div>

            <p className="education-coursework">
              <strong>Activities and Societies:</strong>{" "}
              Mu Alpha Theta Honors Society, National Honors Society,
              Spanish Honors Society, Red Cross, FBLA, HOSA
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
