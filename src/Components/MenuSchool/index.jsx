import { MenuSchool } from "./styled";

export const SchollMenu = () => {
  return (
    <MenuSchool>
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
          <button id="menuList">Alunos</button>
        </nav>
      </ul>
      <button id="exit">Sair</button>
    </MenuSchool>
  );
};
