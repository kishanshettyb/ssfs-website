import { Link } from "gatsby";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function RegisterSection(props) {
	const style = {
		background: props.background,
	};
	return (
		<section className="register-section bg-light-gray" style={style}>
			<Container>
				<Row>
					<Col className="text-center">
						<h2 className="title">{props.title}</h2>
						<p>{props.tagline}</p>
						<Link to={props.link}>
							<Button size="lg" variant="dark">
								{props.btnName}
							</Button>
						</Link>
						<h2 className="small-title text-white mt-5">
							{props.extraHeading}
						</h2>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
