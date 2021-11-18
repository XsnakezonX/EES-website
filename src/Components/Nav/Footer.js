import React from "react";
import styled from "styled-components";

const SocialsContainer = styled.section`
background-color: #002433;
border-top-style: solid;
border-width: 1px;
border-color: white;
display: flex !important;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

const IconsContainer = styled.div`
background-color: #002433;
display: flex !important;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;


const FooterHeadline = styled.p`
color: white;
font-weight: 0;
font-size: 43px;
line-height: 86px;
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
                <p>© Exeter Entrepreneurs 2021</p>
            </FooterHeadline>

            {/* clickable Icons to the Society's various social media */}
            <IconsContainer>
                <IconAnimation>
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
                </IconAnimation>
            </IconsContainer>
        </SocialsContainer>
    );
}

export default Footer;