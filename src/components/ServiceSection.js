import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function ServiceSection(props) {
	const numbers = props.services;
	const listItems = numbers.map((number) => (
		<Col md={3} className="text-center">
			<img
				className="shadow-sm"
				src={require("../images/plumbing/" + number.image)}
				alt={number.title}
			/>
			<h2 className="small-title mt-4 mb-0">{number.title}</h2>
			<p>{number.desc}</p>
		</Col>
	));

	return (
		<section className="section-padding service-section">
			<Container>
				<div className="text-center">
					<h2 className="title text-center  mt-0">{props.title}</h2>
					<p className="mb-5">{props.tagline}</p>
				</div>
				<Row>{listItems}</Row>
			</Container>
		</section>
	);
}
