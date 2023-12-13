import logo from "./logo.svg";
import "./App.css";
import something from "some";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					<code>src/App.js</code>
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					{process.env.REACT_APP_APP1}
				</a>
				{something}
			</header>
		</div>
	);
}

export default App;
