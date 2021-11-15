import React from "react";
import styled from "styled-components";

const ArticleContainer = styled.section`
background-color: #d1d1d1;
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
           <h1>Blog</h1>
           <p>Sub</p>
        </>
    );
}

export default Blog;