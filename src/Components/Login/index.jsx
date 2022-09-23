import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiPatrinus } from "../../Services/api";
import { Button } from "../Button";
import { Input } from "../Input";
import { TextScreenIndex } from "../TextScreenIndex";
import { TitleScreenIndex } from "../TitleScreenIndex";

import { FiXCircle, FiEyeOff, FiEye } from "react-icons/fi";

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
import { toast } from "react-toastify";
import { ReCaptchaComponent } from "./recaptcha";
import { useContext } from "react";
import { ModalContext } from "../../Provider/ModalStates";
import { UsersContext } from "../../Provider/User";

export const Login = ({ id = "loginModal" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [valid, setValid] = useState(false);
  const { modalSignUp, setModalSignUp } = useContext(ModalContext);
  const { setToken, setUser, setAuthenticated, user } =
    useContext(UsersContext);

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
      setModalSignUp(!modalSignUp);
    }
  };

  const navigate = useNavigate();

  const onSubmitFunction = (data) => {
    if (data && valid === true) {
      apiPatrinus
        .post("/login", data)
        .then((response) => {
          localStorage.setItem("@Patrinus:token", response.data.accessToken);
          setToken(response.data.accessToken);
          setUser(response.data.user);
          setAuthenticated(true);
          reset();
          if (user.type === "aluno") {
            navigate("/dashboardgodsonprofile");
          } else if (user.type === "padrinho") {
            navigate("/profile-godfather");
          }
        })
        .catch((_) => {
          toast.error("Email ou Senha inválidos!!");
        });
    } else {
      toast.error("Humano ou robo?");
    }
  };

  return (
    <>
      {modalSignUp ? (
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
                <FiXCircle onClick={() => setModalSignUp(!modalSignUp)} />
                <TextScreenIndex text="Bem Vindo a Patrinus" />
                <TitleScreenIndex text="Login" />
              </ContentText>
              <form onSubmit={handleSubmit(onSubmitFunction)}>
                <Input
                  register={register("email")}
                  errors={errors.email}
                  label="Email"
                  type="text"
                />
                <Input
                  register={register("password")}
                  errors={errors.password}
                  label="Senha"
                  type={showPassword ? "text" : "password"}
                  Icon={showPassword ? FiEye : FiEyeOff}
                  click={() => setShowPassword(!showPassword)}
                />
                <ReCaptchaComponent setValid={setValid} />
                <Button theme="secundary" type="submit">
                  Entrar
                </Button>
              </form>
              <p>Esqueci a senha</p>
            </ContentLogin>
          </Loginbase>
        </Container>
      ) : null}
    </>
  );
};
