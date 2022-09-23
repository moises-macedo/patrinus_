import { MenuGodfather } from "./styled";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../Provider/User";
import { useContext } from "react";

export const MenuGodFather = () => {
  const { setAuthenticated, authenticated } = useContext(UsersContext);
  const navigate = useNavigate();

  const handleExit = () => {
    localStorage.clear();
    setAuthenticated(!authenticated);
    navigate("/");
    window.location.reload();
  };
  return (
    <MenuGodfather>
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
            Top Cursos
          </button>
        </nav>
        <nav>
          <button id="menuList" onClick={() => navigate()}>
            Apadrinhados
          </button>
        </nav>
      </ul>
      <button id="exit" onClick={handleExit}>
        Sair
      </button>
    </MenuGodfather>
  );
};
