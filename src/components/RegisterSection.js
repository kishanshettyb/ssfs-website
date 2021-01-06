import { Link } from "gatsby";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function RegisterSection(props) {
	const style = {
		background: props.background,
	};
	return (
		<section className="register-section" style={style}>
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
					</Col>
				</Row>
			</Container>
		</section>
	);
}
