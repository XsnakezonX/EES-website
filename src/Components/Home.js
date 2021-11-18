import React from "react";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import styled from "styled-components";


const LandingContainer = styled.section`
	background-color: #00364d;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const VideoContainer = styled.section`
	background-color: #00364d;
	height: 95vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const CallToActionContainer = styled.section`
	background-color: #00364d;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProjectsContainer = styled.section`
	background-color: #00364d;
	height: 100vh;
	margin-bottom: 100px;
	margin-top: 100px;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const MapContainer = styled.section`
	background-color: #00364d;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const SponsorContainer = styled.section`
	background-color: #00364d;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const SocialsContainer = styled.section``;

const LandingTitle = styled.h1`
	color: white;
	font-weight: 700;
	font-size: 72px;
	line-height: 86px;
`;

const SectionTitle = styled.h1`
	color: white;
	font-weight: 700;
	font-size: 72px;
	line-height: 86px;
`;

const SectionText = styled.p`
	color: white;
	font-size: 20px;
	line-height: 86px;
`;

const SponsorIcons = styled.div`
	img {
		filter: brightness(65%);
		transition: 0.5s;
	}

	img:hover {
		filter: brightness(100%);
	}
`;

const ProjectRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const ProjectCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-left: 50px;
	margin-right: 50px;
`;

const Styles = styled.div`

    {
        background-color: #F8F8F8;        
    }

    .row {
        min-height: 64vh;        
    }

    .card {
        width: 12rem;
        position: relative;
        top: 25vh;
        left: 15vh;
        border: 0;
        border-radius: 0;
    }

    .card-title {
        position: absolute;
        font-size: 3.5rem;
        right: 0.75rem;
        bottom: 2rem;
    }

    .card-text {
        padding-top: 1rem;
        font-size: 0.75rem;
    }
    
`;


function Home() {
    return (
        <>
            
            <h1>Home Page</h1>
            
            <LandingContainer>

                 <LandingTitle>
                    <h1>Totally Free</h1>
                    <h1>Always Innovating.</h1>
                </LandingTitle>

            </LandingContainer>

            <VideoContainer>

                {/* Muted promotional video that plays on render and loops */}

                <h1>Video</h1>
                <video  autoPlay muted loop >
                    <source src="/Videos/CoverVideo.mp4" />
                    This Browser does not support the video tag
                </video>

            </VideoContainer>

            <ProjectsContainer>

                <SectionTitle>
                    <h1>We Are Exeter Entrepreneurs</h1>
                </SectionTitle>

                <SectionText>
                    <p>Join the largest society on campus now, free.</p>
                </SectionText>

                    <button>Join our community</button>
                

            </ProjectsContainer>

            <ProjectsContainer>

                <SectionTitle>
                    <h1>Our Community Projects</h1>
                </SectionTitle>

                <SectionText>
                    <p>Exeter Entrepreneurs are proud to have an exciting, diverse range of events running throughout the</p>   
                    <p>year. Be sure to check out what’s coming up next as well as our past events here.Join the largest society on campus now, free.</p>
                </SectionText>

                <ProjectRow>
                    <ProjectCard>
                        <img src="/ProjectPlaceHolder.svg" alt="Project Thumbnail" />
                        <SectionText>
                            <p>Project</p> 
                        </SectionText>
                    </ProjectCard>

                    <ProjectCard>
                        <img src="/ProjectPlaceHolder.svg" alt="Project Thumbnail" />
                        <SectionText>
                            <p>Project</p> 
                        </SectionText>
                    </ProjectCard>
                </ProjectRow>

                <ProjectRow>
                    <ProjectCard>
                        <img src="/ProjectPlaceHolder.svg" alt="Project Thumbnail" />
                        <SectionText>
                            <p>Project</p> 
                        </SectionText>
                    </ProjectCard>

                    <ProjectCard>
                        <img src="/ProjectPlaceHolder.svg" alt="Project Thumbnail" />
                        <SectionText>
                            <p>Project</p> 
                        </SectionText>
                    </ProjectCard>
                </ProjectRow>

            </ProjectsContainer>
           

            <SponsorContainer> 

                <SectionTitle>
                    <h1>Meet our Sponsors</h1>
                </SectionTitle>
                
                <SectionText>
                    <p>Every member, every event, every pizza slice is free because of these guys.</p>
                </SectionText>


                {/* clickable image Hyperlinks to sponsors websites */}

                
                <SponsorIcons> 
                        <a href="https://home.kpmg/uk/en/home.html" target="_blank">
                            <img src="/KPMG.svg" alt="Partner logo" />
                        </a>
                    
                
                <a href="https://about.google/" target="_blank">Google</a>
                <a href="https://about.google/" target="_blank">GitHub</a>
                <a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla</a>
                <a href="https://business-school.exeter.ac.uk/" target="_blank">Exeter Business</a>
                <a href="https://www.marshmclennan.com/" target="_blank">Marsh and McLennan Companies </a>
                <a href="https://www.ashurst.com/" target="_blank">Ashurt</a>
                <a href="https://www.oaknorth.co.uk/" target="_blank">Oaknorth Bank</a>
                <a href="https://www.db.com/" target="_blank">Deutsche Bank</a>
                <a href="https://aws.amazon.com/" target="_blank">Amazon AWS</a>
                <a href="https://www.teachfirst.org.uk/" target="_blank">teach first</a>
                <a href="https://www.altitudeads.com/" target="_blank">altitude ads</a>
                <a href="https://www.billingbetter.co.uk/" target="_blank">billing better</a>
                <a href="https://deliveroo.co.uk/" target="_blank">deliveroo</a>
                <a href="https://www.buzzfeed.com/uk " target="_blank">buzzfeed</a>
                <a href="https://webwisemedia.co.uk/" target="_blank">web wise media</a>

                </SponsorIcons>
            </SponsorContainer>

            <MapContainer>

                <SectionTitle>
                    <h1>Map</h1>
                </SectionTitle>
            <Styles>
            
            <Row className="blue-background">
               <iframe title = "map" src="https://snazzymaps.com/embed/353429" width="900px" height="300px" ></iframe>
            </Row>
        </Styles>

            </MapContainer>
            

           
        </>
    );
}

export default Home;
