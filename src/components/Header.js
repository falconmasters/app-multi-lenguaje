import React, {useContext} from 'react';
import es from './../img/spain.png';
import en from './../img/united-kingdom.png';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import {langContext} from './../context/langContext'

const Header = () => {
	const idioma = useContext(langContext);

	return (
		<div className="header">
			<div className="navbar">
				<nav className="nav">
					<Link to="/">
						<FormattedMessage
							id="menu.home"
							defaultMessage="Home"
						/>
					</Link>
					<Link to="/explore">
						<FormattedMessage
							id="menu.explore"
							defaultMessage="Explore"
						/>
					</Link>
					<Link to="/profile">
						<FormattedMessage
							id="menu.profile"
							defaultMessage="Profile"
						/>
					</Link>
				</nav>

				<div className="banderas">
					<button onClick={() => idioma.establecerLenguaje('es-MX')}><img src={es} alt=""/></button>
					<button onClick={() => idioma.establecerLenguaje('en-US')}><img src={en} alt=""/></button>
				</div>
			</div>
		</div>
	);
}
 
export default Header;