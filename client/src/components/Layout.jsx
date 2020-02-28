import React, { Component, Children } from 'react'
import styled from 'styled-components'

const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: repeat(4, auto);
    /* grid-template-areas: "header header header"
                        "body body body"
                        "footer footer footer"; */
    width: 100%;
    height: 100%;
    * {
        font-family: ${props => props.theme.fonts[1]};
    }
`

const Layout = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Layout