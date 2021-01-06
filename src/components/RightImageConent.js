import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function RightImageConent(props) {
	const data = useStaticQuery(graphql`
		query ContentQuery {
			image: file(relativePath: { eq: "img-1.png" }) {
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
		<Container>
			<Row>
				<Col md={6}>
					<p className="special-small-title">{props.specialTitle}</p>
					<h2 className="title">{props.title}</h2>
					<p>{props.content}</p>
				</Col>
				<Col>
					<Img fluid={data.image.childImageSharp.fluid} />
				</Col>
			</Row>
		</Container>
	);
}
