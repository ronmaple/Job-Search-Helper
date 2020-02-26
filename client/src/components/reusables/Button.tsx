import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
    float: left;
    width: 10%;
    padding: 0.8em;
    background: ${props => props.theme.colors.teal};
    color: white;
    font-size: ${props => props.theme.fontSizes.small};
    border: 1px solid grey;
    cursor: pointer;
    border-left: none;
    outline:none;

    &:active{
        transform: scale(1.05);
    }
`

const Button: React.FC = ({ children }) => {
    return (
        <Wrapper type="submit">
            {children}
        </Wrapper>
    )
}

export default Button