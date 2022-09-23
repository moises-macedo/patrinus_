import { SchollMenu } from "../../Components/MenuSchool/index";
import {
  BackgroundSchool,
  Content,
  HeaderSchool,
  FullPage,
  CardSpace,
} from "./styled";
import { InputSearch } from "../../Components/InputSearch/index";
import { MenuMobile } from "../../Components/MenuMobile/Index";

export const DashboardSchoolCourses = () => {
  const arr = [
    {text: "Perfil", link: "/SchoolProfile"},
    {text: "Cursos", link: "/DashboardSchoolCourses"},
    {text: "Alunos", link: "/DashboardStudentsRegistered"}
  ];
  return (
    <FullPage>
      <BackgroundSchool />
      <div className="mobile1">
        <MenuMobile arr={arr}/>
      </div>
      <div className="mobile">

      <SchollMenu />
      </div>
      <Content>
        <HeaderSchool>
          <h2>Cursos Disponiveis</h2>
          <button>Adicionar Curso</button>
        </HeaderSchool>
        <div id="search">
          <InputSearch placeholder="Pesquisar Curso" />
        </div>
        <CardSpace></CardSpace>
      </Content>
    </FullPage>
  );
};
