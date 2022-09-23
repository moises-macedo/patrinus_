import React from "react";

import { Container } from "./styled";

export const CardFavoriteCourse = ({ img, name }) => {
  return (
    <Container>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <p>{name}</p>
    </Container>
  );
};
