import React from "react";
import styled from "styled-components";

const SocialsContainer = styled.section`
background-color: #002433;
border-top-style: solid;
border-width: 1px;
border-color: white;
height: auto;
display: flex !important;
flex-direction: row;
align-items: center;
justify-content: center;

/* @media screen and (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
     
} */


    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    
    
  }

  @media screen and (max-height: 750px) {
    height: auto;
    
}

`;

const IconsContainer = styled.div`
background-color: #002433;
width: 30vw;
height: auto;
display: flex !important;
flex-direction: row;
align-items: center;
justify-content: space-between;

.IddleIcon {
        width: 2vw; 
    }

@media screen and (max-width: 1150px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 10px;
        height: auto;

    .IddleIcon {
        width: 2.5vw; 
    }
    
  }

@media screen and (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 10px;
        height: auto;

    .IddleIcon {
        width: 5vw; 
    }
    
  }
`;


const FooterHeadline = styled.div`
color: white;
font-size: 1.5vw;
margin-bottom: 5px;
margin-right: 5vw;

p{
    margin: 0;
}

@media screen and (max-width: 1150px) {
    color: white;
    font-size: 2vw;
    margin-bottom: 5px;
    margin-right: 5vw;

    p{
        margin: 0;
    }
    }

@media screen and (max-width: 768px) {
    color: white;
    font-size: 3.78vw;
    margin-left: 10px;
    margin-bottom: 5px;
    margin-right: 5vw;
    
    p{
        margin: 0;
    }
    
}

@media screen and (max-height: 600px) {
    flex-direction: row;

    p {
        padding-top: 35px;
    }
}
`;

const IconAnimation = styled.div`

.IddleIcon {
    opacity: 1;
    display: inline-block;
    transition: 0.3s;
}



.IddleIcon:hover {
    display: inline;
    filter: grayscale(100%);
    filter: contrast(300%);
    filter: blur(5%);
}



`;

function Footer() {
    return (
        
        <SocialsContainer>
               
            <FooterHeadline>
            &copy; Exeter Entrepreneurs {new Date().getFullYear()}
            </FooterHeadline>

            {/* clickable Icons to the Society's various social media */}
            <IconAnimation>
                <IconsContainer>
                    
                        <a href="https://www.linkedin.com/company/exeterentrepreneurs/about/" target="_blank">

                                <img src="/linkedin.svg" alt="Social Media logo" className="IddleIcon" />
                            
                        </a>
                    
                        <a href="https://www.facebook.com/ExeterEntrepreneurs" target="_blank">
                            
                                <img src="/facebook.svg" alt="Social Media logo" className="IddleIcon" />
                            
                        </a>
                    

                    
                        <a href="https://www.instagram.com/exeter_entrepreneurs/" target="_blank">
                            
                                <img src="/insta.svg" alt="Social Media logo" className="IddleIcon" />
                                        
                        </a>
                    
                        <a href="https://twitter.com/EEUniSociety" target="_blank">
                            
                                <img src="/twitter.svg" alt="Social Media logo" className="IddleIcon" />
                            
                        </a>
                    
                        <a href="mailto:hello@exeterentrepreneurs.com" target="_blank">
                        
                                <img src="/gmail.svg" alt="Social Media logo" className="IddleIcon" />
                            
                        </a>
                    
                </IconsContainer>
            </IconAnimation>
        </SocialsContainer>
    );
}

export default Footer;