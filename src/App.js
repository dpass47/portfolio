import Header from './Components/Header.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js';

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<Projects
				projects={[
					{
						image: '',
						title: 'Celestial Dashboard',
						summary:
							'This project is based off the Momentum Dashboard chrome extension. I learned a tremendous amount in regards to working with APIs and building chrome extensions. The dashboard features weather, crypto price watch, quotes, and time widgets. All complete with a random space-themed background image taken from the Unsplash API.',
						links: {
							github: 'https://github.com/dpass47/celestial-dashboard',
							liveSite:
								'https://dpass47.github.io/celestial-dashboard/',
						},
						languages: ['HTML5', 'CSS3', 'JavaScript'],
					},
					{
						image: '',
						title: 'Tenzies Dice Game',
						summary:
							'This was my first app built with ReactJS, and I learned a great amount while building it. It is a dice game where users need to match the number of all ten die in order to win the game. The game tracks roll counts and time it takes to complete for high scores. When a user completes the game, confetti is shown to signify the win.',
						links: {
							github: 'https://github.com/dpass47/tenzies-game',
							liveSite: 'https://dpass47.github.io/tenzies-game',
						},
						languages: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
					},
					{
						image: '',
						title: 'Portfolio',
						summary:
							'This page right here! A responsive website built with ReactJS. The project content is passed in as props for auto-generating components for easy maintenance and additions.',
						links: {
							github: 'https://github.com/dpass47',
							liveSite: 'https://github.com/dpass47',
						},
						languages: [
							'HTML5',
							'CSS3',
							'Sass',
							'JavaScript',
							'ReactJS',
						],
					},
					{
						image: '',
						title: 'Movie Watchlist',
						summary:
							"This was my first project working with APIs, it connects to the OMDb API to display movies with all necessary data. Using localStorage, users can save movies to their personal watchlist after searching for specified movies. The user's watchlist generates another call to the API to retrieve the data for the movies in their list.",
						links: {
							github: 'https://github.com/dpass47/movie-watchlist',
							liveSite:
								'https://dpass47.github.io/movie-watchlist',
						},
						languages: ['HTML5', 'CSS3', 'JavaScript'],
					},
					{
						image: '',
						title: 'Digital Business Card',
						summary:
							'This is a react project that showcases my skills and interests in a business card format. It also shows the links to my socials to allow for easy access to my profiles for viewing.',
						links: {
							github: 'https://github.com/dpass47/digital-business-card',
							liveSite:
								'https://dpass47.github.io/digital-business-card',
						},
						languages: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
					},
				]}
			/>
		</div>
	);
}

export default App;
