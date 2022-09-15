import React from "react";
import { Container, InputContainer } from "./style";

export const Input = ( {label,placeholder} ) => {
    return (
        <Container>
      <label>{label}</label>
      <InputContainer >       
        <input placeholder={placeholder}  />
      </InputContainer>      
    </Container>
    )

}  



