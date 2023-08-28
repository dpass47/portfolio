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
					I am currently a certified pharmacy technician looking to
					make a career change to front-end development. I started
					building websites in 2022, and I absolutely fell in love
					with the power of developing online applications.
				</p>
				<p>
					I was a student at an online Front-End Developer course
					where I spent 8 months learning the fundamentals of
					front-end web development. I love building simple, beautiful
					user experiences.
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
