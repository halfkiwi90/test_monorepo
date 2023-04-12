import logo from "./logo.svg";
import "./App.css";

function App() {
	// env variables

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload. app1 changed
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					{process.env.REACT_APP_APP1}
				</a>
			</header>
		</div>
	);
}

export default App;
