import React from "react";
import { BackGroundDashboard } from "../../Background";

import {CardFavoriteCourse} from "../../CardFavoriteCourse"

import { MenuGodson } from '../../MenuGodson';

import {Container, H2, ContentText, Content, Ul} from "./styled"


export const FavoriteCourses = () => {
  
  return (
    <Container>
      <MenuGodson />
      <Content>
        <ContentText>
          {/* <H2>Seja Bem vindo Fulano</H2> */}
          <h3>Meus Cursos Favoritos</h3>
        </ContentText>
        <Ul>
          {[1,2,3].map((item) => {
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

