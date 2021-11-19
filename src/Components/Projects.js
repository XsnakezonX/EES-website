import React from "react";
import styled from "styled-components";

const ProjectCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-left: 50px;
	margin-right: 50px;
`;



const SectionText = styled.p`
color: white;
margin-top: -40px;
font-size: 2vw;
line-height: 1.8rem;
`;

const SectionContent = styled.p`
color: white;
margin-top: -40px;
font-size: 1.6vw;
line-height: 1.8rem;
`;

function Projects({projectTitle ,content}){
    return (
        <ProjectCard>
							
								<SectionText>
									<p>{projectTitle}</p>
								</SectionText>
								<SectionContent>
									<p>{content}</p>
								</SectionContent>
							</ProjectCard>
    )
}

export default Projects;