import { MenuGodSon, Container } from "./styled";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../Provider/User";
import Female from "../../Assets/Img/female.svg";
import Male from "../../Assets/Img/male.svg";
import { MenuMobile } from "../MenuMobile/Index";

export const MenuGodson = () => {
  const arr = [
    { text: "Perfil", link: "/dashboardgodsonprofile" },
    { text: "Cursos", link: "/dashboardstudentscourses" },
    { text: "Padrinhos", link: "/dashboardstudentgodparents" },
    { text: "Escolas", link: "/componentpartnerschools" },
    { text: "Favoritos", link: "/favoritecourses" },
  ];

  const [imageUser, setImageUser] = useState();

  const { user, setAuthenticated, authenticated } = useContext(UsersContext);
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
          <img src={imageUser} alt={user?.name} />
          <h2>{user.name}</h2>

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
              <button
                id="menuList"
                onClick={() => navigate("/favoritecourses")}
              >
                Favoritos
              </button>
            </nav>
          </ul>
          <button id="exit" onClick={handleExit}>
            Sair
          </button>
        </MenuMobile>
      </div>

      <div className="desktop"> 
        <MenuGodSon>
          <img src={imageUser} alt={user?.name} />
          <h2>{user.name}</h2>

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
              <button
                id="menuList"
                onClick={() => navigate("/favoritecourses")}
              >
                Favoritos
              </button>
            </nav>
          </ul>
          <button id="exit" onClick={handleExit}>
            Sair
          </button>
        </MenuGodSon>
      </div>
    </Container>
  );
};
