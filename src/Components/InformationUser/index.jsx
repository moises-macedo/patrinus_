import { InformationUserStyle } from "./style";
import { useContext } from "react";
import { UsersContext } from "../../Provider/User/index";

export const InformationUser = () => {
  const { user } = useContext(UsersContext);
  return (
    <InformationUserStyle>
      <p>Nome:<span>{user.name}</span></p>
      <p>Email:<span>{user.email}</span></p>
    </InformationUserStyle>
  );
};
