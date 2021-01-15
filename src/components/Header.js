import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LogIn } from "react-feather";
import SideBar from "../components/SideBar";
import { Link } from "gatsby";
import Logo from "../assets/img/logo.png";
export default class Header extends Component {
	state = {
		isTop: true,
	};

	componentDidMount() {
		document.addEventListener("scroll", () => {
			const isTop = window.scrollY < 200;
			if (isTop !== this.state.isTop) {
				this.setState({ isTop });
			}
		});
	}
	render() {
		return (
			<div>
				<Navbar
					fixed="top"
					bg={this.state.isTop ? "transparent" : "dark"}
					expand="lg"
				>
					<Container>
						<Navbar.Brand href="/">
							<img className="logo-img" alt="Logo" src={Logo} />
							Smart Solution Facilty Service
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-auto">
								<Nav.Link as={Link} to="/">
									Home
								</Nav.Link>
								<Nav.Link as={Link} to="/about/">
									About
								</Nav.Link>
								<NavDropdown title="Services" id="basic-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">
										Something
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">
										Separated link
									</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link as={Link} to="/contact/">
									Contact
								</Nav.Link>
								<Nav.Link target="_bank" href="https://google.co.in">
									Blog
								</Nav.Link>
								<Nav.Link as={Link} to="/login/">
									<LogIn className="login-icon" />
									Log In
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<SideBar />
			</div>
		);
	}
}
