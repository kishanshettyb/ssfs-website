import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LogIn } from "react-feather";
import logo from "../assets/img/logo.png";
import SideBar from "../components/SideBar";

export default function Header() {
	return (
		<div>
			<Navbar fixed="top" bg="transparent" expand="lg">
				<Container>
					<Navbar.Brand href="#home">
						<img className="logo-img" src={logo} alt="Third slide" />
						Smart Solution Facilty Service
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">About</Nav.Link>
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
							<Nav.Link href="#link">Contact</Nav.Link>
							<Nav.Link href="#link">
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