import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import Burger from "./Burger";

const Nav = styled.nav`
    height: 10%;
    display: flex;
    align-items: center;
 

    a {
        color: #485466;
        text-decoration: none;
    }

    ul {
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        
        li {
            padding: 18px 10px;
        }
    }
    `;

const LogoDiv = styled.div`

    display: flex;
    align-items: center;
`;

const NavLogo = styled.div`
    background-color: white;
    z-index: 3;
`;

const BlogDiv = styled.div`
    transform: translateX(-100%);
    width: 100px;
    transition: all 0.3s linear;
`;

const BlogButton = styled.div`
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    margin-right: 40px;
    margin-top: 20px;
    font-size: 20px;

    h1 {
        color: white;
    }
`;

function Navbar() {
    return (
        <>
            <Nav>
                <LogoDiv>
                    <NavLogo>
                        <NavLink style={{ zIndex: '3', position: 'fixed' }} to="/">
                            {/* <img src="Logo_White_Transparent.png" alt="Logo" style={{ width: '35px', marginLeft: '3.5vw', marginTop: '1.4vw', backdropFilter: 'blur(5px)'}} /> */}
                            <img src="Mobile-Logo@2x.svg" alt="Mobile Logo" style={{width: '60px', marginLeft: '3.5vw', marginTop: '1.4vw', borderRadius: '40px', backdropFilter: 'blur(8px)'}} />
                        </NavLink>
                    </NavLogo>
                    {/* <BlogButton>
                        <NavLink to="/blog">
                            <h1>Blog</h1>
                        </NavLink>
                    </BlogButton> */}

                </LogoDiv>

            </Nav>
        </>
    );
}

export default Navbar;