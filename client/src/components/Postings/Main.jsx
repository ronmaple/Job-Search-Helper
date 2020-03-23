import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    width: 100%;
    height: 100%;
`

const Post = styled.div`
    grid-area: 1 / 1 / 3 / 2;
    width: 100%;
    height: 100%;
    border: dashed 1px blue;
    border-right: solid 0.2em black;
`

const UpperPanel = styled.div`
    grid-area: 1 / 2 / 2 / 3; 
    width: 100%:
    height: 100%;
`

const LowerPanel = styled.div`
    grid-area: 2 / 2 / 3 / 3;
`

const Main = ({ data }) => {
    console.log(data)
    return (
        <Wrapper>
            <Post>
                <div className="header">
                    <h2>{data.title}</h2>
                </div>
                <div className="body">
                    <p>{data.desc}</p>
                </div>
            </Post>
            <UpperPanel>
                Upper Panel
            </UpperPanel>

            <LowerPanel>
                Lower Panel
            </LowerPanel>
        </Wrapper>
    )
}

export default Main

/*
    data:

    title
    company
    key = undefined right now TODO: fix
    created date

*/