import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGreensock,
} from "react-icons/si";

import "./styles/TechStack.css";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", Icon: FaReact, color: "#61DAFB", width: "120px" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff", width: "80px" },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933", width: "100px" },
  { name: "Express", Icon: SiExpress, color: "#ffffff", width: "140px" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248", width: "90px" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1", width: "150px" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", width: "110px" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", width: "130px" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", width: "70px" },
  { name: "GSAP", Icon: SiGreensock, color: "#88CE02", width: "100px" },
  { name: "Firebase", image: "/images/firebase.png", width: "115px" },
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ScrollTrigger Animation for the branches fading in and floating up
    const elements = containerRef.current?.querySelectorAll('.skill-branch');
    
    if (elements && elements.length > 0) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            // Play entering, fade out when leaving up or down
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className="skills-section" id="work">
      <h2>My Skills</h2>
      <div className="skills-tree-container" ref={containerRef}>
        <div className="skills-trunk"></div>
        
        {skills.map((skill, index) => {
          const isLeft = index % 2 === 0;
          // Stagger slightly down the tree trunk vertically
          const topPosition = (index / skills.length) * 85 + 5; 
          
          // Generate pseudo-random math parameters to ensure natural biological-feeling variations
          const swayDuration = Math.random() * 4 + 4;
          const swayDelay = Math.random() * -5;
          const floatDuration = Math.random() * 3 + 3;
          const floatDelay = Math.random() * -4;

          return (
            <div 
              key={index} 
              className={`skill-branch ${isLeft ? 'left sway-left' : 'right sway-right'}`}
              style={{ 
                top: `${topPosition}%`,
                "--sway-duration": `${swayDuration}s`, 
                "--sway-delay": `${swayDelay}s` 
              } as React.CSSProperties}
            >
              <div 
                className="skill-stick" 
                style={{ width: skill.width }}
              ></div>
              <div 
                className="skill-badge-container float-badge"
                style={{ 
                  "--float-duration": `${floatDuration}s`, 
                  "--float-delay": `${floatDelay}s` 
                } as React.CSSProperties}
              >
                <div className="skill-badge">
                  {skill.Icon ? (
                    <skill.Icon size={22} color={skill.color} />
                  ) : (
                    <img src={skill.image} alt={skill.name} style={{ height: "22px", objectFit: "contain" }} />
                  )}
                  {skill.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
