import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        red: "#984447",
        lightBlue: "#ADD9F4",
        blue: "#476C9B",
        teal: "#468C98",
        black: "#101419"
    },
    fonts: ["sans-serif", "Roboto mono"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    /* does not work */
    area: {
        // header: '1 / 1 / 2 / 4',
        // main: '2 / 1 / 3 / 4',
        // footer: '3 / 1 / 4 / 4'
    }
}

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme;