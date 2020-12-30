import * as React from "react";
import { Link } from "gatsby";

// markup
const IndexPage = () => {
	return (
		<div>
			Hello
			<div>
				<Link to="/theme/">Themes</Link>
				<i data-feather="circle"></i>
				<i data-feather="eye"></i>
				<i data-feather="heart"></i>
				<i data-feather="feather"></i>
			</div>
		</div>
	);
};

export default IndexPage;
