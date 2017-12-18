import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";

class App extends Component {
	render() {
		return (
			<div>
				<LandingPage />
			</div>
		);
	}
}

export default App;
