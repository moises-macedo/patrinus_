import React from "react";
import { Container, InputContainer } from "./style";


export const Input = ({disabled, label, register,placeholder, errors, ...rest }) => {
  
  return (
    <Container errors={errors}>
      <label errors={errors}>
        {label} <span>{errors !== undefined ? errors.message : null}</span>
      </label>
      <InputContainer>
        <input {...register} {...rest} placeholder={placeholder} disabled={disabled} />
      </InputContainer>

    </Container>
  );
};
