import { MenuGodSon } from "./styled";
import { FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import { UsersContext } from "../../Provider/User";
import { useNavigate } from "react-router-dom";

export const MenuGodson = () => {
  const { user, setAuthenticated, authenticated } = useContext(UsersContext);
  const navigate = useNavigate();
  const handleExit = () => {
    localStorage.clear();
    setAuthenticated(!authenticated);
    navigate("/");
    window.location.reload();
  };

  return (
    <MenuGodSon>
      <img src={<FaUserAlt />} alt={user?.name} />
      <h2>nome do usuário</h2>
      <ul>
        <nav>
          <button
            id="menuList"
            onClick={() => navigate("/dashboardgodsonprofile")}
          >
            Perfil
          </button>
        </nav>
        <nav>
          <button
            id="menuList"
            onClick={() => navigate("/dashboardstudentscourses")}
          >
            Cursos
          </button>
        </nav>
        <nav>
          <button
            id="menuList"
            onClick={() => navigate("/dashboardstudentgodparents")}
          >
            Padrinhos
          </button>
        </nav>
        <nav>
          <button
            id="menuList"
            onClick={() => navigate("/componentpartnerschools")}
          >
            Escolas
          </button>
        </nav>
        <nav>
          <button id="menuList" onClick={() => navigate("/favoritecourses")}>
            Favoritos
          </button>
        </nav>
      </ul>
      <button id="exit" onClick={handleExit}>
        Sair
      </button>
    </MenuGodSon>
  );
};
