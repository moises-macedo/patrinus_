import React from "react";
import { useNavigate } from "react-router-dom";
import { apiPatrinus } from "../../Services/api";
// import { Button } from "../Button";
import { Input } from "../Input";
import { TextScreenIndex } from "../TextScreenIndex";
import { TitleScreenIndex } from "../TitleScreenIndex";

import { FiXCircle } from "react-icons/fi";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Container,
  ContentText,
  Loginbase,
  ContentLogin,
  Blur,
} from "./styled";

export const Login = ({ id = "loginModal", setOpenLogin, openLogin }) => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!").email("Email inválido"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const closeModalEvent = (e) => {
    if (e.target.id === id) {
      setOpenLogin(false);
    }
  };

  const navigate = useNavigate();

  const onSubmitFunction = (data) => {
    apiPatrinus
      .post("/login", data)
      .then((response) => {
        console.log("foi");
        localStorage.setItem("@Patrinus:token", response.data.accessToken);
      })
      .catch((err) => {
        alert("não foi");
      });
  };

  return (
    <Container
      onClick={closeModalEvent}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Blur id={id}></Blur>
      <Loginbase>
        <ContentLogin>
          <ContentText>
            <FiXCircle onClick={() => setOpenLogin(false)} />
            <TextScreenIndex text="Bem Vindo a Patrinus" />
            <TitleScreenIndex text="Login" />
          </ContentText>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              register={register}
              nome={"email"}
              errors={errors.email}
              label="Email"
              type="text"
            />
            <Input
              register={register}
              nome={"password"}
              errors={errors.password}
              label="Senha"
              type="password"
            />
            <button color="login" type="submit">
              Entrar
            </button>
          </form>
          <p>Esqueci a senha</p>
        </ContentLogin>
      </Loginbase>
    </Container>
  );
};
