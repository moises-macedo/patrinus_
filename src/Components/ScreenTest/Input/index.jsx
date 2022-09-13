import React from "react";
import { Container, InputContainer } from "./style";

export const Input = ( {label} ) => {
    return (
        <Container>
      <label>{label}</label>
      <InputContainer >       
        <input   />
      </InputContainer>      
    </Container>
    )

}  



