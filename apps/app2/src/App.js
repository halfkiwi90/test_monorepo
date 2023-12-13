import logo from "./logo.svg";
import { Button } from "ui";
import something from "some";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					<code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					{process.env.REACT_APP_APP2}
				</a>
				<Button />
				{something}
			</header>
		</div>
	);
}

export default App;
