import React from "react";
import styled, { css } from 'styled-components';
import { NavLink } from "react-router-dom";
import Burger from "./Burger";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    flex-direction: column !important;
    z-index: 10;

    NavLink {
        padding: 18px 10px;
    }

    & span{
        transition: 1s;
      }


    & span:hover {
        font-size: 7vw;
    }
  
   
    @media {
        flex-flow: column nowrap;
        display: flex;
        background-color: #4f4f66;
        position: fixed;
        flex-direction: column;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        transition: transform 0.5s ease-in-out;

        NavLink {
            color: #fff;
        }
    }
    `

function RightNavbar({open}) {
    const isOpen = true;

    return (
        <Ul open={open}>
             <NavLink
            to={'/home'} onClick={<Burger open={!open}/>} style={{ textDecoration: "none", color: 'white', fontSize: '5vw' }}>
                <span>Home </span>
            </NavLink>
           
    
            <NavLink
            to={'/blog'} onClick={<Burger open={!open}/>}  style={{ textDecoration: "none", color: 'white', fontSize: '5vw' }}>
               <span> Blog </span>
            </NavLink>

            <NavLink
            to={'/community'} onClick={<Burger open={!open}/>} style={{ textDecoration: "none", color: 'white', fontSize: '5vw' }}>
               <span> Community Projects </span>
            </NavLink>
            
        </Ul>
    )
}

export default RightNavbar;