import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.scss';

const Header = () => {
	const [active, setActive] = useState(false);

	const showMenu = () => {
		setActive(!active);
	};

	return (
		<div className='header'>
			<div className='header__logo'>
				<h1>Leedd</h1>
			</div>

			<nav className={active ? 'navbar active' : 'navbar'}>
				<ul>
					<div className='closed'>
						<CloseIcon className='close' onClick={showMenu} />
					</div>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/'>About</Link>
					</li>
					<li>
						<Link to='/'>Portfolio</Link>
					</li>
					<li>
						<Link to='/'>Pages</Link>
					</li>
					<li>
						<Link to='/'>Blog</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>

			<div className='changer'>
				<MenuIcon className='menu' onClick={showMenu} />
			</div>
		</div>
	);
};

export default Header;
