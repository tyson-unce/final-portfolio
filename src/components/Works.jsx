import React from 'react';
import wd3 from './assets/wd3.jpeg';
import './styles/Works.scss';
import netflix from './assets/netflixSS.png';
import hopehacks from './assets/hopeHacksSS.png';
import ecom from './assets/ecomSS.png';
import bot from './assets/botSS.png';

const Works = () => {
	return (
		<div className='works' id='workspages'>
			<div className='work__section'>
				<div className='cards'>
					<img src={ecom} alt='' />
					<a
						href='https://www.smartproductsbytyson.com/'
						target={'_blank'}
						rel='noreferrer'
					>
						<button>Ecommerce site</button>
					</a>
				</div>

				<div className='cards'>
					<img src={netflix} alt='' />
					<a
						href='https://main.d1zo0b1ozl1ups.amplifyapp.com/'
						target={'_blank'}
						rel='noreferrer'
					>
						<button>Netflix Clone</button>
					</a>
				</div>

				<div className='cards'>
					<img src={hopehacks} alt='' />
					<a
						href='https://hopehacks1.herokuapp.com/index'
						target={'_blank'}
						rel='noreferrer'
					>
						<button>HopeHacks project</button>
					</a>
				</div>

				<div className='cards'>
					<img src={wd3} alt='' />
					<a
						href='https://main.d1zo0b1ozl1ups.amplifyapp.com/'
						target={'_blank'}
						rel='noreferrer'
					>
						<button>See Work</button>
					</a>
				</div>
				<div className='cards'>
					<img src={bot} alt='' />
					<a
						href='https://master.d2t1q1va22szti.amplifyapp.com/'
						target={'_blank'}
						rel='noreferrer'
					>
						<button>See Work</button>
					</a>
				</div>
				<div className='cards'>
					<img src={bot} alt='' />
					<a
						href='https://master.d2t1q1va22szti.amplifyapp.com/'
						target={'_blank'}
						rel='noreferrer'
					>
						<button>See Work</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Works;
