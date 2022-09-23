import { Container, Content, Header } from "./styled";

import { MenuMobile } from "../MenuMobile/Index";

import { SchollMenu } from "../MenuSchool";
import { InputSearch } from "../InputSearch";
import { CpStudentsRegistered } from "../cpStudentsRegistered";
import { BackGroundDashboard } from "../Background";

export const DashboardStudentsRegistered = () => {
  const arr = [
    {text: "Perfil", link: "/SchoolProfile"},
    {text: "Cursos", link: "/DashboardSchoolCourses"},
    {text: "Alunos", link: "/DashboardStudentsRegistered"}
  ];
  return (
    <Container>
      <div className="mobile1">
        <MenuMobile arr={arr} />
      </div>
      <div className="mobile">
        <SchollMenu />
      </div>
      <BackGroundDashboard />
      <Content>
        <Header>
          <h2>Alunos Cadastrados</h2>
          <InputSearch />
        </Header>
        <CpStudentsRegistered />
      </Content>
    </Container>
  );
};
