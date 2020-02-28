import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
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
        transform: scale(0.98);
    }
`
interface IButton {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
    return (
        <StyledButton
            type="submit"
            onClick={onClick}
        >
            {children}
        </StyledButton>
    )
}

export default Button