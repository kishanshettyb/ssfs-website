import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { Mail, Phone, MapPin } from "react-feather";

const Footer = () => {
	const data = useStaticQuery(graphql`
		query FooterLogo {
			image: file(relativePath: { eq: "logo.png" }) {
				id
				childImageSharp {
					fixed(width: 70, height: 70) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);
	return (
		<section class="footer-section">
			<Container>
				<Row>
					<Col md={4}>
						<div class="d-flex pb-3 logo-div align-items-center">
							<div>
								<Img fixed={data.image.childImageSharp.fixed} />
							</div>
							<div>
								<h3 className="footer-logo-text">
									Smart Solition Facility Service
								</h3>
							</div>
						</div>
						<p>
							Smart Solution Facility Service commenced operations in 2012 by
							providing House Keeping Services to its clients.
						</p>
					</Col>
					<Col xs={6} md={2}>
						<div className="pl-5">
							<h2>Company</h2>
							<ul>
								<li>
									<Link to="/about/">About Us</Link>
								</li>
								<li>
									<Link to="/#services/">Services</Link>
								</li>
								<li>
									<Link to="/#features/">Features</Link>
								</li>
								<li>
									<Link to="/contact/">Contact Us</Link>
								</li>
							</ul>
						</div>
					</Col>
					<Col xs={6} md={2}>
						<div className="pl-5">
							<h2>Support</h2>
							<ul>
								<li>
									<Link to="/about/">FAQ's</Link>
								</li>
								<li>
									<Link to="/#services/">Privacy Policy</Link>
								</li>
								<li>
									<Link to="/#features/">Terms & Condition</Link>
								</li>
								<li>
									<Link to="/contact/">Contact Us</Link>
								</li>
							</ul>
						</div>
					</Col>
					<Col md={4}>
						<div md={3}>
							<h2>Address</h2>
							<ul>
								<li>
									<Link to="/about/">
										<MapPin className="icons" />
										376, 1st Main, 9th Cross Kasturiba Colony, Girinagar,
										Bangalore - 560085.
									</Link>
								</li>
								<li>
									<Link to="/#services/">
										<Mail className="icons" />
										nagendra.smart1947@gmail.com, nagendra.smart12@gmail.com
									</Link>
								</li>
								<li>
									<Link to="/#features/">
										<Phone className="icons" />
										9945499957 / 9845021173{" "}
									</Link>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
				<div className="copyright-row">
					<p className="text-center pt-3">
						Copyright @2020. All rights reserved Smart Solution Facility Service
					</p>
				</div>
			</Container>
		</section>
	);
};
export default Footer;
