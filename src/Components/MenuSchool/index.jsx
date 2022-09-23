import { useNavigate } from "react-router-dom";
import { MenuSchool } from "./styled";
import { UsersContext } from "../../Provider/User";
import { useContext } from "react";
export const SchollMenu = () => {

  const { setAuthenticated, authenticated } = useContext(UsersContext);
  const navigate = useNavigate();

  const handleExit = () => {
    localStorage.clear();
    setAuthenticated(!authenticated);
    navigate("/");
    window.location.reload();
  };

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
      <button id="exit" onClick={handleExit}>
        Sair
      </button>
    </MenuSchool>
  );
};
