import React from "react";
import profile from "../images/plumbing/img-1.jpg";
import star from "../assets/icons/star-solid.svg";
import google from "../assets/icons/google.png";
import { Row, Col, Container } from "react-bootstrap";
import SectionHeader from "./SectionHeader";

export default function Reviews() {
	return (
		<section className="section-padding bg-light-gray">
			<Container>
				<SectionHeader
					title="Testimonial"
					desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu"
				/>
				<Row className="mt-5">
					<Col sm={6} lg={3} xl={3} md={4}>
						<div className="review-card text-center">
							<img className="avatar-big" src={profile} alt="profile" />
							<h2 className="small-title">User</h2>
							<div>
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
							</div>
							<p>
								During the Lockdown period, you have given great support in the
								best possible way. Thanks for your efforts. Appreciate it!
							</p>
							<img
								className="google-icon avatar"
								src={google}
								alt="Google Review"
							/>{" "}
							1 Week ago
						</div>
					</Col>
					<Col sm={6} lg={3} xl={3} md={4}>
						<div className="review-card text-center">
							<img className="avatar-big" src={profile} alt="profile" />
							<h2 className="small-title">User</h2>
							<div>
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
							</div>
							<p>
								Smart Solution Facility Service commenced operations in 2012 by
								providing House Keeping Services to its clients.
							</p>
							<img
								className="google-icon avatar"
								src={google}
								alt="Google Review"
							/>{" "}
							1 Week ago
						</div>
					</Col>
					<Col sm={6} lg={3} xl={3} md={4}>
						<div className="review-card text-center">
							<img className="avatar-big" src={profile} alt="profile" />
							<h2 className="small-title">User</h2>
							<div>
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
							</div>
							<p>
								Smart Solution Facility Service commenced operations in 2012 by
								providing House Keeping Services to its clients.
							</p>
							<img
								className="google-icon avatar"
								src={google}
								alt="Google Review"
							/>{" "}
							1 Week ago
						</div>
					</Col>
					<Col sm={6} lg={3} xl={3} md={4}>
						<div className="review-card text-center">
							<img className="avatar-big" src={profile} alt="profile" />
							<h2 className="small-title">User</h2>
							<div>
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
								<img alt="star" className="star-icon" src={star} />
							</div>
							<p>
								Smart Solution Facility Service commenced operations in 2012 by
								providing House Keeping Services to its clients.
							</p>
							<img
								className="google-icon avatar"
								src={google}
								alt="Google Review"
							/>{" "}
							1 Week ago
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
