import { createContext, useState, useEffect, useContext } from "react";
import { UsersContext } from "../User";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  // const {token} = useContext(UsersContext)

  // useEffect(()=>{
  //     if(token){
  //         setAuthenticated(true)
  //     }
  // },[authenticated])

  return (
    <AuthContext.Provider value={{ authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
