import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
    grid-area: 4 / 1 / 5 / 4;
    text-align: center;
    vertical-align: middle;
    margin-top: 100px;
`

const Footer: React.FC = () => {
    return (
        <Wrapper>
            Footer
        </Wrapper>
    )
}

export default Footer