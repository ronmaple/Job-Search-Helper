import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/images/jobify-logo.png'

const Wrapper = styled.header`
    grid-area: 1 / 1 / 2 / 4;
    background: white;
    width: 100%;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    
    ul {
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        padding: 0em 2em;

        li, a { 
            color: ${props => props.theme.colors.black};
            font-weight: 700;
        }
        li {
            font-size: ${props => props.theme.fontSizes.medium};
            padding: 0.25em 1.5em;
            cursor: pointer;
            a { 
                text-decoration: none;
                }
            /* border: solid 2px red; */
        }

        li:hover {
            background: ${props => props.theme.colors.blue};
            a {
                color: white;
            }
        }
    }
`

const Nav = styled.nav`
    padding: 0em 2em;
    width: 300px;
`

const Logo = styled.div`
    padding: 1em;
    img {
        height: 75px;
        width: auto;
    }
`

const Header: React.FC = () => {
    return (
        <Wrapper>
            <Logo>
                <Link to="/"><img src={logo} /></Link>
            </Logo>


            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>

        </Wrapper >
    )
}


export default Header