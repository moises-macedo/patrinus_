import React from "react";
import { BackGroundDashboard } from "../../Background";

import { CardFavoriteCourse } from "../../CardFavoriteCourse";
import { MenuGodson } from "../../MenuGodson/index";
import { Container, H2, ContentText, Content, Ul } from "./styled";

export const FavoriteCourses = () => {
  const pd = [
    {
      id: 1,
      name: "Jaleco",
      img: " https://th.bing.com/th/id/R.341b0554c8b0e33e8ea9cb88066c506d?rik=cvtoso%2bAflRONA&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      name: "Avental",
      img: " https://th.bing.com/th/id/R.341b0554c8b0e33e8ea9cb88066c506d?rik=cvtoso%2bAflRONA&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      name: "Touca",
      img: "https://th.bing.com/th/id/R.341b0554c8b0e33e8ea9cb88066c506d?rik=cvtoso%2bAflRONA&pid=ImgRaw&r=0",
    },
    {
      id: 4,
      name: "Fronha",
      img: "https://th.bing.com/th/id/R.341b0554c8b0e33e8ea9cb88066c506d?rik=cvtoso%2bAflRONA&pid=ImgRaw&r=0",
    },
    {
      id: 5,
      name: "Embalagem",
      img: "https://th.bing.com/th/id/R.341b0554c8b0e33e8ea9cb88066c506d?rik=cvtoso%2bAflRONA&pid=ImgRaw&r=0",
    },
    {
      id: 6,
      name: "Porta talher",
      img: " https://th.bing.com/th/id/R.341b0554c8b0e33e8ea9cb88066c506d?rik=cvtoso%2bAflRONA&pid=ImgRaw&r=0",
    },
    {
      id: 7,
      name: "Porta absorvente",
      img: "https://th.bing.com/th/id/R.341b0554c8b0e33e8ea9cb88066c506d?rik=cvtoso%2bAflRONA&pid=ImgRaw&r=0",
    },
  ];

  return (
    <Container>
      <MenuGodson />
      <Content>
        <ContentText>
          <H2>Seja Bem vindo Fulano</H2>
          <h3>Meus Cursos Favoritos</h3>
        </ContentText>
        <Ul>
          {pd.map((item) => {
            return (
              <CardFavoriteCourse
                key={item.id}
                img={item.img}
                name={item.name}
              />
            );
          })}
        </Ul>
      </Content>
      <BackGroundDashboard />
    </Container>
  );
};
