import * as yup from "yup";
import { apiPatrinus } from "../../Services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input/index";
import { toast } from "react-toastify";
import {
  Container,
  Content,
  InputBox,
  ButtonExit,
  PageContainer,
} from "./styled.js";
import { FiXCircle, FiEyeOff, FiEye } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ModalContext } from "../../Provider/ModalStates";
import { TitleScreenIndex } from "../TitleScreenIndex";
import { TextScreenIndex } from "../TextScreenIndex";
import { useState } from "react";

export const ModalCreateUser = () => {
  const { setModalRegisterUser, modalRegisterUser } = useContext(ModalContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const signUpSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .required("É necessário uma senha")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$",
        "Verifique sua senha!"
      )
      .min(8, "Minimo de 8 Digitos"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha diferentes"),
    type: yup.string(),
    sex: yup.string().required("Selecione seu genêro"),
  });
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignup = ({ name, email, password, type, sex }) => {
    const user = { name, email, password, type, sex };
    apiPatrinus
      .post("users/register", user)
      .then((_) => {
        toast.success("Cadastro Efetuado!!");
        setModalRegisterUser(!modalRegisterUser);
        reset({
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
        });
      })
      .catch((_) => {
        toast.error("Email ou senha inválidos!!");
      });
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
              <TextScreenIndex text={"Bem vindo a Patrinus"} />
              <TitleScreenIndex text={"Cadastre-se"} />
              <form onSubmit={handleSubmit(handleSignup)}>
                <Input
                  label="Nome"
                  register={register("name")}
                  errors={errors.name}
                />
                <Input
                  label="Email"
                  register={register("email")}
                  errors={errors.email}
                />
                <Input
                  label="Senha"
                  type={showPassword ? "text" : "password"}
                  register={register("password")}
                  errors={errors.password}
                  Icon={showPassword ? FiEye : FiEyeOff}
                  click={() => setShowPassword(!showPassword)}
                />
                <Input
                  label="Confirme sua senha"
                  type={showConfirmPassword ? "text" : "password"}
                  register={register("passwordConfirm")}
                  errors={errors.passwordConfirm}
                  Icon={showConfirmPassword ? FiEye : FiEyeOff}
                  click={() => setConfirmShowPassword(!showConfirmPassword)}
                />

                <InputBox>
                  <label>Eu sou...</label>
                  <select {...register("type")}>
                    <option>aluno</option>
                    <option>padrinho</option>
                  </select>
                </InputBox>
                <InputBox>
                  <label>Genêro</label>
                  <select {...register("sex")}>
                    <option>masculino</option>
                    <option>feminino</option>
                  </select>
                </InputBox>
                <button type="submit">Cadastre-se</button>
              </form>
            </Content>
          </Container>
        </PageContainer>
      ) : null}
    </>
  );
};
