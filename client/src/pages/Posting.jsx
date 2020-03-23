import React, { useContext } from 'react'
import Main from '../components/Postings/Main'
import styled from 'styled-components'
import { AppContext } from '../context/AppContextProvider'

// const Layout = styled.div`
//     grid-area: 2 / 1 / 3 / 4;
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     width: 90%;
//     max-width: 1200px;
//     border: dashed 2px red;
//     margin: auto;
//     min-height: 500px;
//     padding: 1em 2em;
// `

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

const Posting = () => {
    const [state, dispatch] = useContext(AppContext);

    console.log('state data', state.data)
    const dummy = { title: "Superior Engineer", company: "Dummy Corp", key: 1234, created: new Date(), desc: "IT/IQ Tech Recruiters is seeking a .Net Developer to join our client in Vancouver, BC. Why work with our client? Very focused on future learning and will sponsor certifications Young growing and hungry environment Responsibilities The gathering, review and analysis of business requirements The design and development of business application solutions, including systems enhancement and new module development Integration of systems (both third party and in house) Performing systems testing and sup…" }
    return (
        <Wrapper>
            {/* {state.data ? <Main data={state.data} /> : <h2>Nothing was selected. TODO: Create either a 404 page or a generic page with this message</h2>} */}

            <Main data={state.data || dummy} />

        </Wrapper>
    )
}

export default Posting