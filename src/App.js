import './App.css';
import Card from './components/Card.js';
import data from './assets/data.js';

function App() {
	return (
		<div className="App">
			<div className="header">
				<h2 id="header">Nav's Socials</h2>
				<p className="subtitle">By Nav, 2021.</p>
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
