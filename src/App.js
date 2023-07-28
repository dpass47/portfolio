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
						title: 'Title 1',
						summary: '',
						links: {
							github: 'https://github.com/',
							liveSite: 'https://linkedin.com/',
						},
						languages: ['HTML', 'CSS', 'JavaScript'],
					},
					{
						image: '',
						title: 'Title 2',
						summary: '',
						links: {
							github: 'https://github.com/',
							liveSite: 'https://linkedin.com/',
						},
						languages: ['HTML', 'CSS', 'JavaScript'],
					},
					{
						image: '',
						title: 'Title 3',
						summary: '',
						links: {
							github: 'https://github.com/',
							liveSite: 'https://linkedin.com/',
						},
						languages: ['HTML', 'CSS', 'JavaScript'],
					},
				]}
			/>
		</div>
	);
}

export default App;
