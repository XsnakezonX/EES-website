import React from "react";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import Projects from "./Projects";

const LandingContainer = styled.section`
	background-color: #002433;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const VideoContainer = styled.section`
background-color: #002433;
height: 95vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;


`;

const CallToActionContainer = styled.section`
	background-color: #002433;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProjectsContainer = styled.section`
background-color: #002433;
z-index: 0;

margin-bottom: 100px;
margin-top: 100px;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;

button {
    margin-top: 2.74vh;
    padding: 2.19vh 2.77vw;
    border: 2px solid #fff;
    border-radius: 39px;
    background: none;
    color: #fff;
    font-size: 2.22vw;
    width: 36.45vw;
    transition: background-color, color 0.3s ease-in;
}

button:hover {
    background-color: #fff;
    color: #00364D;
    cursor: pointer;
}
`;

const MapContainer = styled.section`
	background-image: url(/forum.png);
	height: 80vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const SponsorContainer = styled.section`
	background-color: #002433;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    margin-bottom: 15vh;
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
font-size: 3.8vw;
line-height: 5.4rem;
z-index: 2;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const SectionText = styled.p`
color: white;
margin-top: -40px;
font-size: 1.6vw;
line-height: 1.8rem;
`;

const SponsorIcons = styled.div`
	img {
		filter: brightness(40%);
		transition: 0.5s;
	}

	img:hover {
		filter: brightness(100%);
	}
`;

const SponsorsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px;

    .LogoSpacing{
        margin:25px;
    }

    
    @media screen and (max-width: 1300px) {
        
        .LogoSpacing{
            margin:10px;
        }
        
        img {
            
            width: 20vw;
            
            
        }
      }

    @media screen and (max-width: 1150px) {

        display: flex;
	    flex-direction: row;
	    justify-content: center;
        margin: 5px;

        .LogoSpacing{
            margin:10px;
        }
    }

    
     @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 10px;

        .LogoSpacing{
            margin:10px;
            width: 16vw;
        }
	}

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 10px;

		.LogoSpacing {
			margin: 10px;
			width: 20vw;
		}
	}

	@media screen and (max-width: 575px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 10px;

		.LogoSpacing {
			margin: 10px;
			width: 24vw;
		}
	}
`;

const ProjectRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

    @media screen and (max-width: 1230px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 10px;

        
        

`;

const ProjectCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-left: 50px;
	margin-right: 50px;

    @media screen and (max-width: 1300px) {
        img {
            
            width: 40vw;
            
            
        }
      }

`;

//Projects Section

const Banner = styled.div`

	margin-left: 200px;

`;


const BannerH1 = styled.h1`
	font-family: 'Ubuntu', sans-serif, bold ;
	font-style: bold;
	color: #62b22f;
	font-size: 70px;
`;

const BoxH1 = styled.h1`
	font-family: 'Ubuntu', sans-serif, bold ;
	font-style: bold;
	font-size: 2vw;
	color: #62b22f;
`;

const Boxp = styled.p`
	font-family: 'Raleway', sans-serif, bold ;
	font-style: bold;
	font-size: 1.5vw;
	color: #62b22f;
`;

const TreeContainer = styled.div`
margin-bottom: 16.4vh;
	
`;

const TreeImage = styled.img`
	height: 2036px;

	@media screen and (max-width: 992px) {
		display: none;
	  }
`;

const ViikotRight = styled.div` 
	display: flex;
    justify-content: center;
	width: 295px;
	margin-top: 0px;
	font-size: 20px;
	line-height: 175%;
	font-weight: 400;
	justify-content:center;
	${'' /* align-items:center; */}
	padding-right: 100px;

	@media screen and (max-width: 992px) {
		justify-content: center;
		padding-right: 0px;
	  }
`;

const Viikot = styled.div` 
    display:flex;
	width: 295px;
    margin-top: 0px;
    font-size: 20px;
    line-height: 175%;
    font-weight: 400;
	${'' /* align-items:center; */}
	justify-content:center;
	padding-left: 100px;
	
	@media screen and (max-width: 992px) {
		justify-content: center;
		padding-left: 0px;
	  }
`;

const Box = styled.div`
display: block;

-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
`;

const Structure = styled.div`
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	box-sizing: border-box;
	flex-direction: column;
`;


const Right = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-right: 120px;

	@media screen and (max-width: 992px) {
		justify-content: center;
		padding-right: 0px;
	  }
`;

const Left = styled.div`
	display: flex;
	padding-left: 120px;

	@media screen and (max-width: 992px) {
		justify-content: center;
		padding-left: 0px;
	  }
`;

const MapTitle = styled.div`
color: white;
margin-top: -40px;
font-size: 1.0rem;
line-height: 1.0rem;


`;

const MapSubTitle = styled.p`
color: white;
margin-top: -40px;
font-size: 1.0rem;
line-height: 1.0rem;

`;





function Home() {
    
	return (
		<> {/* Muted promotional video that plays on render and loops */}

			<VideoContainer>
				
				
				<video autoPlay muted loop playsInline>
					<source src="/Videos/CoverVideo.mp4" />
				</video>
			</VideoContainer>
			

			<ProjectsContainer className="container-fluid">
				<SectionTitle>
					<h1>We Are Exeter Entrepreneurs</h1>
				</SectionTitle>

				<SectionText>
					<p>Join the largest society on campus now, free.</p>
				</SectionText>

				<button>Join our community</button>
			</ProjectsContainer>

			<ProjectsContainer className="container-fluid">
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

				<ProjectRow className="row">
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

				<ProjectRow className="row">
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

			
			<Box className='container-fluid'>
				<Structure>
					<Left className='row'>
						<Viikot>
							<Projects projectTitle={'this is a title'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nulla eget egestas consequat, dolor metus facilisis mauris, et accumsan lorem purus vel quam. Donec molestie neque tincidunt, viverra diam et, lacinia enim.'}></Projects>
						</Viikot>
					</Left>
					<Right className='row'>
						<ViikotRight>
						<Projects projectTitle={'this is a title'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nulla eget egestas consequat, dolor metus facilisis mauris, et accumsan lorem purus vel quam. Donec molestie neque tincidunt, viverra diam et, lacinia enim.'}></Projects>
						</ViikotRight>
					</Right>
					<Left className='row'>
						<Viikot>
						<Projects projectTitle={'this is a title'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nulla eget egestas consequat, dolor metus facilisis mauris, et accumsan lorem purus vel quam. Donec molestie neque tincidunt, viverra diam et, lacinia enim.'}></Projects>
						</Viikot>
					</Left>
					<Right className='row'>
						<ViikotRight>
						<Projects projectTitle={'this is a title'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nulla eget egestas consequat, dolor metus facilisis mauris, et accumsan lorem purus vel quam. Donec molestie neque tincidunt, viverra diam et, lacinia enim.'}></Projects>
						</ViikotRight>
					</Right>
					<Left className='row'>
						<Viikot>
						<Projects projectTitle={'this is a title'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nulla eget egestas consequat, dolor metus facilisis mauris, et accumsan lorem purus vel quam. Donec molestie neque tincidunt, viverra diam et, lacinia enim.'}></Projects>
						</Viikot>
					</Left>
					<Right className='row'>
						<ViikotRight>
						<Projects projectTitle={'this is a title'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nulla eget egestas consequat, dolor metus facilisis mauris, et accumsan lorem purus vel quam. Donec molestie neque tincidunt, viverra diam et, lacinia enim.'}></Projects>
						</ViikotRight>
					</Right>
				</Structure>
			</Box>

			<SponsorContainer className="container-fluid">
				<SectionTitle className="row">
					<h1>Meet our Sponsors</h1>
				</SectionTitle>

				<SectionText className="row">
					<p>
						Every member, every event, every pizza slice is free
						because of these guys.
					</p>
				</SectionText>

				{/* clickable image Hyperlinks to sponsors websites */}

				<SponsorIcons>
                    <SponsorsRow className="row">
                        <a href="https://home.kpmg/uk/en/home.html" target="_blank">
                            <img src="/KPMG.svg" alt="Partner logo" className="LogoSpacing" />
                        </a>
                        <a href="https://about.google/" target="_blank">
                            <img src="/Google.svg" alt="Partner logo" className="LogoSpacing"/>
                        </a>
                        <a href="https://github.com/" target="_blank">
                            <img src="/GitHub.svg" alt="Partner logo" className="LogoSpacing" />
                        </a>
                        <a href="https://www.ashurst.com/" target="_blank">
                            <img src="/ashurst.svg" alt="Partner logo" className="LogoSpacing" />
                        </a>
                    </SponsorsRow>

                    <SponsorsRow className="row">
                        <a href="https://www.oaknorth.co.uk/" target="_blank">
                            <img src="/OakNorth.svg" alt="Partner logo" className="LogoSpacing" />
                        </a>
                        <a href="https://www.db.com/" target="_blank">
                            <img src="/DBank.svg" alt="Partner logo" className="LogoSpacing" />
                        </a>
                        <a href="https://aws.amazon.com/" target="_blank">
                            <img src="/AWS.svg" alt="Partner logo"  className="LogoSpacing"/>
                        </a>
                        <a href="https://www.teachfirst.org.uk/" target="_blank">
                            <img src="/TeachFirst.svg" alt="Partner logo" className="LogoSpacing" />
                        </a>
                    </SponsorsRow>

                    <SponsorsRow className="row">
                    <a href="https://www.buzzfeed.com/uk " target="_blank">
                        <img src="/BuzzFeed.svg" alt="Partner logo" className="LogoSpacing" />
					</a>
                    <a href="https://business-school.exeter.ac.uk/" target="_blank">
                         <img src="/Exeter.svg" alt="Partner logo" className="LogoSpacing" />
					</a>
                    <a href="https://deliveroo.co.uk/" target="_blank">
                        <img src="/accenture.svg" alt="Partner logo" className="LogoSpacing" />
					</a>
                    </SponsorsRow>
					{/* <a href="https://www.mozilla.org/en-US/" target="_blank">
						Mozilla
					</a>
					
					<a href="https://www.marshmclennan.com/" target="_blank">
						Marsh and McLennan Companies{" "}
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
					<a href="https://webwisemedia.co.uk/" target="_blank">
						web wise media
					</a> */}

				</SponsorIcons>
			</SponsorContainer>

                <MapContainer className="container-fluid">

                <MapTitle>
                    <h1>Location</h1>
                    <p>We are located at Exeter’s University Campus</p>
                </MapTitle>
               

              
                <iframe title = "map" src="https://snazzymaps.com/embed/353429" className="MapDimensions" ></iframe>
                

                </MapContainer>

			
		</>
	);
}

export default Home;
