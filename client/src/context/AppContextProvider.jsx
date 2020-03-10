import React, { createContext, useReducer } from 'react'

const SET_DATA = "SET_DATA";

// interface Data {
//     title: string | null,
//     created: any | null,
//     description: string | null,
//     id: number | null,
//     company: string | null,
// }

const initialState = {
    title: null,
    created: null,
    description: null,
    id: null,
    company: null,
}

const AppContext = createContext()

const appContextReducer = (state, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: { ...action.payload }
            };
        default:
            return state;
    }
}


// interface Props {
//     children: any
// }

const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appContextReducer, initialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
}

export {
    AppContext,
    AppContextProvider
}