import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../Provider/User";
import { MenuGodfather } from "./styled";
import Female  from "../../Assets/Img/female-godfather.svg";
import Male from "../../Assets/Img/male-godfather.svg"

export const MenuGodFather = () => {
  const [imageUser, setImageUser] = useState();

  const { user } = useContext(UsersContext);

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
          <button id="menuList">Perfil</button>
        </nav>
        <nav>
          <button id="menuList">Top Cursos</button>
        </nav>
        <nav>
          <button id="menuList">Apadrinhados</button>
        </nav>
      </ul>
      <button id="exit">Sair</button>
    </MenuGodfather>
  );
};
