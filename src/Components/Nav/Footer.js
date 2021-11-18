import React from "react";
import styled from "styled-components";

const SocialsContainer = styled.section`
background-color: #00364D;
border-top-style: solid;
border-width: 1px;
border-color: white;
display: flex !important;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

const IconsContainer = styled.div`
background-color: #00364D;
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
    z-index: 0;
}

.HoverIcon {
    position: absolute;
    opacity: 0;
    z-index: 1;
}

&:hover IddleIcon {
    opacity: 0;
}

&:hover HoverIcon {
    opacity: 1;
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
                <a href="https://www.linkedin.com/company/exeterentrepreneurs/about/" target="_blank">
                    <IconAnimation>
                        <img src="/linkedin.svg" alt="Social Media logo" className="IddleIcon" />
                        <img src="/linkedinHover.png" alt="Social Media Logo" className="HoverIcon" />
                    </IconAnimation>
                </a>
                <a href="https://www.facebook.com/ExeterEntrepreneurs" target="_blank">
                    <img src="/facebookHover.png" alt="Social Media logo" />
                </a>
                <a href="https://www.instagram.com/exeter_entrepreneurs/" target="_blank">
                    <img src="/instaHover.png" alt="Social Media logo" />
                </a>
                <a href="https://twitter.com/EEUniSociety" target="_blank">
                    <img src="/twitterHover.png" alt="Social Media logo" />
                </a>
                <a href="mailto:hello@exeterentrepreneurs.com" target="_blank">
                    <img src="/gmailHover.png" alt="Social Media logo" />
                </a>
            </IconsContainer>
        </SocialsContainer>
    );
}

export default Footer;