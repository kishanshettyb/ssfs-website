import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import profile from "../images/slider/cleaning.png";
import FontAwesome from "react-fontawesome";

export default function Team() {
	return (
		<Container className="our-team mt-5">
			<Row>
				<Col md={6} xl={3} lg={3} sm={12} xs={12} className="mb-4">
					<div className="our-team-card shadow-sm">
						<img className="profile mb-3" src={profile} alt="team" />
						<h2 className="small-title">John</h2>
						<p>Founder & CEO</p>
						<ul>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="facebook"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="linkedin"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="twitter"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="envelope"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
						</ul>
					</div>
				</Col>
				<Col md={6} xl={3} lg={3} sm={12} xs={12} className="mb-4">
					<div className="our-team-card shadow-sm">
						<img className="profile mb-3" src={profile} alt="team" />
						<h2 className="small-title">John</h2>
						<p>Founder & CEO</p>
						<ul>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="facebook"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="linkedin"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="twitter"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="envelope"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
						</ul>
					</div>
				</Col>
				<Col md={6} xl={3} lg={3} sm={12} xs={12} className="mb-4">
					<div className="our-team-card shadow-sm">
						<img className="profile mb-3" src={profile} alt="team" />
						<h2 className="small-title">John</h2>
						<p>Founder & CEO</p>
						<ul>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="facebook"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="linkedin"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="twitter"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="envelope"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
						</ul>
					</div>
				</Col>
				<Col md={6} xl={3} lg={3} sm={12} xs={12} className="mb-4">
					<div className="our-team-card shadow-sm">
						<img className="profile mb-3" src={profile} alt="team" />
						<h2 className="small-title">John</h2>
						<p>Founder & CEO</p>
						<ul>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="facebook"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="linkedin"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="twitter"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
							<li>
								<Link to="/about/">
									<FontAwesome
										className="super-crazy-colors"
										name="envelope"
										style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
									/>
								</Link>
							</li>
						</ul>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
