import celestialImage from './images/celestial-dashboard.png';
import cardImage from './images/digital-business-card.png';
import movieImage from './images/movie-watchlist.png';
import tenziesImage from './images/tenzies-game.png';
import portfolioImage from './images/portfolio.png';
import pricingImage from './images/pricing-component.png';
import passwordImage from './images/password-generator.png';
import travelImage from './images/travel-journal.png';
import unitImage from './images/unit-converter.png';

const data = [
	{
		image: travelImage,
		title: 'Travel Journal',
		summary:
			'This react project is a travel journal to log and display all of my trips. It uses props to pass in all necessary data to display all relevant trip information. The use of props allows me to easily create new trip entries and update prior ones if needed. I displayed all the information using CSS flexbox to create a neat showcase of all the trip information.',
		links: {
			github: 'https://github.com/dpass47/travel-journal',
			liveSite: 'https://travel-journal.devdante.com',
		},
		languages: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
	},
	{
		image: pricingImage,
		title: 'Subscription Pricing Component',
		summary:
			'This was a solution to a challenge of creating a subscription pricing page. I followed pictures of a design to create the entirety of the page. It comes with a toggle button to show monthly and annual prices.',
		links: {
			github: 'https://github.com/dpass47/pricing-component',
			liveSite: 'https://pricing-component.devdante.com',
		},
		languages: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
	},
	{
		image: tenziesImage,
		title: 'Tenzies Dice Game',
		summary:
			'This was my first app built with ReactJS, and I learned a great amount while building it. It is a dice game where users need to match the number of all ten die in order to win the game. The game tracks roll counts and time it takes to complete for high scores. When a user completes the game, confetti is shown to signify the win.',
		links: {
			github: 'https://github.com/dpass47/tenzies-game',
			liveSite: 'https://tenzies.devdante.com',
		},
		languages: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
	},
	{
		image: portfolioImage,
		title: 'Portfolio',
		summary:
			'This page right here! A responsive website built with ReactJS. The project content is passed in as props for auto-generating components for easy maintenance and additions.',
		links: {
			github: 'https://github.com/dpass47/portfolio',
			liveSite: 'https://devdante.com',
		},
		languages: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
	},
	{
		image: celestialImage,
		title: 'Celestial Dashboard',
		summary:
			'This project is based off the Momentum Dashboard chrome extension. I learned a tremendous amount in regards to working with APIs and building chrome extensions. The dashboard features weather, crypto price watch, quotes, and time widgets. All complete with a random space-themed background image taken from the Unsplash API.',
		links: {
			github: 'https://github.com/dpass47/celestial-dashboard',
			liveSite: 'https://celestial-dashboard.devdante.com',
		},
		languages: ['HTML5', 'CSS3', 'JavaScript'],
	},
	{
		image: movieImage,
		title: 'Movie Watchlist',
		summary:
			"This was my first project working with APIs, it connects to the OMDb API to display movies with all necessary data. Using localStorage, users can save movies to their personal watchlist after searching for specified movies. The user's watchlist generates another call to the API to retrieve the data for the movies in their list.",
		links: {
			github: 'https://github.com/dpass47/movie-watchlist',
			liveSite: 'http://movie-watchlist.devdante.com',
		},
		languages: ['HTML5', 'CSS3', 'JavaScript'],
	},
	{
		image: passwordImage,
		title: 'Password Generator',
		summary:
			'This is a chrome extension that allows the user to choose a desired password length, and it will generate four random passwords that are available to copy via click. I created a function in JavaScript to create the random password by passing through all available characters, and then used Math.random() to pick a randomized combination of the characters.',
		links: {
			github: 'https://github.com/dpass47/password-generator',
			liveSite: 'https://password-generator.devdante.com',
		},
		languages: ['HTML5', 'CSS3', 'JavaScript'],
	},
	{
		image: cardImage,
		title: 'Digital Business Card',
		summary:
			'This is a react project that showcases my skills and interests in a business card format. It also shows the links to my socials to allow for easy access to my profiles for viewing.',
		links: {
			github: 'https://github.com/dpass47/digital-business-card',
			liveSite: 'https://card.devdante.com',
		},
		languages: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
	},
	{
		image: unitImage,
		title: 'Unit Converter',
		summary:
			'This was a school project where the objective was to build an imperial to metric unit converter using JavaScript. It converts length, volume, and mass using basic math operations. The function uses the "keyup" eventListener to automatically update based on the number the user inputs. I styled it using a background gradient over the user input section with a concise section to display all of the conversions.',
		links: {
			github: 'https://github.com/dpass47/unit-converter',
			liveSite: 'https://unit-converter.devdante.com',
		},
		languages: ['HTML5', 'CSS3', 'JavaScript'],
	},
];

export default data;
