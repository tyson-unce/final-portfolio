import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './styles/Header.scss';

const Header = () => {
	const [active, setActive] = useState(false);

	const showMenu = () => {
		setActive(!active);
	};

	return (
		<div className='header' id='theHeader'>
			<nav className={active ? 'navbar active' : 'navbar'}>
				<ul className='list'>
					<div className='closed'>
						<CloseIcon className='close' onClick={showMenu} />
					</div>
					<li>
						<Link to='#mainPage' smooth>
							Home
						</Link>
					</li>
					<li>
						<Link to='#aboutMe' smooth>
							About me
						</Link>
					</li>

					<li>
						<Link to='#workspages' smooth>
							Projects
						</Link>
					</li>

					<li>
						<Link to='#contactpage' smooth>
							Contact
						</Link>
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
