import Header from './Components/Header.js';

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<div className="main-content">
					<h2>Hello! I'm Dante, a developer based in Colorado. </h2>
					<p>
						Pharmacy Technician turned into a development
						enthusiast. I've loved everything to do with computers
						since I was a kid. Once I found web development, I
						absolutely fell in love.
					</p>
					<p>
						I was a student at an online Frontend Developer course
						where I spent 8 months learning the fundamentals of
						frontend web development. I love building applications
						that are user-friendly, simple and useful.
					</p>

					<p>
						I am currently looking for my first role as a developer.{' '}
					</p>
				</div>
				<img
					src="./images/dante-01.jpg"
					alt="Dante smiling in front of a brick wall"
				/>
			</main>
		</div>
	);
}

export default App;
