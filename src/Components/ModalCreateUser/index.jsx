import * as yup from "yup";
import { apiPatrinus } from "../../Services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input/index";

import {
  Container,
  Content,
  InputBox,
  ButtonExit,
  PageContainer,
} from "./styled.js";

import { FiXCircle } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ModalContext } from "../../Provider/ModalStates";
import { TitleScreenIndex } from "../TitleScreenIndex";
import { TextScreenIndex } from "../TextScreenIndex";

export const ModalCreateUser = () => {
  const { setModalRegisterUser, modalRegisterUser } = useContext(ModalContext);

  const signUpSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup
      .string()
      .min(8, "Minimo de 8 digitos")
      .email("Email inválido")
      .required("Campo Obrigatório"),
    password: yup.string().required(""),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha diferentes"),
    type: yup.string(),
  });
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignup = (data) => {
    apiPatrinus
      .post("users/register", data)
      .then((_) => console.log("ok"))
      .catch((err) => console.log(err));
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "OutsideModal") {
      setModalRegisterUser(!modalRegisterUser);
    }
  };

  return (
    <>
      {modalRegisterUser ? (
        <PageContainer id="OutsideModal" onClick={handleOutsideClick}>
          <Container>
            <Content>
              <ButtonExit>
                <FiXCircle
                  onClick={() => setModalRegisterUser(!modalRegisterUser)}
                />
              </ButtonExit>
              <TextScreenIndex text={"Bem vindo a Patrinus"}/>
              <TitleScreenIndex text={"Cadastre-se"} />
              <form onSubmit={handleSubmit(handleSignup)}>
                <Input label="Nome" register={register("name")} />
                <Input label="Email" register={register("email")} />
                <Input
                  label="Senha"
                  type="password"
                  register={register("password")}
                />
                <Input label="Confirme sua senha" type="password" />

                <InputBox>
                  <label>Eu sou...</label>
                  <select {...register("type")}>
                    <option>aluno</option>
                    <option>padrinho</option>
                  </select>
                </InputBox>

                <button type="submit">Cadastre-Se</button>
              </form>
            </Content>
          </Container>
        </PageContainer>
      ) : null}
    </>
  );
};
