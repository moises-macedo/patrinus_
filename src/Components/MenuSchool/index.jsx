import { useNavigate } from "react-router-dom";
import { MenuSchool } from "./styled";

export const SchollMenu = () => {
  const navigate = useNavigate()
  return (
    <MenuSchool>
      <img src="" alt="Foto do usuário" />
      <h2>nome do usuário</h2>
      <ul>
        <nav>
          <button id="menuList" onClick={() => navigate("/SchoolProfile")}>Perfil</button>
        </nav>
        <nav>
          <button id="menuList" onClick={() => navigate("/DashboardSchoolCourses")}>Cursos</button>
        </nav>
        <nav>
          <button id="menuList" onClick={() => navigate("/dashboardStudentsRegistered")}>Alunos</button>
        </nav>
      </ul>
      <button id="exit">Sair</button>
    </MenuSchool>
  );
};
