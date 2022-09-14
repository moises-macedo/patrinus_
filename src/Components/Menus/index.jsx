import {
  MenuGodSon,
  MenuGodfather,
  MenuSchool,
  UnderlineSelect,
} from "./styled";

export const Menus = () => {
  const godsonMenu = ["Perfil", "Cursos", "Padrinhos", "Escolas", "Favoritos"];
  const godfatherMenu = ["Perfil", "Cursos", "Apadrinhados", "Escolas"];
  const schoolMenu = ["Perfil", "Cursos", "Alunos"];
  return (
    <MenuGodSon>
      <img src="" alt="Foto do usuário" />
      <h2>nome do usuário</h2>
      <ul>
        {godsonMenu.map((menuItems) => (
          <nav>
            <button id="menuList">{menuItems}</button>
          </nav>
        ))}
      </ul>
      <button id="exit">Sair</button>
    </MenuGodSon>
    // <MenuGodfather>
    //   <img src="" alt="Foto do usuário" />
    //   <h2>nome do usuário</h2>
    //   <ul>
    //     {godfatherMenu.map((menuItems) => (
    //       <nav>
    //         <button id="menuList">{menuItems}</button>
    //       </nav>
    //     ))}
    //   </ul>
    //   <button id="exit">Sair</button>
    // </MenuGodfather>
    // <MenuSchool>
    //   <img src="" alt="Foto do usuário" />
    //   <h2>nome do usuário</h2>
    //   <ul>
    //     {schoolMenu.map((menuItems) => (
    //       <nav>
    //         <button id="menuList">{menuItems}</button>
    //       </nav>
    //     ))}
    //   </ul>
    //   <button id="exit">Sair</button>
    // </MenuSchool>
  );
};
