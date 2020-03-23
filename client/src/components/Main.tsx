import React, { useState, useEffect, useContext } from 'react'

import styled from 'styled-components'

import Button from './reusables/Button'
import Form from './reusables/Form'
import Input from './reusables/Input'
import axios from 'axios';
import Listing from '../components/reusables/Listing'

import { AppContext } from '../context/AppContextProvider'

const Wrapper = styled.main`
    /* grid-area: ${props => props.theme.area.main}; */
    grid-area: 2 / 1 / 3 / 4;
    width: 100%;
    padding: 2em 0em;
    background: linear-gradient(to bottom right, #476C9B 0%, #ADD9F4 100%);
    display: grid;
    height: 50vh;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
`

const Content = styled.div`
    grid-area: 1 / 1 / 2 / 3; 
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

const QueryResult = styled.div`
    width: 100%;
    grid-area: 3 / 1 / 4 / 4;
    border: dashed 1px red;
    padding: 7.5em 0em;
    display: flex;
    align-items: center;
    align-content: space-around;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: auto;

    > div {
        margin: 1em 3em;
    }
`

interface apiData {
    title: string,
    description: string,
    company: string,
    created: Date,
    id: number,
}

const Main: React.FC = () => {

    const [data, setData] = useState<Array<apiData>>([]);
    const [loaded, setLoad] = useState(false);

    // const [state, dispatch] = useContext(AppContext)
    // const [context, setContext] = useContext(AppContext)

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();

        const call = async () => {
            const res = await axios.get('http://localhost:3001/jobs')
            console.log(res);
            await setData(res.data);
            setLoad(true);

            // await dispatch({ type: "SET_DATA", payload: res.data });
            // console.log('state', await state);
        }

        call();
    }

    return (
        <>
            <Wrapper>
                <Content>
                    <h1>Jobify</h1>
                    <h2>Your all in one job search helper</h2>

                    <Form>
                        <Input type="text" placeholder={"Search..."} />
                        <Button
                            onClick={handleSubmit}
                        >
                            Search
                    </Button>
                    </Form>

                </Content>
            </Wrapper>

            <QueryResult>
                {loaded &&
                    data.map(({ title, company, created, id, description }) => {
                        return (
                            <Listing
                                title={title}
                                company={company}
                                created={created}
                                key={id}
                                desc={description}
                            />
                        )
                    })
                }
            </QueryResult>
        </>
    )
}

export default Main;