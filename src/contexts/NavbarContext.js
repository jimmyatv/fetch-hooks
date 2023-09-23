import { createContext, useState } from "react";

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {

    const [navBarLinks, setNavBarLinks] = useState([
        {
            url: '/',
            title: 'Home'
        },
        {
            url: '/fetch',
            title: 'Fetch'
        },
        {
            url: '/hooks',
            title: 'Hooks'
        }
    ]);

    return (
        <NavbarContext.Provider value={{navBarLinks,setNavBarLinks}}>
            {children}
        </NavbarContext.Provider>
    )
}


export default NavbarContext;