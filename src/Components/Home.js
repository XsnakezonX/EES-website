import React from "react";
import styled from "styled-components";

const LandingContainer = styled.section`
background-color: #d1d1d1;
height: 100vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;


const VideoContainer = styled.section`
background-color: #a2a2ab;
height: 150vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const MapContainer = styled.section`
background-color: #8f8fba;
height: 100vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const SponsorContainer = styled.section`
background-color: #4f4f66;
height: 100vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const SocialsContainer = styled.section`
background-color: #424263;
height: 100vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;

function Home() {
    return (
        <>
            <h1>Home Page</h1>
            
            <LandingContainer>
            <h1>Landing</h1>
            </LandingContainer>

            <VideoContainer>
            <h1>Video</h1>
            <video  autoPlay muted loop >
                <source src="CoverVideo.mp4" />
                This Browser does not support the video tag
                </video>
            </VideoContainer>

            <MapContainer>
            <h1>Map</h1>
            </MapContainer>

            <SponsorContainer> 
            <h1>Sponsors</h1>
            </SponsorContainer>

            <SocialsContainer>
            <h1>Socials</h1>
            </SocialsContainer>

           
        </>
    );
}

export default Home;