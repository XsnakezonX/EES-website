import React from "react";
import styled from "styled-components";
import Navbar from "./Nav/Navbar";
import RightNavbar from "./Nav/RightNavBar";

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
<<<<<<< HEAD
background-color: #00364D;
z-index: 0;
height: 100vh;
margin-bottom: 100px;
margin-top: 100px;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;

button {
    margin-top: 20px;
    padding: 16px 40px;
    border: 2px solid #fff;
    border-radius: 39px;
    background: none;
    color: #fff;
    font-size: 2rem;
    width: 525px;
    height: 75px;
    transition: background-color, color 0.3s ease-in;
}

button:hover {
    background-color: #fff;
    color: #00364D;
    cursor: pointer;
}
=======
	background-color: #00364d;
	height: 100vh;
	margin-bottom: 100px;
	margin-top: 100px;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
>>>>>>> c64c82955c9b593de36091bbee726f6eac0cdd4a
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
font-weight: 200;
font-size: 4rem;
line-height: 5.4rem;
z-index: 2;

div {
    background-color: #00628C;
    position: absolute;
    width: 32rem;
    height: 6rem;
    z-index: -1;
    margin-top: -190px;
    margin-left: 835px;
}
`;

const SectionText = styled.p`
color: white;
margin-top: -40px;
font-size: 1.5rem;
line-height: 1.8rem;
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

function Home() {
	return (
		<>

			<VideoContainer>
				{/* Muted promotional video that plays on render and loops */}
				
				<video autoPlay muted loop>
					<source src="CoverVideo.mp4" />
				</video>
			</VideoContainer>
			

			<ProjectsContainer>
				<SectionTitle>
					<h1>We Are Exeter Entrepreneurs</h1>
                    <div></div>
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
					<p>
						Exeter Entrepreneurs are proud to have an exciting,
						diverse range of events running throughout the
					</p>
					<p>
						year. Be sure to check out what’s coming up next as well
						as our past events here.Join the largest society on
						campus now, free.
					</p>
				</SectionText>

				<ProjectRow>
					<ProjectCard>
						<img
							src="/ProjectPlaceHolder.svg"
							alt="Project Thumbnail"
						/>
						<SectionText>
							<p>Project</p>
						</SectionText>
					</ProjectCard>

					<ProjectCard>
						<img
							src="/ProjectPlaceHolder.svg"
							alt="Project Thumbnail"
						/>
						<SectionText>
							<p>Project</p>
						</SectionText>
					</ProjectCard>
				</ProjectRow>

				<ProjectRow>
					<ProjectCard>
						<img
							src="/ProjectPlaceHolder.svg"
							alt="Project Thumbnail"
						/>
						<SectionText>
							<p>Project</p>
						</SectionText>
					</ProjectCard>

					<ProjectCard>
						<img
							src="/ProjectPlaceHolder.svg"
							alt="Project Thumbnail"
						/>
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
					<p>
						Every member, every event, every pizza slice is free
						because of these guys.
					</p>
				</SectionText>

				{/* clickable image Hyperlinks to sponsors websites */}

				<SponsorIcons>
					<a href="https://home.kpmg/uk/en/home.html" target="_blank">
						<img src="/KPMG.svg" alt="Partner logo" />
					</a>

					<a href="https://about.google/" target="_blank">
						Google
					</a>
					<a href="https://about.google/" target="_blank">
						GitHub
					</a>
					<a href="https://www.mozilla.org/en-US/" target="_blank">
						Mozilla
					</a>
					<a
						href="https://business-school.exeter.ac.uk/"
						target="_blank"
					>
						Exeter Business
					</a>
					<a href="https://www.marshmclennan.com/" target="_blank">
						Marsh and McLennan Companies{" "}
					</a>
					<a href="https://www.ashurst.com/" target="_blank">
						Ashurt
					</a>
					<a href="https://www.oaknorth.co.uk/" target="_blank">
						Oaknorth Bank
					</a>
					<a href="https://www.db.com/" target="_blank">
						Deutsche Bank
					</a>
					<a href="https://aws.amazon.com/" target="_blank">
						Amazon AWS
					</a>
					<a href="https://www.teachfirst.org.uk/" target="_blank">
						teach first
					</a>
					<a href="https://www.altitudeads.com/" target="_blank">
						altitude ads
					</a>
					<a href="https://www.billingbetter.co.uk/" target="_blank">
						billing better
					</a>
					<a href="https://deliveroo.co.uk/" target="_blank">
						deliveroo
					</a>
					<a href="https://www.buzzfeed.com/uk " target="_blank">
						buzzfeed
					</a>
					<a href="https://webwisemedia.co.uk/" target="_blank">
						web wise media
					</a>
				</SponsorIcons>
			</SponsorContainer>

			<MapContainer>
				<SectionTitle>
					<h1>Map</h1>
				</SectionTitle>
			</MapContainer>

			<SocialsContainer>
				<h1>Socials</h1>
			</SocialsContainer>
		</>
	);
}

export default Home;
