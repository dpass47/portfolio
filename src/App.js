import Header from './Components/Header.js';
import danteImage from './images/dante-01.jpg';

function App() {
	return (
		<div className="App">
			<Header />
			<div className="main">
				<div className="main-content">
					<h2>
						Hello, I'm Dante, a{' '}
						<span className="accent-text">developer</span> based in
						Colorado.{' '}
					</h2>
					<p>
						I was a student at an online Frontend Developer course
						where I spent 8 months learning the fundamentals of
						frontend web development. I love building simple,
						beautiful user experiences.
					</p>
					<p>
						I am currently looking for my first role as a developer.{' '}
						<span className="main-contact">Contact me?</span>{' '}
					</p>
				</div>
				<img
					src={danteImage}
					alt="Dante smiling in front of a brick wall"
				/>
			</div>
			<div className="projects">
				<h2 className="projects-header">Projects</h2>
			</div>
		</div>
	);
}

export default App;
