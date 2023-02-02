import { createContext,useState } from "react";

export const Users = createContext();

const Context = ({children}) => {
    const [user,setUser] = useState({
        id: null,
        email: null
    });
    
    const login = (id) => {
        setUser(
            user.id = id,
            user.email = id.email
        )
    }
     
    const logout =  (users) => {
        setUser(users)
    }

    return(
        <Users.Provider value={{use:user,login,logout}}>
            {children}
        </Users.Provider>
    )
}

export default Context;
