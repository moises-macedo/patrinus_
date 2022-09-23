import { AboutMeStyle } from "./style";
import { useContext } from "react";
import { UsersContext } from "../../Provider/User/index";
export const AboutMe = () => {
  const { user } = useContext(UsersContext);

  return (
    <AboutMeStyle>
      <h3>Sobre Mim:</h3>
      <textarea rows={6} cols={36} value={user.aboutme}></textarea>
    </AboutMeStyle>
  );
};
