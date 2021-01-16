import React, { Component } from "react";
import firebase from "firebase";
import { Button } from "react-bootstrap";

firebase.initializeApp({
	apiKey: "AIzaSyBGNQeaAKctaMRjolNpjZEpVpUFYPLZ1JI",
	authDomain: "ssfs-67f2b.firebaseapp.com",
});
class Auth extends Component {
	state = { isSignedIn: false };
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
				console.log(user);
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
				console.log(user);
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
				// ...
			});
	}

	render() {
		return (
			<div className="App">
				{this.state.isSignedIn ? (
					<span>
						<div>Signed In!</div>
						<button onClick={() => firebase.auth().signOut()}>Sign out!</button>
						<h1>Welcome {firebase.auth().currentUser.displayName}</h1>
						<img
							alt="profile picture"
							src={firebase.auth().currentUser.photoURL}
						/>
					</span>
				) : (
					// <StyledFirebaseAuth
					// 	uiConfig={this.uiConfig}
					// 	firebaseAuth={firebase.auth()}
					// />
					// <div><Button onClick={this.handleLogin}>Test</Button></div>
					<Button onClick={this.handleGoogleLogin}>Google Login</Button>
				)}
			</div>
		);
	}
}

export default Auth;
