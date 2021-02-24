import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AddressIcons from "../components/AddressIcons";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RegisterSection from "../components/RegisterSection";
import SectionHeader from "../components/SectionHeader";
import SmallBanner from "../components/SmallBanner";

const contact = () => {
	return (
		<div>
			<Header />
			<SmallBanner
				title="Contact"
				desc="If you have an idea, we would love to hear about it."
				bgclass="bg-image"
			/>
			<section className="section-padding bg-light">
				<SectionHeader
					className="mb-5"
					title="Drop us message for any query"
					// desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<Container className="pt-5">
					<Row className="pt-3">
						<Col xs={12} sm={12} md={5}>
							<AddressIcons />
						</Col>
						<Col xs={12} sm={12} md={7}>
							<Form>
								<Row>
									<Col md={6}>
										<Form.Group controlId="formBasicEmail">
											<Form.Label>Name</Form.Label>
											<Form.Control size="lg" type="text" />
										</Form.Group>
									</Col>
									<Col md={6}>
										<Form.Group controlId="formBasicEmail">
											<Form.Label>Email</Form.Label>
											<Form.Control size="lg" type="email" />
										</Form.Group>
									</Col>
									<Col md={6}>
										<Form.Group controlId="formBasicEmail">
											<Form.Label>Phone</Form.Label>
											<Form.Control size="lg" type="text" />
										</Form.Group>
									</Col>
									<Col md={6}>
										<Form.Group controlId="formBasicEmail">
											<Form.Label>Subject</Form.Label>
											<Form.Control size="lg" type="text" />
										</Form.Group>
									</Col>

									<Col md={12}>
										<Form.Group controlId="exampleForm.ControlTextarea1">
											<Form.Label>Example textarea</Form.Label>
											<Form.Control size="lg" as="textarea" rows={3} />
										</Form.Group>
									</Col>

									<Col md={12}>
										<Button size="lg" variant="dark" type="submit">
											Send Message
										</Button>
									</Col>
								</Row>
							</Form>
						</Col>
					</Row>
				</Container>
			</section>
			<RegisterSection
				title="Register As A Professional in minutes."
				tagline="Get Your SSFS Acount Today!"
				btnName="Get Your Account"
				link="/registration/"
				background="linear-gradient(90deg,#ee0979,#ff6a00)"
			/>
			<Footer />
		</div>
	);
};

export default contact;
