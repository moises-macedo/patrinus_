import { Container, Content, HeaderContent } from "./styled";

import { BackGroundDashboard } from "../Background";
import { MenuGodson } from "../MenuGodson";
import { InputSearch } from "../InputSearch";

export const DashboardStudentsCourses = () => {
  return (
    <Container>
      <MenuGodson />
      <div>
        <BackGroundDashboard />
        <Content>
          <HeaderContent>
            <h2>Cursos</h2>
            <InputSearch />
          </HeaderContent>
        </Content>
      </div>
    </Container>
  );
};
