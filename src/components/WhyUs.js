import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import circle from "../assets/img/circle.png";
import whyus from "../assets/img/img-1.png";
import proffesional from "../assets/icons/professional.svg";
import support from "../assets/icons/support.svg";
import service from "../assets/icons/customer-service.svg";
import maintenance from "../assets/icons/maintenance.svg";

export default function WhyUs() {
	return (
		<section className="section-padding">
			<Container>
				<Row>
					<Col md={12} lg={6}>
						<h2 className="title">Why Smart SolutionFacilty Service?</h2>
						<div className="bar"></div>
						<p>
							The Head of our company is a highly successful professional with
							vast experience of service and corporate functioning. He has more
							than 16 years of experience in various disciplines of other
							facility services.
						</p>

						<ul className="why-us-key-points">
							<li>
								<div className="div  align-items-center ">
									<div>
										<img src={proffesional} alt="Verified Professionals" />
									</div>
									<div>
										<h5 className="small-title">Verified Proffessionals</h5>
										<p>
											The Head of our company is a highly successful
											professional with
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className="div  align-items-center ">
									<div>
										<img src={support} alt="Insured Work" />
									</div>
									<div>
										<h5 className="small-title">Insured Work</h5>
										<p>
											The Head of our company is a highly successful
											professional with
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className="div  align-items-center ">
									<div>
										<img src={maintenance} alt="Insured Work" />
									</div>
									<div>
										<h5 className="small-title">Fully Equiped</h5>
										<p>
											The Head of our company is a highly successful
											professional with
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className="div  align-items-center ">
									<div>
										<img src={service} alt="Insured Work" />
									</div>
									<div>
										<h5 className="small-title">Professional Support</h5>
										<p>
											The Head of our company is a highly successful
											professional with
										</p>
									</div>
								</div>
							</li>
						</ul>
					</Col>
					<Col md={12} lg={6}>
						<img className="img-fluid why-us-img" src={whyus} alt="SSFS" />
						<div className="circle-rotate text-center">
							<img className="img-fluid circle-img" src={circle} alt="SSFS" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
