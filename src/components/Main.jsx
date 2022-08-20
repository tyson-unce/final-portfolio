import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import './styles/Main.scss';

const Main = () => {
	return (
		<div className='main' id='mainPage'>
			<div className='main__container'>
				<div className='main__content'>
					<div className='text'>
						<p>Howdy!</p>
						<h1>I am Tyson Unce</h1>
						<p> A Full-Stack Devlopment Apprentice </p>

						<div className='icons'>
							<a
								href='https://github.com/tyson-unce'
								target={'_blank'}
								rel='noreferrer'
							>
								<GitHubIcon className='icon' />
							</a>
							<a
								href='https://linkedin.com/in/tysonunce/'
								target={'_blank'}
								rel='noreferrer'
							>
								<LinkedInIcon className='icon' />
							</a>
							<a
								href='https://twitter.com/tysonunce2020'
								target={'_blank'}
								rel='noreferrer'
							>
								<TwitterIcon className='icon' />
							</a>
							<a
								href='https://instagram.com/tysonunce'
								target={'_blank'}
								rel='noreferrer'
							>
								<InstagramIcon className='icon' />
							</a>
							<a
								href='https://facebook.com/tysonunce'
								target={'_blank'}
								rel='noreferrer'
							>
								<FacebookIcon className='icon' />
							</a>
						</div>

						<div className='buttons'>
							<a href='tysonresume.tiiny.site' download>
								<button>Download my Resume</button>
							</a>
						</div>
					</div>
				</div>

				<div className='main__img'>
					<img src={'https://i.postimg.cc/QMjy0bKv/tyson-Unce.jpg'} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Main;
