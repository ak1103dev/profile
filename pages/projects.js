import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';

export default () => (
  <div className="content">
    <h1>Projects</h1>
    <div className="projects">{
      projects.map(project =>
        <ProjectCard project={project} />,
      )
    }</div>
    <style jsx>{`
      .projects {
      }
    `}</style>
  </div>
);
