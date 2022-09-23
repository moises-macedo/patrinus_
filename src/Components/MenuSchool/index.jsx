import { MenuSchool } from "./styled";
import { UsersContext } from "../../Provider/User";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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
          <button id="menuList" onClick={() => navigate()}>
            Perfil
          </button>
        </nav>
        <nav>
          <button id="menuList" onClick={() => navigate()}>
            Cursos
          </button>
        </nav>
        <nav>
          <button id="menuList" onClick={() => navigate()}>
            Alunos
          </button>
        </nav>
      </ul>
      <button id="exit" onClick={handleExit}>
        Sair
      </button>
    </MenuSchool>
  );
};
