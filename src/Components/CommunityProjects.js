import React from "react";
import styled from "styled-components";

const CommunityContainer = styled.section`
background-color: #d1d1d1;
height: 100vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProjectsContainer = styled.section`
background-color: #d1d1d1;
height: 100vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;


function CommunityProjects() {
    return (
        <>
           <h1>Community Projects Page</h1>

           <ProjectsContainer>
            <h1>Projects</h1>
            </ProjectsContainer>

            <CommunityContainer>
            <h1>Community</h1>
            </CommunityContainer>

        </>
    );
}

export default CommunityProjects;