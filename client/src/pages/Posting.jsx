import React, { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider'

const Posting = () => {
    const [state, dispatch] = useContext(AppContext);

    console.log('state data', state.data)
    return (
        <div>posting</div>
    )
}

export default Posting