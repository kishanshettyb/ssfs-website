import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// images
import garden from "../assets/icons/growth.svg";
import housekeeping from "../assets/icons/household.svg";
import plumbing from "../assets/icons/pipeline.svg";
import electrician from "../assets/icons/electrician.svg";
import manpower from "../assets/icons/team.svg";
import tank from "../assets/icons/tank.svg";

export default function SliderCard() {
	return (
		<Container className="slider-card shadow-lg br-10">
			<Row>
				<Col md={4} className="services text-center pb-3">
					<div className="service-icon">
						<img src={housekeeping} alt="Gadening" />
					</div>
					<h5>Housekeeping</h5>
				</Col>
				<Col md={4} className="services pb-3">
					<div className="service-icon">
						<img src={garden} alt="Gardening" />
					</div>
					<h5>Gardening</h5>
				</Col>
				<Col md={4} className="services pb-3">
					<div className="service-icon">
						<img src={plumbing} alt="Plumbing" />
					</div>
					<h5>Plumbing</h5>
				</Col>
				<Col md={4} className="services">
					<div className="service-icon">
						<img src={electrician} alt="Electricians" />
					</div>
					<h5>Electricians</h5>
				</Col>
				<Col md={4} className="services">
					<div className="service-icon">
						<img src={manpower} alt="Manpower" />
					</div>
					<h5>Manpower</h5>
				</Col>
				<Col md={4} className="services">
					<div className="service-icon">
						<img src={tank} alt="STP/Sump Tank Cleaning" />
					</div>
					<h5>STP/Sump Tank Cleaning</h5>
				</Col>
			</Row>
		</Container>
	);
}
