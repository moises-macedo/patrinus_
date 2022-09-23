import { MenuGodSon } from "./styled";
import { FaUserAlt } from 'react-icons/fa';
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../Provider/User";
import Female  from "../../Assets/Img/female.svg";
import Male from "../../Assets/Img/male.svg"

export const MenuGodson = () => {
  const [ imageUser, setImageUser] = useState()

  const {user} = useContext(UsersContext)
  

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
          <button id="menuList">Perfil</button>
        </nav>
        <nav>
          <button id="menuList">Cursos</button>
        </nav>
        <nav>
          <button id="menuList">Padrinhos</button>
        </nav>
        <nav>
          <button id="menuList">Escolas</button>
        </nav>
        <nav>
          <button id="menuList">Favoritos</button>
        </nav>
      </ul>
      <button id="exit">Sair</button>
    </MenuGodSon>
  );
};
