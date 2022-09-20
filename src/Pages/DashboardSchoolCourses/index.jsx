import { SchollMenu } from "../../Components/MenuSchool/index";
import {
  BackgroundSchool,
  Content,
  HeaderSchool,
  FullPage,
  CardSpace,
} from "./styled";
import { InputSearch } from "../../Components/InputSearch/index";

export const DashboardSchoolCourses = () => {
  return (
    <FullPage>
      <BackgroundSchool />
      <SchollMenu />
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
