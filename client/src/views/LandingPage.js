import React, { Component } from "react";
import styled from "styled-components";
import AppBar from "../components/AppBar/AppBar";
import ScrollingNewsContainer from "../components/ScrollingNews/ScrollingNewsContainer";
import InteractiveSearchArea from "../components/InteractiveSearchArea/SearchContainer";
import SearchResultsContainer from "../components/SearchResults/SearchResultsContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class LandingPage extends Component {
	state = {
		searchInputs: [],
		searchResults: []
	};

	render() {
		return (
			<div>
				<MuiThemeProvider>
					<AppBar />
					<ScrollingNewsContainer />
					<InteractiveSearchArea />
					<SearchResultsContainer />
				</MuiThemeProvider>
			</div>
		);
	}
}

export default LandingPage;
