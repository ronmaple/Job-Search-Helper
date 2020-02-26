import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.form`
    padding: 1em;
    &:after{
        content: "";
        clear: both;
        display: table;
    }
`


const Form: React.FC = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Form