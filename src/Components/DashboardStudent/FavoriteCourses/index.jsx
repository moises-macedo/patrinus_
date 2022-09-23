import React from "react";
import { BackGroundDashboard } from "../../Background";

import {CardFavoriteCourse} from "../../CardFavoriteCourse"

import { MenuGodson } from '../../MenuGodson';

import {Container, H2, ContentText, Content, Ul} from "./styled"

import {useCourses} from "../../../Provider/Courses"


export const FavoriteCourses = () => {

  const {myCourses} = useCourses()
  console.log(myCourses)
  return (
    <Container>
      <MenuGodson />
      <Content>
        <ContentText>
          {/* <H2>Seja Bem vindo Fulano</H2> */}
          <h3>Meus Cursos Favoritos</h3>
        </ContentText>
        <Ul>
          {myCourses.map((item, index) => {
            return (
              <CardFavoriteCourse
                key={index}
                img={item.image}
                name={item.curso}
              />
            );
          })}
        </Ul>
      </Content>
      <BackGroundDashboard />
    </Container>
  );
};

