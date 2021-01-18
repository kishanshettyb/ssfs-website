import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Col, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function ManPowerServiceSection(props) {
	var settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		infinate: false,
		pauseOnHover: false,
		swipe: true,
		swipeToSlide: true,
	};
	const data = useStaticQuery(graphql`
		query ManpowerServices {
			allManpowerJson {
				edges {
					node {
						id
						title
						desc
						imageName {
							childImageSharp {
								fluid(quality: 100) {
									originalName
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
					}
				}
			}
		}
	`);
	return (
		<section className="section-padding service-section">
			<Container>
				<div className="text-center">
					<h2 className="title text-center  mt-0">{props.title}</h2>
					<p className="mb-5">{props.tagline}</p>
				</div>
				<Slider {...settings}>
					{data.allManpowerJson.edges.map(function (image) {
						return (
							<Row>
								<Col>
									<div md={3} key={image.id}>
										<Img
											key={image.node.id}
											fluid={image.node.imageName.childImageSharp.fluid}
											alt="banner-1"
											className="shadow-sm slick-img-height"
										/>
										<h2 className="small-title mt-4 mb-0">
											{image.node.title}
										</h2>
										<p>{image.node.desc}</p>
									</div>
								</Col>
							</Row>
						);
					})}
				</Slider>
			</Container>
		</section>
	);
}
