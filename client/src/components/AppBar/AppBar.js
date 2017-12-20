import React, { Component } from "react";
import styled from "styled-components";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Typography from "material-ui/Typography";

const LogoIcon = styled.img`
	height: 2.5em;
	width: auto;
`;

const MainMenuOption = styled.div`
	float: right;
`;

class MyAppBar extends Component {
	render() {
		return (
			<div>
				<AppBar>
					<Toolbar>
						<IconButton color="contrast" aria-label="Menu">
							<MenuIcon />
						</IconButton>
						<Button>
							<LogoIcon
								src={require("../../assets/images/logo.png")}
								alt="logo"
							/>{" "}
						</Button>
						<Typography type="title" color="inherit">
							GEO-TRENDING NEWS
						</Typography>
						<Button style={{ textAlign: "right" }} color="contrast">
							Login / Sign Up
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default MyAppBar;
