import { Container, Content } from "./styled";
import { BackGroundDashboard } from "../Background";
import { CardGodFather } from "../CardGodFather";
import { MenuGodson } from "../MenuGodson/index";
export const DashboardStudentGodparents = () => {
  return (
    <Container>
      <MenuGodson />
      <BackGroundDashboard />
      <Content>
        <h2>Padrinhos</h2>
        <CardGodFather />
      </Content>
    </Container>
  );
};
