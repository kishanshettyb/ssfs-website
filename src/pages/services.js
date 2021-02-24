import React from "react";
import Header from "../components/Header";
import SmallBanner from "../components/SmallBanner";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import soft from "../images/slider/homekeeping.webp";
import pest from "../images/manpower/pestcontrol.jpg";
import cleaning from "../images/manpower/cleaning.jpg";
import hospitality from "../images/manpower/hospitality.jpg";
import security from "../images/manpower/security.jpg";

export default function services() {
	return (
		<div>
			<Header />
			<SmallBanner
				title="Services"
				desc="Our valuable services"
				bgclass="bg-image"
			/>

			<section className="section-padding">
				<Container>
					<Row>
						<Col md={6}>
							<div className="service-card shadow">
								<img alt="img" className="img-fluid" src={soft} />
								<h2 className="mt-3 mb-3">Soft Services</h2>
								<Row>
									<Col>
										<ul className="default-ul">
											<li>Housekeeping</li>
											<li>Landscaping</li>
											<li>Waste Management</li>
											<li>Laundry</li>
										</ul>
									</Col>
									<Col>
										<ul className="default-ul">
											<li>Pantry Services</li>
											<li>Guest House Management</li>
											<li>Warehouse Management</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Col>
						<Col md={6}>
							<div className="service-card shadow">
								<img alt="img" className="img-fluid" src={soft} />
								<h2 className="mt-3 mb-3">Deep Cleaning Services</h2>
								<Row>
									<Col>
										<ul className="default-ul">
											<li>Housekeeping</li>
											<li>Landscaping</li>
											<li>Waste Management</li>
											<li>Laundry</li>
										</ul>
									</Col>
									<Col>
										<ul className="default-ul">
											<li>Pantry Services</li>
											<li>Guest House Management</li>
											<li>Warehouse Management</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Col>
						<Col md={6}>
							<div className="service-card shadow">
								<img alt="img" className="img-fluid" src={pest} />
								<h2 className="mt-3 mb-3">Pest Management Services</h2>
								<Row>
									<Col>
										<ul className="default-ul">
											<li>General Disinfestation</li>
											<li>Rodent Control</li>
											<li>Fumigation</li>
											<li>Anti Larvae Treatment</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Col>
						<Col md={6}>
							<div className="service-card shadow">
								<img alt="img" className="img-fluid" src={cleaning} />
								<h2 className="mt-3 mb-3">Specialized Cleaning Services</h2>
								<Row>
									<Col>
										<ul className="default-ul">
											<li>Solution Based Services</li>
											<li>Floor Treatmentl</li>
											<li>Stone Care</li>
											<li>Carpet Shampooing</li>
										</ul>
									</Col>
									<Col>
										<ul className="default-ul">
											<li>Upholstery Shampooing</li>
											<li>Crystallization</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Col>
						<Col md={6}>
							<div className="service-card shadow">
								<img alt="img" className="img-fluid" src={hospitality} />
								<h2 className="mt-3 mb-3">Specialized Hospitality Services</h2>
								<Row>
									<Col>
										<ul className="default-ul">
											<li>General Disinfestation</li>
											<li>Rodent Control</li>
											<li>Fumigation</li>
											<li>Anti Larvae Treatment</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Col>
						<Col md={6}>
							<div className="service-card shadow">
								<img alt="img" className="img-fluid" src={security} />
								<h2 className="mt-3 mb-3">
									Security and Surveillance Solutions
								</h2>
								<Row>
									<Col>
										<ul className="default-ul">
											<li>CMan Guarding Services</li>
											<li>Electronic Security Solutions</li>
											<li>Cash Management and Logistics</li>
											<li>Mantech Solutions</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<Footer />
		</div>
	);
}
