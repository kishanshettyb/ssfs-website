// import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";
// import { Container, Row, Col } from "react-bootstrap";

// export default function Products() {
// 	const data = useStaticQuery(graphql`
// 		query product {
// 			allWcProductsCategories {
// 				edges {
// 					node {
// 						id
// 						wordpress_id
// 					}
// 				}
// 			}
// 		}
// 	`);
// 	return (
// 		<div className="client-area">
// 			<Container className="clients-card ">
// 				<div className="client-inner shadow-lg">
// 					<Row className="justify-content-md-center">
// 						{data.product.nodes.map((images) => (
// 							<Col key={images.id} className="col-md-2   my-auto" md={2}>
// 								<div className="m-3">
// 									<Img
// 										key={images.id}
// 										fluid={images.childImageSharp.fluid}
// 										alt="banner-1"
// 										className="client-logos"
// 									/>
// 								</div>
// 							</Col>
// 						))}
// 					</Row>
// 				</div>
// 			</Container>
// 		</div>
// 	);
// }
import React from "react";

export default function Products() {
	return <div>products</div>;
}
