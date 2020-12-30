import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import circle from "../assets/img/circle.png";
import whyus from "../assets/img/img-1.png";
export default function WhyUs() {
	return (
		<section className="section-padding">
			<Container>
				<Row>
					<Col md={12} lg={6}>
						<h2 className="title">Why Smart SolutionFacilty Service?</h2>
						<div className="bar"></div>
					</Col>
					<Col md={12} lg={6}>
						<img className="img-fluid why-us-img" src={whyus} alt="SSFS" />
						<div className="circle-rotate text-center">
							<img className="img-fluid" src={circle} alt="SSFS" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
