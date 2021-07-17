import './App.css';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useState } from 'react';
import Card from './components/Card.js';
import data from './assets/data.js';

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const lightTheme = {
		backgroundColor: '#fff',
		color: '#000',
	};

	const darkTheme = {
		backgroundColor: '#000',
		color: '#fff',
	};

	return (
		<div className="App" style={isDarkMode ? darkTheme : lightTheme}>
			<div className="header">
				<h2 id="header">Nav's Socials</h2>
				<p className="subtitle">By Nav, 2021.</p>
				<DarkModeToggle
					className="dark-mode-toggle"
					onChange={setIsDarkMode}
					checked={isDarkMode}
					size={70}
				/>
			</div>

			<div className="cards-container">
				{data.map((dataItem, i) => (
					<Card data={dataItem} i={i} />
				))}
			</div>
		</div>
	);
}

export default App;
