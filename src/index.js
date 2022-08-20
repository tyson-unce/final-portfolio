import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';
import Works from './components/Works';

ReactDOM.render(
	<Router>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/works' element={<Works />} />
			<Route
				path='/twitter'
				component={() => {
					window.location.href = 'https://twitter.com/home';
					return null;
				}}
			/>
		</Routes>
	</Router>,
	document.getElementById('root')
);
