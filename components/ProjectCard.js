import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link';
const githubHost = 'https://github.com/';

const ProjectCard = ({ project }) => (
  <div className="container">
    <h2 className="title">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {project.title}
      </a>
    </h2>
    <div className="displayImage" />
    <div className="keywords">
      {
        project.keywords.map(tag =>
          <span className="tag">{tag}</span>,
        )
      }
    </div>
    <div>{project.description.split('\n').map(row => <p>{row}<br /></p>)}</div>
    <ul className="contributors">
      <h3>Contributors</h3>
      {
        project.contributors.map(contributor => (
          <li>
            {`${contributor.name} `}
            <a href={`${githubHost}${contributor.gitUsername}`} target="_blank" rel="noopener noreferrer">
              {`(@${contributor.gitUsername})`}
            </a>
          </li>
        ))
      }
    </ul>
    <style jsx>{`
      .container {
        border: 1px solid #d0d0d0;
        border-radius: 10px;
        margin-bottom: 30px;
        padding: 0 50px;
      }
      @media (max-width: 767px) {
        .container {
          padding: 0 10px;
        }
      }
      .title {
        text-align: center;
      }
      .displayImage {
        width: 100px;
        height: 100px;
        text-align: center;
      }
      .keywords .tag {
        background-color: #f0f0f0;
        margin: 0 5px;
        padding: 5px;
        border-radius: 5px;
      }
    `}</style>
  </div>
);
ProjectCard.propTypes = {
  project: PropTypes.objectOf({
    title: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
