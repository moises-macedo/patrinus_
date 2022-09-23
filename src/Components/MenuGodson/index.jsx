import { MenuGodSon } from "./styled";
import { FaUserAlt } from 'react-icons/fa';
import { useContext } from "react";
import { UsersContext } from "../../Provider/User";

export const MenuGodson = () => {

  const {user} = useContext(UsersContext)

  return (
    <MenuGodSon>
      <img src={<FaUserAlt/>} alt={user?.name} />
      <h2>nome do usuário</h2>
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
