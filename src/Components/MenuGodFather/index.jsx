import { MenuGodfather } from "./styled";

export const MenuGodFather = () => {
  return (
    <MenuGodfather>
      <img src="" alt="Foto do usuário" />
      <h2>nome do usuário</h2>
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
