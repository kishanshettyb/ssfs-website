import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import circle from "../assets/img/circle.png";

export default function RightImageConent(props) {
	const data = useStaticQuery(graphql`
		query ContentQuery {
			images: file(relativePath: { eq: "about-us.png" }) {
				id
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<section className="section-padding">
			<Container>
				<Row className="d-flex align-items-center">
					<Col md={6}>
						<p className="special-small-title">{props.specialTitle}</p>
						<h2 className="title">{props.title}</h2>
						<p className="section-content">{props.content}</p>
					</Col>
					<Col md={1}></Col>
					<Col md={5}>
						<Img fluid={data.images.childImageSharp.fluid} />
						<div className="circle-rotate text-center">
							<img className="img-fluid circle-img" src={circle} alt="SSFS" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
