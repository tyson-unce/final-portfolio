import React from 'react';
import './styles/Section.scss';
import tyson from './assets/tysonUnce.png';

const Section = () => {
	return (
		<div className='section' id='aboutMe'>
			<div className='section__container'>
				<div className='section__img'>
					<img src={tyson} alt='' />
				</div>

				<div className='section__content'>
					<h1>Who is Tyson</h1>
					<p>coding apprentice at road to hire</p>
					<p>aspiring full stack developer</p>
					<p>proficient in mern stack</p>
					<p>avid learner</p>
				</div>
				<div className='section__content'>
					<h1>Proficiency</h1>
					<p>Python</p>
					<p>javascript</p>
					<p>node.js</p>
					<p>react.js</p>
					<p>scss</p>
					<p>aws</p>
					<p>Mysql</p>
					<p>Mongo</p>
				</div>
			</div>
		</div>
	);
};

export default Section;
