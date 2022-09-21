import { Container, Border } from "./styled.js";
import User from "../../Assets/Img/User.svg";

export const CardGodFather = ({ imageGodFather, theme=false }) => {
  return (
    <Container>
      {imageGodFather ? (
        <img src={imageGodFather} alt="" />
      ) : (
        <img src={User} alt="" />
      )}
      <Border theme={theme}/>
    </Container>
  );
};
