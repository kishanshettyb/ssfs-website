import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LogIn } from "react-feather";
import SideBar from "../components/SideBar";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default function Header() {
	const data = useStaticQuery(graphql`
		query GetLogo {
			image: file(relativePath: { eq: "logo.png" }) {
				id
				childImageSharp {
					fixed(height: 45) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);
	return (
		<div>
			<Navbar fixed="top" bg="transparent" expand="lg">
				<Container>
					<Navbar.Brand href="/">
						<Img
							className="logo-img"
							fixed={data.image.childImageSharp.fixed}
						/>
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
