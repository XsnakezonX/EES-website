// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

// const LandingPage = styled.section`
// 	background-color: #00121A;
// 	height: 100vh;
// 	background-size: cover;
// 	display: flex !important;
// 	flex-direction: row;
// 	align-items: center;
// 	justify-content: center;
// `;

// const NeonContainer = styled.div`
// 	display: flex !important;
// 	flex-direction: row;
// 	align-items: center;
// 	justify-content: space-between;

// 	@media screen and (max-width: 768px) {
//         display: flex !important;
// 		flex-direction: column;
// 		align-items: center;
// 		justify-content: center;
		
   
        
    
    
//   	}

// 	.switch-image {
// 		width: 155px;
// 		height: 405px;
// 	}

// 	.logo-image {
// 		width: 12vw;
// 		height: 43vh;
// 		opacity: 0.05;

		
// 		@media screen and (max-width: 768px) {
//         display: none;
   
        
    
    
//   }
// 	}

// 	h1 {
// 		color: #fff;
// 		font-size: 4.7vw;
// 		opacity: 0.05;
// 		text-shadow: 0 0 20px #fff;

// 		@media screen and (max-width: 1000px) {
//         font-size: 5vw;
// 		}

// 		@media screen and (max-width: 700px) {
//         font-size: 6vw;

// 		}

// 		@media screen and (max-width: 600px) {
//         font-size: 7vw;

// 		}
// 		@media screen and (max-width: 500px) {
//         font-size: 7.5vw;
// 		}
        
    
    
  
// 	}

// 	.flicker-text {
//   		animation: flicker 1s 0.3s infinite;
// 	}

// 	.flicker-image {
//   		animation: flicker 1s 0.3s infinite;
// 	}

// 	@keyframes flicker {
// 		from {
// 			opacity: 1;
// 		}

// 		4% {
// 			opacity: 0.83;
// 		}

// 		6% {
// 			opacity: 0.65;
// 		}

// 		8% {
// 			opacity: 0.2;
// 		}

// 		10% {
// 			opacity: 0.9;
// 		}

// 		11% {
// 			opacity: 0.922;
// 		}

// 		12% {
// 			opacity: 0.77;
// 		}

// 		14% {
// 			opacity: 0.75;
// 		}

// 		16% {
// 			opacity: 0.5;
// 		}

// 		17% {
// 			opacity: 0.98;
// 		}

// 		19% {
// 			opacity: 0.93;
// 		}

// 		20% {
// 			opacity: 0.99;
// 		}

// 		24% {
// 			opacity: 1;
// 		}

// 		26% {
// 			opacity: 0.94;
// 		}

// 		28% {
// 			opacity: 0.98;
// 		}

// 		37% {
// 			opacity: 0.93;
// 		}

// 		38% {
// 			opacity: 0.5;
// 		}

// 		39% {
// 			opacity: 0.96;
// 		}

// 		42% {
// 			opacity: 1;
// 		}

// 		44% {
// 			opacity: 0.97;
// 		}

// 		46% {
// 			opacity: 0.94;
// 		}

// 		56% {
// 			opacity: 0.9;
// 		}

// 		58% {
// 			opacity: 0.9;
// 		}

// 		60% {
// 			opacity: 0.99;
// 		}

// 		68% {
// 			opacity: 1;
// 		}

// 		70% {
// 			opacity: 0.9;
// 		}

// 		72% {
// 			opacity: 0.95;
// 		}

// 		93% {
// 			opacity: 0.93;
// 		}

// 		95% {
// 			opacity: 0.95;
// 		}

// 		97% {
// 			opacity: 0.93;
// 		}

// 		to {
// 			opacity: 1;
// 		}
// 	}
// `;

// const LettersBox = styled.div`
// 	display: flex !important;
// 	flex-direction: column;
// 	align-items: flex-start;

// 	width: 45vw;
// 	height: 24vh;
// 	margin-left: 10vh;
// 	margin-top: -20vh;
// `;



// function Landing() {
	
// 	const [switchImage, setSwitchImage] = useState("/Switch ON.svg");
// 	const [switchValue, setSwitchValue] = useState(false);
// 	const [flickerClass, setFlickerClass] = useState("");
// 	const [flickerImageClass, setFlickerImageClass] = useState("");

// 	let navigate = useNavigate();

// 	const handleSwitch = () => {
// 		if(switchValue === false){
// 			setSwitchImage("/Switch OFF.svg");
// 			setFlickerClass("flicker-text");
// 			setFlickerImageClass("flicker-text");
// 			setSwitchValue(true);
// 			setTimeout(() => {
// 				navigate("/home");
// 			}, 4000);
// 		} else {
// 			setSwitchImage("/Switch ON.svg");
// 			setFlickerClass("");
// 			setFlickerImageClass("");
// 			setSwitchValue(false);
// 		}
// 	};


// 	return (
// 		<LandingPage>
// 			<NeonContainer>
// 				<img className={`logo-image ${flickerImageClass}`} src="/logo-with-shadow.svg"/>
// 				<LettersBox>
// 					<h1 className={flickerClass}>Totally Free.</h1>
// 					<h1 className={flickerClass}>Always Innovating.</h1>
// 				</LettersBox>
// 				<img className="switch-image" src={switchImage} onClick={handleSwitch}/>
// 			</NeonContainer>
// 		</LandingPage>
// 	);
// }

// export default Landing;
