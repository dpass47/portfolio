import danteImage from '../images/dante-01.jpg';
import '../styles/About.scss';

function About() {
	return (
		<div className="main">
			<div className="main-content">
				<h2>
					Hello, I'm Dante, a{' '}
					<span className="accent-text">developer</span> based in
					Colorado.{' '}
				</h2>
				<p>
					I was a student at an online Frontend Developer course where
					I spent 8 months learning the fundamentals of frontend web
					development. I love building simple, beautiful user
					experiences.
				</p>
				<p>I am currently looking for my first role as a developer.</p>
			</div>
			<img
				src={danteImage}
				alt="Dante smiling in front of a brick wall"
			/>
		</div>
	);
}

export default About;
