import { MenuGodSon } from "./styled";

export const MenuGodson = () => {
  return (
    <MenuGodSon>
      <img src="" alt="Foto do usuário" />
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
