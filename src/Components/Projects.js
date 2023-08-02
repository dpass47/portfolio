import React from 'react';
import { v4 as uuid } from 'uuid';
import '../styles/Projects.css';
import { Button, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ProjectLanguage({ language }) {
	return (
		<Chip
			label={language}
			variant="outlined"
			color="info"
			size="small"
			className="chip"
		></Chip>
	);
}

function ProjectLanguages({ languages }) {
	return (
		<div className="project-languages">
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
			<Button
				variant="contained"
				size="small"
				startIcon={<GitHubIcon />}
				href={github}
				rel="noreferrer"
				target="_blank"
				className="source-link links"
			>
				Source code
			</Button>
			<Button
				variant="contained"
				size="small"
				startIcon={<OpenInNewIcon />}
				href={liveSite}
				rel="noreferrer"
				target="_blank"
				className="demo-link links"
			>
				Live Demo
			</Button>
		</div>
	);
}

function ProjectCard({ image, title, summary, languages, links }) {
	return (
		<div className="project-card">
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
			<h2 className="projects-title" id="projects">
				Projects
			</h2>
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
