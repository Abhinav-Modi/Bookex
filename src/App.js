import React from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="col-md-6 text-center">
						<Search />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
