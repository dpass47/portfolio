// import data from '../data';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { v4 as uuid } from 'uuid';
import '../styles/Projects.css';

function ProjectLanguage({ language }) {
	return <span className="project-language">{language}</span>;
}

function ProjectLanguages({ languages }) {
	return (
		<div className="projects-languages">
			{languages.map((language, index) => {
				return (
					<ProjectLanguage
						language={language}
						index={index}
						key={uuid()}
					/>
				);
			})}
		</div>
	);
}

function ProjectLinks({ links }) {
	const { github, liveSite } = links;

	return (
		<div className="project-links">
			<a
				href={github}
				rel="noreferrer"
				target="_blank"
				className="source-link links"
			>
				<FontAwesomeIcon
					icon={faGithub}
					className="project-links--icons"
				/>
				Source code
			</a>
			<a
				href={liveSite}
				rel="noreferrer"
				target="_blank"
				className="demo-link links"
			>
				<FontAwesomeIcon
					icon={faShareFromSquare}
					className="project-links--icons"
				/>
				Live Demo
			</a>
		</div>
	);
}

function ProjectCard({ image, title, summary, languages, links }) {
	return (
		<div className="project-card blurred-box">
			<img src={image} alt="" className="project-image" />
			<div className="project-content">
				<h3>{title}</h3>
				<p>{summary}</p>
				<ProjectLanguages languages={languages} />
				<ProjectLinks links={links} />
			</div>
		</div>
	);
}

function Projects({ projects }) {
	return (
		<div className="projects-container">
			{projects.map((project) => (
				<ProjectCard
					image={project.image}
					title={project.title}
					summary={project.summary}
					links={project.links}
					languages={project.languages}
					key={uuid()}
				/>
			))}
		</div>
	);
}

export default Projects;
