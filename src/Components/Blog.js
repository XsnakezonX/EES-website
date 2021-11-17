import React from "react";
import styled from "styled-components";

const ArticleContainer = styled.section`
	background-color: #9357b5;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function Blog() {
	return (
		<>
			<h1>Blog page</h1>
			<p>Sub</p>

			<ArticleContainer>
				<h1>Articles</h1>
			</ArticleContainer>
		</>
	);
}

export default Blog;
