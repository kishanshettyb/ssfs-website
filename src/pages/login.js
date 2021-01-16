import { Link } from "gatsby";
import { navigate } from "gatsby";

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
import GoogleIcon from "../assets/icons/google-brands.svg";
import GoogleIconWhite from "../assets/icons/google-brands-white.svg";
import FacebookIcon from "../assets/icons/facebook-f-brands.svg";
import FacebookIconWhite from "../assets/icons/facebook-f-brands-white.svg";
import Logo from "../images/logo.png";
import React, { Component } from "react";
import firebase from "firebase";

export default class login extends Component {
	state = { isSignedIn: false, inputValue: "" };
	uiConfig = {
		signInFlow: "popup",
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
		],
		callbacks: {
			signInSuccess: () => false,
		},
	};

	componentDidMount = () => {
		firebase.auth().onAuthStateChanged((user) => {
			this.setState({ isSignedIn: !!user });
			console.log("user", user);
		});
	};

	handleLogin() {
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function (result) {
				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				var token = result.credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				console.log(user, token);
				// ...
			})
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				console.log(errorCode, errorMessage, email, credential);
				// ...
			});
	}

	handleGoogleLogin() {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function (result) {
				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				var token = result.credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				console.log(user, token);

				// ...
			})
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				console.log(errorCode, errorMessage, email, credential);

				// ...
			});
	}
	updateInputValue(evt) {
		this.setState({
			inputValue: evt.target.value,
		});
	}

	setUpReCaptcha = () => {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
			"recaptcha-conatiner",
			{
				size: "invisible",
				callback: (response) => {
					// reCAPTCHA solved, allow signInWithPhoneNumber.
					this.onSignInSubmit();
				},
			}
		);
	};

	onSignInSubmit = (event) => {
		event.preventDefault();
		this.setUpReCaptcha();
		// const phoneNumber = getPhoneNumberFromUserInput();
		const phoneNumber = "+91" + this.state.inputValue;

		console.log(phoneNumber);
		const appVerifier = window.recaptchaVerifier;
		firebase
			.auth()
			.signInWithPhoneNumber(phoneNumber, appVerifier)
			.then((confirmationResult) => {
				// SMS sent. Prompt user to type the code from the message, then sign the
				// user in with confirmationResult.confirm(code).
				window.confirmationResult = confirmationResult;
				// const code = getCodeFromUserInput();
				const code = window.prompt("Enter OTP");

				confirmationResult
					.confirm(code)
					.then((result) => {
						// User signed in successfully.
						const user = result.user;
						console.log("user signed in" + user);
						// ...
					})
					.catch((error) => {
						// User couldn't sign in (bad verification code?)
						// ...
					});
				// ...
			})
			.catch((error) => {
				// Error; SMS not sent
				// ...
			});
	};

	render() {
		return (
			<div>
				<Container fluid className="p-0 login-conatiner">
					<Row className="d-flex align-items-center m-0 p-0">
						<Col md={6} className="p-0">
							<LargeImage />
						</Col>
						<Col md={6}>
							{this.state.isSignedIn ? (
								navigate("/")
							) : (
								<div className="login-content">
									<div className="login-logo">
										<div className="d-flex  align-items-center">
											<div>
												<img src={Logo} alt="SSFS" className="logo-img" />
											</div>
											<div className="logo">Smart Solution Facilty Service</div>
										</div>
									</div>
									<div className="text-center mb-5">
										<h2 className="title">Welcome Back to SSFS</h2>
										<p className="light-text">
											New to SSFS?&nbsp;<Link to="/register/"> Register</Link>
										</p>
									</div>
									<Form onSubmit={this.onSignInSubmit} className="pt-3">
										<div id="recaptcha-conatiner"></div>
										<Row>
											<Col md={12}>
												<Form.Label
													htmlFor="inlineFormInputGroupUsername2"
													srOnly
												>
													Username
												</Form.Label>
												<InputGroup className="mb-2 mr-sm-2">
													<InputGroup.Prepend>
														<InputGroup.Text>+91</InputGroup.Text>
													</InputGroup.Prepend>
													<FormControl
														value={this.state.inputValue}
														onChange={(evt) => this.updateInputValue(evt)}
														id="inlineFormInputGroupUsername2"
														placeholder="Your Phone Number"
													/>
												</InputGroup>
											</Col>
											<Col md={12}>
												<Button
													type="submit"
													block
													variant="dark"
													className="mt-2 mb-3"
												>
													Login
												</Button>
											</Col>
										</Row>
									</Form>

									<Row>
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
												onClick={this.handleLogin}
											>
												<img
													alt="facebook login icon"
													className="btn-icon"
													src={FacebookIcon}
												/>
												<img
													alt="facebook white login icon"
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
												onClick={this.handleGoogleLogin}
											>
												<img
													alt="google login btn icon"
													className="btn-icon"
													src={GoogleIcon}
												/>
												<img
													alt="google white login btn icon"
													className="btn-icon whiteIcon"
													src={GoogleIconWhite}
												/>
												Connect with Google
											</Button>
										</Col>
									</Row>
								</div>
							)}
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
