import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Welcome to my portfolio</h2>
            <h1>Hi, I am Anshuman Joshi</h1>
          </div>
          <div className="landing-info">
            <h2 className="landing-info-h2">Fullstack Developer</h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
