import React from "react";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import Navbar from "./Nav/Navbar";
import Footer from "./Nav/Footer"
import Projects from "./Projects";
import Fade from 'react-reveal/Fade';
import { fadeOutEnabled } from "react-reveal/globals";

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
align-items: flex-start;
justify-content: flex-start;

@media screen and (max-width: 1300px) {
align-items: flex-start;
justify-content: flex-start;
min-height: 40vw;
height: auto;
}

@media screen and (max-width: 1130px) {
align-items: flex-start;
justify-content: flex-start;

height: auto;
}


@media screen and (max-width: 750px) {

	
	height: auto;
	}

@media screen and (max-width: 600px) {


height: auto;
}

@media screen and (max-width: 490px) {


height: auto;
}
	
	`;

const OffSetContainer = styled.section`
background-color: #002433;
height: 25vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 1300px) {

height: 15vh;

}

@media screen and (max-width: 1000px) {

height: 13vh;

}

@media screen and (max-width: 850px) {

height: 10vh;

}

@media screen and (max-width: 750px) {

height: 7vh;

}


@media screen and (max-width: 400px) {

	height: 3vh;

}


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
    padding: 2vh 2.77vw;
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
	width: 100%;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	

	iframe{
		position: absolute;
		margin-top: 250px;
	}

	@media screen and (max-width: 1130px) {


		iframe{
		position: static;
		margin-top: 0;
		
	}
  }

  @media screen and (max-height: 400px) {


		iframe{
		position: absolute;
		margin-top: 225px;

		}
	}
	
	@media screen and (max-height: 400px) {


		iframe{
		position: absolute;
		margin-top: 200px;

		}
	}



	@media screen and (max-height: 750px) {
		background-image: url(/forum.png);
		height: 900px;
		
		display: flex !important;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}
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

	@media screen and (max-height: 750px) {
		background-color: #002433;
		height: auto;
		background-size: cover;
		display: flex !important;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 15vh;
		
	}

	@media screen and (max-width: 992px) {
        height: auto;
	}
`;


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
line-height: 1rem;
z-index: 2;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
text-shadow: 0 0 6px #fff;

.flickerText {
  		animation: flicker 5s 0.3s infinite;
	}

	@keyframes flicker {
		from {
			opacity: 1;
		}

		4% {
			opacity: 0.83;
		}

		6% {
			opacity: 0.65;
		}

		8% {
			opacity: 0.2;
		}

		10% {
			opacity: 0.9;
		}

		11% {
			opacity: 0.922;
		}

		12% {
			opacity: 0.77;
		}

		14% {
			opacity: 0.75;
		}

		16% {
			opacity: 0.5;
		}

		17% {
			opacity: 0.98;
		}

		19% {
			opacity: 0.93;
		}

		20% {
			opacity: 0.99;
		}

		24% {
			opacity: 1;
		}

		26% {
			opacity: 0.94;
		}

		28% {
			opacity: 0.98;
		}

		37% {
			opacity: 0.93;
		}

		38% {
			opacity: 0.5;
		}

		39% {
			opacity: 0.96;
		}

		42% {
			opacity: 1;
		}

		44% {
			opacity: 0.97;
		}

		46% {
			opacity: 0.94;
		}

		56% {
			opacity: 0.9;
		}

		58% {
			opacity: 0.9;
		}

		60% {
			opacity: 0.99;
		}

		68% {
			opacity: 1;
		}

		70% {
			opacity: 0.9;
		}

		72% {
			opacity: 0.95;
		}

		93% {
			opacity: 0.93;
		}

		95% {
			opacity: 0.95;
		}

		97% {
			opacity: 0.93;
		}

		to {
			opacity: 1;
		}
	}

`;

const SectionText = styled.p`
color: white;
margin-top: -60px;
margin-right: 12vw;
margin-left: 12vw;
margin-bottom: 80px;
font-size: 1.4vw;
text-align: center;

@media screen and (max-width: 850px) {
	font-size: 14px;
	margin-top: -30px;
	margin-bottom: 50px;
}

`;

const ProjectTitle = styled.p`
color: white;
margin-top: 10px;
font-size: 2vw;
line-height: 1.8rem;
margin-bottom: 1vw;
p{
	margin-bottom: 0;
}

@media screen and (max-width: 1300px) {
	font-size: 4.8vw;
	line-height: 2vw;
      }

	 

`;

const ProjectText = styled.p`
color: white;
margin-top: 2px;
font-size: 1.2vw;
line-height: 1.8rem;


p{
	margin: 0;
}
@media screen and (max-width: 1300px) {
	line-height: 3rem;
	font-size: 3vw;
      }

	  @media screen and (max-width: 800px) {
		line-height: 2.5rem;
		font-size: 3vw;
  }

	  @media screen and (max-width: 600px) {
		line-height: 2rem;
		font-size: 3vw;
  }


	  @media screen and (max-width: 405px) {
		line-height: 1.3rem;
		font-size: 3vw;
  }


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
            width: 45vw;
        }
	}

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 10px;

		.LogoSpacing {
			margin: 10px;
			width: 50vw;
		}

		
	}

	@media screen and (max-width: 575px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 10px;

		.LogoSpacing {
			margin: 5vw;
			width: 60vw;
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

	}
        

`;

const ProjectCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-left: 50px;
	margin-right: 50px;
	width: 523px;

    @media screen and (max-width: 1300px) {
		justify-content: center;
		align-content: center;
		width: 500px;
        img {
            
            width: 40vw;
            
            
        }
      }

	  @media screen and (max-width: 1230px) {
		width: 75vw;


		img {
            
            width: 75vw;
            
            
        }
		
      }

	  @media screen and (max-width: 1210px) {
		width: 80vw;
		margin-left: 0;
		margin-right: 0;

		img {
            
            width: 80vw;
            
            
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
margin-top: -450px;
font-size: 1.5rem;
line-height: 1.0rem;
margin-right: 37.5vw;


@media screen and (max-width: 1130px) {
	margin-right: 0;
	margin-top: -40px;
  }

  @media screen and (max-width: 405px) {
	font-size: 1.2rem;
	line-height: 1.0rem;
	text-align: center;
  }

  @media screen and (max-width: 350px) {
	font-size: 1.2rem;
	line-height: 1.0rem;
	margin-right: 0;
  }


`;









function Home() {
    
	return (
		<> {/* Muted promotional video that plays on render and loops */}

		<Navbar/>

			<VideoContainer>
				
				
				<video autoPlay muted loop playsInline>
					<source src="/Videos/CoverVideo.mp4" />
				</video>
			</VideoContainer>
			

			<ProjectsContainer className="container-fluid">
				<SectionTitle>
					<h1 className="flickerText">We Are Exeter Entrepreneurs</h1>
				</SectionTitle>

				<SectionText>
					<p>Join the largest society on campus now, free.</p>
				</SectionText>

				<a href="https://www.exeterguild.org/societies/exeterentrepreneurs/" target="_blank">
					<Button>Join our community</Button>
				</a>
			</ProjectsContainer>

			<ProjectsContainer className="container-fluid">
				<SectionTitle>
					<h1 className="flickerText">Our Community Projects</h1>
				</SectionTitle>

				<SectionText>
					<p>
						Exeter Entrepreneurs are proud to have an exciting,
						diverse range of events running throughout the year. 
						Be sure to check out what’s coming up next as well
						as our past events here. Join the largest society on
						campus now, free.
					</p>
				</SectionText>

				
				<ProjectRow className="row">
					<ProjectCard>
						<a href="http://maxbeech.com/exeterentrepreneurs/excode-content/" target="_blank">
							<img
								src="/ExcodeProject.jpg"
								alt="Project Thumbnail"
							/>
						</a>
						<ProjectTitle>
							<p>ExCode</p>
						</ProjectTitle>
						<ProjectText>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam. Tellus orci ac auctor augue mauris augue neque gravida in. Est ullamcorper eget nulla facilisi etiam.</p>
						</ProjectText>
					</ProjectCard>

					<ProjectCard>
						<a href="https://junctionxexeter.com" target="_blank">
							<img
								src="/ProjectPlaceHolder.svg"
								alt="Project Thumbnail"
							/>
						</a>
						<ProjectTitle>
							<p>JunctionX</p>
						</ProjectTitle>
						<ProjectText>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam. Tellus orci ac auctor augue mauris augue neque gravida in. Est ullamcorper eget nulla facilisi etiam.</p>
						</ProjectText>
					</ProjectCard>
				</ProjectRow>
				
				
				<ProjectRow className="row">
					<ProjectCard>
						<a href="https://stayhappening.com/e/start-up-caf%C3%A9-%E2%98%95-E3LUSQ5J5ORH" target="_blank">
							<img
								src="/startupcafeImage.png"
								alt="Project Thumbnail"
							/>
						</a>
						<ProjectTitle>
							<p>StartUp Café</p>
						</ProjectTitle>
						<ProjectText>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam. Tellus orci ac auctor augue mauris augue neque gravida in. Est ullamcorper eget nulla facilisi etiam.</p>
						</ProjectText>
					</ProjectCard>

					<ProjectCard>
						<a href="https://thegrapevine.substack.com/" target="_blank">
							<img
								src="/GrapevineProject.png"
								alt="Project Thumbnail"
							/>
						</a>
						<ProjectTitle>
							<p>The Grapevine</p>
						</ProjectTitle>
						<ProjectText>
							<p>Nick & Louis' our former President & Vice-President’s take on the most interesting tech stories of the week with the Grapevine! Helping you discover the hottest startups and the latest technology trends, all in one simple email, once a week. 10,000+ subscribers and counting!</p>
						</ProjectText>
					</ProjectCard>
				</ProjectRow>
				<ProjectRow className="row">
					<ProjectCard>
						<a href="https://thegrapevine.substack.com/" target="_blank">
							<img
								src="/BlockChainProjectCard.png"
								alt="Project Thumbnail"
							/>
						</a>
						<ProjectTitle>
							<p>BlockChain</p>
						</ProjectTitle>
						<ProjectText>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam. Tellus orci ac auctor augue mauris augue neque gravida in. Est ullamcorper eget nulla facilisi etiam.</p>
						</ProjectText>
					</ProjectCard>

					<ProjectCard>
						<a href="https://thegrapevine.substack.com/" target="_blank">
							<img
								src="/MentorshipProjectCard.png"
								alt="Project Thumbnail"
							/>
						</a>
						<ProjectTitle>
							<p>Mentorship</p>
						</ProjectTitle>
						<ProjectText>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam. Tellus orci ac auctor augue mauris augue neque gravida in. Est ullamcorper eget nulla facilisi etiam.</p>
						</ProjectText>
					</ProjectCard>
				</ProjectRow>
			</ProjectsContainer>

${'' /* 			
{/* 
			
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
			</Box> */}

			<SponsorContainer className="container-fluid">
				<SectionTitle className="row">
					<h1 className="flickerText">Meet our Sponsors</h1>
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
					<a href="https://https://www.accenture.com/gb-en/" target="_blank">
                        <img src="/accenture.svg" alt="Partner logo" className="LogoSpacing" />
					</a>
                    <a href="https://business-school.exeter.ac.uk/" target="_blank">
                         <img src="/Exeter.svg" alt="Partner logo" className="LogoSpacing" />
					</a>
                    
                    <a href="https://exeter.gov.uk/" target="_blank">
                        <img src="/Council.svg" alt="Partner logo" className="LogoSpacing" />
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

                <MapTitle className="MapTextPadding">
                    <h1>Location</h1>
                    <p>We are based at the heart of campus</p>
                </MapTitle>
               

              
                <iframe title = "map" src="https://snazzymaps.com/embed/353429" className="MapDimensions" ></iframe>
                

                </MapContainer>
				<OffSetContainer>
				</OffSetContainer>
				<Footer />
			
		</>
	);
}

export default Home;
