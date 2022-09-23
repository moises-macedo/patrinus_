import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../Provider/User";
import { MenuGodfather, Container } from "./styled";
import { useNavigate } from "react-router-dom";
import Male from "../../Assets/Img/male.svg";
import Female from "../../Assets/Img/female.svg";
import { MenuMobile } from "../MenuMobile/Index";

export const MenuGodFather = () => {
  const arr = [
    { text: "Perfil", link: "/profile-godfather" },
    { text: "Top Cusros", link: "/godfather-top-courses" },
    { text: "Apadrinhados", link: "/dashboard-sponsored" },
  ];

  const { setAuthenticated, authenticated, user } = useContext(UsersContext);

  const [imageUser, setImageUser] = useState();
  const navigate = useNavigate();

  const handleExit = () => {
    localStorage.clear();
    setAuthenticated(!authenticated);
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    if (user?.sex === "masculino") {
      setImageUser(Male);
    }
    if (user?.sex === "feminino") {
      setImageUser(Female);
    }
  }, [user]);

  return (
    <Container>

      <div className="mobile">
        <MenuMobile arr={arr}>
        <img src={imageUser} alt="Foto do usuário" />
          <h2>{user.name}</h2>
          <ul>
            <nav>
              <button
                id="menuList"
                onClick={() => navigate("/profile-godfather")}
              >
                Perfil
              </button>
            </nav>
            <nav>
              <button
                id="menuList"
                onClick={() => navigate("/godfather-top-courses")}
              >
                Top Cursos
              </button>
            </nav>
            <nav>
              <button
                id="menuList"
                onClick={() => navigate("/dashboard-sponsored")}
              >
                Apadrinhados
              </button>
            </nav>
          </ul>
          <button id="exit" onClick={handleExit}>
            Sair
          </button>
        </MenuMobile>
      </div>

      <div className="desktop">
        <MenuGodfather>
          <img src={imageUser} alt="Foto do usuário" />
          <h2>{user.name}</h2>
          <ul>
            <nav>
              <button
                id="menuList"
                onClick={() => navigate("/profile-godfather")}
              >
                Perfil
              </button>
            </nav>
            <nav>
              <button
                id="menuList"
                onClick={() => navigate("/godfather-top-courses")}
              >
                Top Cursos
              </button>
            </nav>
            <nav>
              <button
                id="menuList"
                onClick={() => navigate("/dashboard-sponsored")}
              >
                Apadrinhados
              </button>
            </nav>
          </ul>
          <button id="exit" onClick={handleExit}>
            Sair
          </button>
        </MenuGodfather>
      </div>
    </Container>
  );
};
