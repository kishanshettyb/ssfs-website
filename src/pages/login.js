import { Link } from "gatsby";
import React from "react";
import {
	Row,
	Col,
	Container,
	Form,
	Button,
	InputGroup,
	FormControl,
} from "react-bootstrap";
import LargeImage from "../components/LargeImage";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import GoogleIcon from "../assets/icons/google-brands.svg";
import GoogleIconWhite from "../assets/icons/google-brands-white.svg";
import FacebookIcon from "../assets/icons/facebook-f-brands.svg";
import FacebookIconWhite from "../assets/icons/facebook-f-brands-white.svg";

const Login = () => {
	const data = useStaticQuery(graphql`
		query getLogo {
			image: file(relativePath: { eq: "logo.png" }) {
				id
				childImageSharp {
					fixed(height: 35) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);
	return (
		<div>
			<Container fluid className="p-0 login-conatiner">
				<Row className="d-flex align-items-center m-0 p-0">
					<Col md={6} className="p-0">
						<LargeImage />
					</Col>
					<Col md={6}>
						<div className="login-content">
							<div className="login-logo">
								<div className="d-flex  align-items-center">
									<div>
										<Img
											className="logo-img"
											fixed={data.image.childImageSharp.fixed}
										/>
									</div>
									<div className="logo">Smart Solution Facilty Service</div>
								</div>
							</div>
							<div class="text-center mb-5">
								<h2 className="title">Welcome Back to SSFS</h2>
								<p class="light-text">
									New to SSFS?&nbsp;<Link to="/register/"> Register</Link>
								</p>
							</div>
							<Form className="pt-3">
								<Row>
									<Col md={12}>
										<Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
											Username
										</Form.Label>
										<InputGroup className="mb-2 mr-sm-2">
											<InputGroup.Prepend>
												<InputGroup.Text>+91</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												id="inlineFormInputGroupUsername2"
												placeholder="Your Phone Number"
											/>
										</InputGroup>
									</Col>
									<Col md={12}>
										<Button block variant="dark" className="mt-2 mb-3">
											Login
										</Button>
									</Col>
									<Col md={12} className="text-right">
										<div className="mb-3">
											<Link to="/forgot/">Forgot password?</Link>
										</div>
									</Col>
									<Col md={12}>
										<Button
											block
											variant="outline-primary"
											className="mb-3 facebook-btn"
										>
											<img className="btn-icon" src={FacebookIcon} />
											<img
												className="btn-icon whiteIcon"
												src={FacebookIconWhite}
											/>
											Connect with Facebook
										</Button>
									</Col>
									<Col md={12}>
										<Button
											block
											variant="outline-primary"
											className="google-btn"
										>
											<img className="btn-icon" src={GoogleIcon} />
											<img
												className="btn-icon whiteIcon"
												src={GoogleIconWhite}
											/>
											Connect with Google
										</Button>
									</Col>
								</Row>
							</Form>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
