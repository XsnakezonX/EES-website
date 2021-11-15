import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import Burger from "./Burger";

const Nav = styled.nav`
    height: 10%;
    display: flex;
    justify-content: space-between;
 

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
    `

function Navbar() {
    return (
        <>
           <Nav>
              <NavLink  to="/">
                <h1>Logo</h1>
            </NavLink>
          <Burger />
        </Nav>
        </>
    );
}

export default Navbar;