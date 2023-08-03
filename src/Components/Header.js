import '../styles/Header.scss';
import { Link } from 'react-scroll';

function Header() {
	return (
		<header>
			<h1 className="header-name">Dante Passalacqua</h1>
			<div className="header-links">
				<p>
					<Link
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						offset={-10}
						duration={500}
					>
						Projects
					</Link>
				</p>
				<p>
					<Link
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						Contact
					</Link>
				</p>
			</div>
		</header>
	);
}

export default Header;
