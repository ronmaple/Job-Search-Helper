import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import { AppContext } from '../../context/AppContextProvider';
import { Route, Redirect } from 'react-router-dom';

const Container = styled.div`
    width: 500px;
    height: 250px;
    border: solid dashed 1px;
    background: ${props => props.theme.colors.white};
    padding: 2em;
    box-shadow: ${props => props.theme.boxShadow.quizlet};
    transition: box-shadow 0.5s ease-in-out;
    /* transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); */
    border-radius: 0.5em;

    &:hover {
        cursor: pointer;
        box-shadow: ${props => props.theme.boxShadow.hover};

    }
`

const Head = styled.div`
    line-height: 1.35em;

    h2 {
        font-size: 1.2em;
        font-weight: 600;
    }

    h3 { 
        font-size: 1.0em;
        font-weight: 300;
        color: ${props => props.theme.colors.gray}
    }

`

const Summary = styled.div`
    padding: 2em 1em;
    line-height: 1.25em;

    p {
        color: ${props => props.theme.colors.gray};
    }
`

const Foot = styled.div`
    span {
        font-size: 1em;
        color: hsl(0, 0%, 20%);
    }
`

interface Props {
    title: string,
    company: string,
    desc: string,
    key: number,
    created: Date,
}


const Listing: React.FC<Props> = ({ title, company, desc, key, created }) => {

    const [state, dispatch] = useContext(AppContext);
    const [selected, setSelected] = useState(false);

    let description: string = desc.length > 197 ? desc.slice(0, 197) + '...' : desc + '...';

    const Main = () => (
        <Container key={key} onClick={() => {
            dispatch({
                type: "SET_DATA", payload: {
                    title,
                    company,
                    desc,
                    key,
                    created
                }
            })

            console.log('Container click')

            setSelected(true);
        }}>
            <Head>
                <h2>{title}</h2>
                <h3>{company}</h3>
            </Head>



            <Summary>
                <p>
                    {description}
                </p>
            </Summary>

            <Foot>
                <span>{created}</span>
            </Foot>
        </Container>
    )
    return (

        <Route exact path="/">
            { selected ? <Redirect to='/posting'/> : <Main />}
        </Route>
    )
}

export default Listing

/* 

    Basic Listing component { indeed }

    * Company Logo == not all have*
    Title
    Company < rating > 
    Company Location

    short description

    Posting date < save job function > 


*/