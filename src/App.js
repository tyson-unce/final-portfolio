import React from 'react';
import './App.scss';
import Contact from './components/Contact';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Works from './components/Works';

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Section />
			<Works />
			<Contact />
		</div>
	);
}

export default App;
