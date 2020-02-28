import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        red: "#984447",
        lightBlue: "#ADD9F4",
        blue: "#476C9B",
        teal: "#468C98",
        black: "#101419",
        white: "hsl(0, 0%, 98%)",
        gray: "hsl(0, 0%, 30%)",
    },
    fonts: ["sans-serif", "Roboto mono"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    boxShadow: {
        quizlet: '0 0.125rem 0.5rem 0 rgba(0,0,0,.24)',
        hover: `0 0.5rem 1.5rem 0 rgba(0,0,0,.24)`,
    },
    cubicBezier: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)',
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