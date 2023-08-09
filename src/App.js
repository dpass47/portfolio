import Header from './Components/Header.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js';
import Footer from './Components/Footer.js';
import data from './data.js';

function App() {
	return (
		<div className="App">
			<div className="container">
				<Header />
				<About />
				<Projects projects={data} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
