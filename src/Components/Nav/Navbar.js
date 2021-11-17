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
    


    &:hover {
        div{
            transition: all 0.3s linear;

            &:nth-child(2) {
                display: block;
                transform: translateX(100%);
            }
        }
    }
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

function Navbar() {
    return (
        <>
            <Nav>
                <LogoDiv>
                    <NavLogo>
                        <NavLink style={{ backgroundColor: 'white', zIndex: '3' }} to="/">
                            <h1>Logo</h1>
                        </NavLink>
                    </NavLogo>
                    <BlogDiv>
                    <NavLink style={{ backgroundColor: 'white', zIndex: '3' }} to="/blog">
                            <h1>Blog</h1>
                        </NavLink>
                    </BlogDiv>
                </LogoDiv>

            </Nav>
        </>
    );
}

export default Navbar;