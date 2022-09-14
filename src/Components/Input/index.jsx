import React from "react";
import { Container, InputContainer } from "./style";

export const Input = ({ label, register, type }) => {
  // const register = useForm();
  return (
    <Container>
      <label>{label}</label>
      <InputContainer>
        <input {...register} type={type} />
      </InputContainer>
    </Container>
  );
};
