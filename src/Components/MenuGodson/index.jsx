import { MenuGodSon } from "./styled";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../Provider/User";
import Female  from "../../Assets/Img/female.svg";
import Male from "../../Assets/Img/male.svg"

export const MenuGodson = () => {

  const [ imageUser, setImageUser] = useState()

   const { user, setAuthenticated, authenticated } = useContext(UsersContext);
  const navigate = useNavigate();
  const handleExit = () => {
    localStorage.clear();
    setAuthenticated(!authenticated);
    navigate("/");
    window.location.reload();
  };
  

  useEffect(()=>{
    if(user?.sex === "masculino"){
      setImageUser(Male)
    }
    if(user?.sex === "feminino"){
      setImageUser(Female)
    }
  },[user])

  return (
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
