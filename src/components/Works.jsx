import React from 'react';
import react from './assets/react.jpeg';
import ui from './assets/ui.jpeg';
import wd from './assets/wd.jpeg';
import wd2 from './assets/wd2.jpeg';
import wd3 from './assets/wd3.jpeg';
import wd4 from './assets/wd4.jpeg';
import './styles/Works.scss';

const Works = () => {
	return (
		<div className='works' id='workspages'>
			<div className='work__section'>
				<div className='cards'>
					<img src={react} alt='' />
					<button>See Work</button>
				</div>

				<div className='cards'>
					<img src={ui} alt='' />
					<button>See Work</button>
				</div>

				<div className='cards'>
					<img src={wd} alt='' />
					<button>See Work</button>
				</div>

				<div className='cards'>
					<img src={wd2} alt='' />
					<button>See Work</button>
				</div>

				<div className='cards'>
					<img src={wd3} alt='' />
					<button>See Work</button>
				</div>

				<div className='cards'>
					<img src={wd4} alt='' />
					<button>See Work</button>
				</div>
			</div>
		</div>
	);
};

export default Works;
