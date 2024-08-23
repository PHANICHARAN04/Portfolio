import React, { useRef, useEffect, useState } from 'react';
import '../styles/Projects.css';
import ofos from '../images/project/ofos.png';
import hws from '../images/project/hws.png';
import exp from '../images/project/exp.png';
import qa from '../images/project/qa.png';

const projectsData = [
  {
    id: 1,
    title: 'Online Food Ordering System',
    description: 'Developed an online food platform with 3 modules for seamless ordering experiences and a streamlined registration system for restaurant owners',
    image: ofos,
    github: 'https://github.com/PHANICHARAN04/OnlineFoodOrderingSystem/tree/main/OFOS',
    technologies: ['Spring Boot', 'Java', 'MySQL', 'HTML, CSS']
  },
  {
    id: 2,
    title: 'HealthCare & Well Being System',
    description: 'Developed a comprehensive healthcare system with 3 modules to ensure accommodating doctors and tests',
    image: hws,
    github: 'https://github.com/PHANICHARAN04/HealthCareAndWellBeingSystem',
    technologies: ['Django', 'HTML', 'CSS', 'MongoDB']
  },
  {
    id: 3,
    title: 'Expense Tracker',
    description: 'Developed a budget & expense-tracking platform aimed at effectively managing finances with graphical representation and threshold alerts',
    image: exp,
    github: 'https://github.com/PHANICHARAN04/Expense-Tracker',
    technologies: ['React', 'JavaScript', 'CSS']
  },
  {
    id: 4,
    title: 'Quiz App',
    description: 'Developed a Quiz application tailored for cricket enthusiasts, featuring a timer and scoring system.',
    image: qa,
    technologies: ['HTML', 'CSS', 'JavaScript']
  }
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef(null);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const projectItems = scrollRef.current.children;
      const selectedElement = projectItems[index];
      const containerWidth = scrollRef.current.offsetWidth;
      const selectedElementWidth = selectedElement.offsetWidth;
      const offset = selectedElement.offsetLeft - (containerWidth / 2) + (selectedElementWidth / 2);

      scrollRef.current.scrollTo({
        left: offset,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const options = {
      root: scrollRef.current,
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'), 10);
          setActiveIndex(index);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    const projectItems = scrollRef.current.children;
    Array.from(projectItems).forEach(item => {
      observerRef.current.observe(item);
    });

    // Set initial active index to 0 and scroll to it
    scrollToIndex(0);

    return () => {
      if (observerRef.current) {
        Array.from(projectItems).forEach(item => {
          observerRef.current.unobserve(item);
        });
      }
    };
  }, []);

  const scrollLeft = () => {
    const newIndex = (activeIndex - 1 + projectsData.length) % projectsData.length;
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = (activeIndex + 1) % projectsData.length;
    scrollToIndex(newIndex);
  };

  return (
    <div className="projects-section" id='projects'>
      <h2 className="side-heading">Recent Projects</h2>
      <h2 className="side-heading2">that I worked</h2>
      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>‹</button>
        <div className="projects-wrapper" ref={scrollRef}>
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-item ${activeIndex === index ? 'active' : ''}`} 
              data-index={index}
              onClick={() => scrollToIndex(index)}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies used:</strong> {project.technologies.join(', ')}</p>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-button">View on GitHub</a>
              )}
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>›</button>
      </div>
    </div>
  );
};

export default Projects;
