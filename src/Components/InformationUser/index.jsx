import { InformationUserStyle } from "./style";
import { useContext } from "react";
import { UsersContext } from "../../Provider/User/index";
export const InformationUser = () => {
  const { user } = useContext(UsersContext);
  return (
    <InformationUserStyle>
      <h4>Nome: {user.name}</h4>
      <h4>Email:{user.email}</h4>
    </InformationUserStyle>
  );
};
