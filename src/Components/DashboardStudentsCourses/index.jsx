import { Container, Content, HeaderContent, ContentComponent } from "./styled";

import { BackGroundDashboard } from "../Background";
import { MenuGodson } from "../MenuGodson";
import { InputSearch } from "../InputSearch";
import { CoursesAvailable } from "../CoursesAvailable";

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
          <ContentComponent>
            <CoursesAvailable />
          </ContentComponent>
        </Content>
      </div>
    </Container>
  );
};
