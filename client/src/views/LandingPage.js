import React, { Component } from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar/Navbar.js";
//import scrolling news
//import breaking news
//import SearchResultsContainer
//import SearchContainer

class LandingPage extends Component {
	state = {
		searchInputs: [],
		searchResults: []
	};

	render() {
		return (
			<div>
				<Navbar />
				<p> Hello World </p>
			</div>
		);
	}
}

export default LandingPage;
