import { useState, useCallback, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "SyncSpace Scheduling Platform",
    category: "Fullstack Application",
    description: "Sync Space is a smart scheduling platform designed to simplify meeting coordination and time management. Easily create, share, and manage availability, automate bookings, and eliminate back-and-forth communication. Whether for teams or individuals, Sync Space keeps your schedule organized, efficient, and perfectly in sync.",
    tools: "Next.js, Tailwind CSS, Prisma, PostgreSQL, Zod, Nodemailer, Google Calendar",
    image: "/images/scheduling_platform.png",
    link: "https://github.com/Joshianshul007/scheduling_platform",
  },
  {
    title: "Photography Service App",
    category: "Web Application",
    description: "Book professional photographers in minutes with our easy-to-use app. Explore portfolios, compare prices, and schedule shoots seamlessly. From personal moments to big events, capture memories with trusted photographers—all in one place.",
    tools: "React, Firebase, Razorpay",
    image: "/images/photography_service.png",
    link: "https://photography-service-app.web.app/",
  },
  {
    title: "Workplace Chat",
    category: "Real-time Communication Platform",
    description: "A smart workplace chat app that combines real-time messaging with powerful task management. Collaborate with your team, assign tasks, track progress, and stay organized—all in one place, just like Jira but simpler and faster.",
    tools: "React.js, Firebase Realtime Database, Cloud Functions, Razorpay, BunnyCDN, YouTube API",
    image: "/images/workplace_chat.png",
    link: "https://www.meetingside.com/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 2000);

    // Clean up interval on unmount or when dependencies change (so manual clicks successfully reset the 2 second delay!)
    return () => clearInterval(intervalId);
  }, [goToNext]);

  return (
    <div className="work-section reveal-on-scroll" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div className="carousel-track">
              {projects.map((project, index) => (
                <div 
                  className={`carousel-slide ${index === currentIndex ? "fade-slide-active" : ""}`} 
                  key={index}
                >
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        {project.description && (
                          <p className="carousel-description" style={{ marginTop: "10px", fontSize: "16px", lineHeight: "1.5", color: "rgba(255, 255, 255, 0.8)", fontFamily: "'Geist', sans-serif" }}>
                            {project.description}
                          </p>
                        )}
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="carousel-image-wrapper">
                      <a href={project.link} target="_blank" rel="noreferrer" className="glass-thumbnail-container" data-cursor="disable">
                        <img src={project.image} alt={project.title} />
                        <div className="glass-overlay">
                          <span>View Live Project</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
