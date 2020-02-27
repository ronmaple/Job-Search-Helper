import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    padding: 0.8em;
    font-size: ${props => props.theme.fontSizes.small};
    border: 1px solid grey;
    float: left;
    width: 80%;
    background: #f1f1f1;
`

// TO DO: Set up proper type def for placeholder/ type
interface Props {
    type: any,
    placeholder?: any,
}
const Input: React.FC<Props> = ({ type, placeholder }) => {
    return (
        <StyledInput
            type={type}
            placeholder={placeholder}
        >
        </StyledInput>
    )
}

export default Input