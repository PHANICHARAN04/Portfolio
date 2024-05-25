import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaDatabase, FaGit, FaGithub, FaAws } from 'react-icons/fa';
import { SiSpring, SiMongodb, SiPostman, SiVercel, SiVisualstudiocode, SiEclipseide, SiTableau } from 'react-icons/si';
import '../styles/Skills.css';

const skills = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Spring Boot', icon: <SiSpring /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React Js', icon: <FaReact /> },
  { name: 'Node Js', icon: <FaNodeJs /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'MySQL', icon: <FaDatabase /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Git', icon: <FaGit /> },
  { name: 'Github', icon: <FaGithub /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Tableau', icon: <SiTableau /> },
  { name: 'Visual Studio Code', icon: <SiVisualstudiocode /> },
  { name: 'Eclipse IDE', icon: <SiEclipseide /> }
];

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h2 className="side-heading">Languages, Libraries, Frameworks & Tools</h2>
      <h2 className="side-heading2">that I work with</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
