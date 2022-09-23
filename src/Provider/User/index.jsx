import { createContext, useEffect, useState } from "react";
import { apiPatrinus } from "../../Services/api";
import jwt_decode from "jwt-decode";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("@Patrinus:token") || ""
  );
  const [user, setUser] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const get_User = () => {
    if (!!token) {
      const id = jwt_decode(token);

      apiPatrinus
        .get(`/users/${id.sub}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  useEffect(() => {
    get_User();
  }, [token]);

  return (
    <UsersContext.Provider
      value={{
        user,
        token,
        setToken,
        setUser,
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
