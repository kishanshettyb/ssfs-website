import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function RegisterSection() {
	return (
		<section className="register-section">
			<Container>
				<Row>
					<Col className="text-center">
						<h2 className="title">Register As A Professional in minutes.</h2>
						<p>Get Your SSFS Acount Today!</p>
						<Button size="lg" variant="dark">
							Get Your Account
						</Button>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
