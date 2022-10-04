import { createContext, useState } from "react";


let UserContext = createContext();
export const UserProvider =({children})=>{
const[profile,setProfile] = useState()
return <UserContext.Provider value={{setProfile,profile}}>
    {children}
</UserContext.Provider>

}

export default UserContext;