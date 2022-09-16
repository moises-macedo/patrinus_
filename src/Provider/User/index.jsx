import { createContext, useEffect, useState } from "react";
import { apiPatrinus } from "../../Services/api";
import jwt_decode from "jwt-decode";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  // const [token, setToken] = useState(
  //   JSON.parse(`${localStorage.getItem("@Patrinus:token")}`) || " "
  // );
  const [user, setUser] = useState([]);

  // const get_User = () => {
  //   if (token) {
  //     const id = jwt_decode(token);
  //     apiPatrinus
  //       .get(`/users/${id.id}`)
  //       .then((res) => {
  //         setUser(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  // useEffect(() => {
  //   get_User();
  // }, [token]);

  return (
    <UsersContext.Provider value={{ user }}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
