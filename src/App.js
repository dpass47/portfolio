import Header from './Components/Header.js';
import About from './Components/About.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			{/* <div className="social-links">
				<a
					href="https://github.com/dpass47"
					className="github-link"
					rel="noreferrer"
					target="_blank"
				>
					{' '}
					<FontAwesomeIcon icon={faGithub} className="github-icon" />
					<p>GitHub</p>
				</a>
				<a
					href="https://linkedin.com/in/dpass47/"
					className="linkedin-link"
					rel="noreferrer"
					target="_blank"
				>
					{' '}
					<FontAwesomeIcon
						icon={faLinkedinIn}
						className="linkedin-icon"
					/>
					<p>LinkedIn</p>
				</a>
			</div> */}
		</div>
	);
}

export default App;
