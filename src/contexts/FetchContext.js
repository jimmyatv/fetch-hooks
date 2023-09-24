import { createContext, useEffect, useState } from "react";

const FetchContext = createContext();

export const FetchProvider = ({ children }) => {

    const [universities, setUniversities] = useState([]);

    useEffect(() => {

        fetch('http://universities.hipolabs.com/search?country=United+States')
        .then(res => res.json())
        .then(uni => {
            setUniversities(uni);
        })
        
    }, []);

    

    return (
        <FetchContext.Provider value={{universities, setUniversities}}>
            {children}
        </FetchContext.Provider>

    )
}



export default FetchContext;