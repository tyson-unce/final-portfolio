import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import './styles/Main.scss';
import man from './assets/man.png';

const Main = () => {
	return (
		<div className='main' id='mainPage'>
			<div className='main__container'>
				<div className='main__content'>
					<div className='text'>
						<p>Hey There !</p>
						<h1>I am Bob Russer</h1>
						<p>Creative Art Director & Designer</p>

						<div className='icons'>
							<TwitterIcon className='icon' />
							<InstagramIcon className='icon' />
							<FacebookIcon className='icon' />
							<LinkedInIcon className='icon' />
							<PinterestIcon className='icon' />
						</div>

						<div className='buttons'>
							<button>See My Work</button>
							<button>Hire Me</button>
						</div>
					</div>
				</div>

				<div className='main__img'>
					<img src={man} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Main;
