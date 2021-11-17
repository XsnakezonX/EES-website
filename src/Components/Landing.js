import React, { useState } from "react";
import styled from "styled-components";

const LandingPage = styled.section`
background-color: #00628C;
height: 100vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;


function Landing() {


    function LightSwitch(){
        return true
    }

    return (
        <LandingPage>

            <button>Click</button>
            <h1>Light Switch: off</h1>
            
        </LandingPage>
    );
}

export default Landing;