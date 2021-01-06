import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import circle from "../assets/img/circle.png";
import googlePlay from "../assets/icons/google-play-brands.svg";
import apple from "../assets/icons/apple-brands.svg";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function AppSection() {
	const data = useStaticQuery(graphql`
		query AppQuery {
			image: file(relativePath: { eq: "mobile-app.png" }) {
				id
				childImageSharp {
					fixed(height: 400) {
						...GatsbyImageSharpFixed
					}
				}
			}
			imageSecond: file(relativePath: { eq: "mobile-app-1.png" }) {
				id
				childImageSharp {
					fixed(height: 400) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);
	return (
		<section className="app-section section-padding">
			<Container>
				<Row className="d-flex align-items-center">
					<Col md={6} className="text-center">
						<Img
							className="mobile-phone first-mobile"
							alt="App"
							fixed={data.image.childImageSharp.fixed}
						/>
						<Img
							className="mobile-phone second-mobile"
							fixed={data.imageSecond.childImageSharp.fixed}
							alt="App"
						/>
						<div className="circle-rotate text-center">
							<img className="img-fluid circle-img" src={circle} alt="SSFS" />
						</div>
					</Col>
					<Col>
						<h2 className="title">
							You can find all the thing you need to payout
						</h2>
						<div className="bar"></div>
						<p>
							Esse mollit velit culpa ea qui proident sint reprehenderit commodo
							nulla aliquip dolor laborum aliquip. Ex adipisicing nulla eiusmod
							eu. Dolore minim laborum adipisicing fugiat minim mollit sunt
							Lorem deserunt aliquip duis adipisicing. Sint sit adipisicing esse
							ut consequat.
						</p>
						<Row className="mt-5">
							<Col md={12} className="text-center">
								<h2 className="small-title">Coming Soon...</h2>
							</Col>
							<Col md={2}></Col>
							<Col md={4}>
								<div className="d-flex align-items-center shadow-lg download-btns-row bg-red">
									<div>
										<img className="btn-icon" src={apple} alt="App Store" />
									</div>
									<div>
										<p>Download On</p>
										<h3>App Store</h3>
									</div>
								</div>
							</Col>
							<Col md={4}>
								<div className="d-flex align-items-center ml-4  shadow-lg download-btns-row bg-green">
									<div>
										<img
											className="btn-icon"
											src={googlePlay}
											alt="Google Play"
										/>
									</div>
									<div>
										<p>Download On</p>
										<h3>Google Play</h3>
									</div>
								</div>
							</Col>
							<Col md={2}></Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
