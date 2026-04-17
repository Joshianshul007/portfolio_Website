import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container reveal-on-scroll">
      <div className="career-animated-border">
        <div className="career-container">
          <h2>
            My career <span>&</span>
            <br /> experience
          </h2>
          <div className="career-info career-compact-table">
            <div className="career-timeline">
              <div className="career-dot"></div>
            </div>
            <div className="career-info-box">
              <div className="career-date">
                <h3>2025 &mdash; NOW</h3>
              </div>
              <div className="career-role">
                <h4>Fullstack Developer Intern</h4>
                <h5>Glimsia Global</h5>
              </div>
              <div className="career-desc">
                <p>
                  Hands-on experience with modern web technologies, building and maintaining robust applications.
                </p>
              </div>
            </div>

            <div className="career-divider"></div>

            <div className="career-info-box">
              <div className="career-date">
                <h3>2025 &mdash; 2027</h3>
              </div>
              <div className="career-role">
                <h4>MCA</h4>
                <h5>Manipal University, Jaipur</h5>
              </div>
              <div className="career-desc">
                <p>
                  Pursuing Master of Computer Applications to deepen knowledge in software engineering, and advanced web technologies.
                </p>
              </div>
            </div>

            <div className="career-divider"></div>

            <div className="career-info-box">
              <div className="career-date">
                <h3>2022 &mdash; 2025</h3>
              </div>
              <div className="career-role">
                <h4>BCA</h4>
                <h5>Graphic Era Hill University</h5>
              </div>
              <div className="career-desc">
                <p>
                  Bachelor of Computer Applications. Strong foundation in programming, database management, and development fundamentals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
