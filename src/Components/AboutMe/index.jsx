import { AboutMeStyle } from "./style";
import { UsersContext } from "../../Provider/User";
import { useContext } from "react";
export const AboutMe = () => {
  const { user } = useContext(UsersContext);
  return (
    <AboutMeStyle>
      <h3>Sobre Mim:</h3>
      <textarea rows={6} cols={36}>
        {user.aboutme}
      </textarea>
    </AboutMeStyle>
  );
};
