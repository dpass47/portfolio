import '../styles/Footer.scss';

function Footer() {
	return (
		<div className="footer">
			<h2 className="contact-title" id="contact">
				Contact
			</h2>
			<div className="contact-links">
				<a
					href="mailto:dante.l.pass@gmail.com"
					className="contact-link"
					target="_blank"
					rel="noreferrer"
				>
					dante.L.pass@gmail.com
				</a>
				<a
					href="https://linkedin.com/in/dpass47"
					className="contact-link"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn
				</a>
				<a
					href="https://github.com/dpass47"
					className="contact-link"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				<a
					href={require('../documents/dantepassalacqua-resume.pdf')}
					className="contact-link"
					target="_blank"
					rel="noreferrer"
				>
					Resume
				</a>
			</div>
		</div>
	);
}

export default Footer;
