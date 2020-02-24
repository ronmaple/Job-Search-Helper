import React from 'react'
import styled from 'styled-components'
import search from '../assets/images/search.svg'

const Wrapper = styled.main`
    /* grid-area: ${props => props.theme.area.main}; */
    grid-area: 2 / 1 / 3 / 4;
    width: 100%;
    background: linear-gradient(to bottom right, #476C9B 0%, #ADD9F4 100%);
    padding: 2em 3em;
    display: grid;
    height: 50vh;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
`

const Content = styled.div`
    grid-area: 1 / 1 / 3 / 3; 
    /* border: dashed 2px red;   */
    padding: 2em;

    h1, h2 {
        padding: 0.5em 0em;
        /* color: ${props => props.theme.colors.black}; */
        color: white;
    }

    h1 {
        font-size: ${props => props.theme.fontSizes.large};
        font-weight: 700;
    }
    
    h2 {
        font-size: ${props => props.theme.fontSizes.medium};
        font-weight: 500;
    }
`

const StyledInput = styled.input`
    padding: 1em;
    margin: 2em 0em;
    width: 300px;
    height: 25%;
`

const Button = styled.button`
    height: 50%;
`

const Search = styled.div`
    height: 100px;
    border: dashed 2px red;
`
const Main = () => {
    return (
        <Wrapper>
            <Content>
                <h1>Jobify</h1>
                <h2>Your all in one job search helper</h2>

                <Search>
                    <StyledInput type="text" placeholder="Search..." />
                    <Button>
                        <svg viewBox="0 0 24 24">
                        <path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
			S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
			c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
			c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"/>
                        </svg>
                    </Button>
                </Search>


            </Content>
        </Wrapper>
    )
}

export default Main;