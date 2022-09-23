import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../Provider/User";
import { MenuGodfather } from "./styled";
import { useNavigate } from "react-router-dom";
import Male from "../../Assets/Img/male.svg";
import Female from "../../Assets/Img/female.svg";

export const MenuGodFather = () => {
  const { setAuthenticated, authenticated,user } = useContext(UsersContext);

  const [imageUser,setImageUser ] =useState()
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
    <MenuGodfather>
      <img src={imageUser} alt="Foto do usuário" />
      <h2>{user.name}</h2>
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
