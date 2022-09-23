import { MenuGodFather } from "../../Components/MenuGodFather/index";
import { BackGroundDashboard } from "../../Components/Background/index";
import { Fullpage, Content, CardDiv } from "./styled";

export const DashboardGodfatherTopCourses = () => {
  return (
    <Fullpage>
      <MenuGodFather />
      <BackGroundDashboard theme="patrinus" />
      <Content>
        <h3>Seja bem vindo </h3>
        <h2>Top cursos</h2>
        <CardDiv></CardDiv>
      </Content>
    </Fullpage>
  );
};
