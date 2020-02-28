import React from 'react'
import styled from 'styled-components'

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
    line-height: 2em;

    h2 {
        font-size: 1.5em;
        font-weight: 600;
    }

    h3 { 
        font-size: 1.25em;
        font-weight: 300;
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
const Listing: React.FC = () => {
    return (
        <Container>
            <Head>
                <h2>Job Title</h2>
                <h3>Company</h3>
            </Head>



            <Summary>
                <p>
                    I'm baby kinfolk woke crucifix actually. Prism neutra heirloom poke direct trade
                    trust fund meh pitchfork. Pitchfork pickled post-ironic pork belly. Thundercats
                    activated charcoal flannel twee af.
                </p>
            </Summary>

            <Foot>
                <span>14 days ago</span>
            </Foot>
        </Container>
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