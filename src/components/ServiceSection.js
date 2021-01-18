import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function ServiceSection(props) {
	const data = useStaticQuery(graphql`
		query PlumbingServices {
			allPlumberJson {
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
		<section className="section-padding service-section bg-white">
			<Container>
				<div className="text-center">
					<h2 className="title text-center  mt-0">{props.title}</h2>
					<p className="mb-5">{props.tagline}</p>
				</div>
				<Row>
					{data.allPlumberJson.edges.map((image) => (
						<Col md={3} key={image.node.id}>
							<Img
								key={image.node.id}
								fluid={image.node.imageName.childImageSharp.fluid}
								alt="banner-1"
								className="shadow-sm"
							/>
							<h2 className="small-title mt-4 mb-0">{image.node.title}</h2>
							<p>{image.node.desc}</p>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
}
