import React from 'react'
import styled from 'styled-components'
import search from '../assets/images/search.svg'
import Button from '../components/reusables/Button'
import Form from '../components/reusables/Form'
import Input from '../components/reusables/Input'
import axios from 'axios';

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
    padding: 2em;

    h1, h2 {
        padding: 0.5em 0em;
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
const Main = () => {
    return (
        <Wrapper>
            <Content>
                <h1>Jobify</h1>
                <h2>Your all in one job search helper</h2>

                <Form>
                    <Input type="text" placeholder="Search..." method="get" />
                    <Button>
                        Search
                    </Button>
                </Form>


            </Content>
        </Wrapper>
    )
}

export default Main;