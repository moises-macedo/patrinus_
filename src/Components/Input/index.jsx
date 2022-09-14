import React from "react";
import { Container, InputContainer } from "./style";

export const Input = ({ label, register, errors, ...rest }) => {
  console.log(errors)
  return (
    <Container errors={errors}>
      <label errors={errors}>
        {label} <span>{errors !== undefined ? errors.message : null}</span>
      </label>
      <InputContainer>
        <input {...register} {...rest} />
      </InputContainer>
    </Container>
  );
};
