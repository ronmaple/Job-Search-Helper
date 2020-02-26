import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.input`
    padding: 0.8em;
    font-size: ${props => props.theme.fontSizes.small};
    border: 1px solid grey;
    float: left;
    width: 80%;
    background: #f1f1f1;
`

const Input: React.FC = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Input