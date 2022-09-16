import {
  ModalContainer,
  Content,
  CheckboxContainer,
  ButtonExit,
} from "./styled";
import { Input } from "../Input/index";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../Provider/ModalStates/index";
import { useContext } from "react";
import { FiXCircle } from "react-icons/fi";
import { apiPatrinus } from "../../Services/api";

export const ModalEditProfile = () => {
  const { modalEditProfile, setModalEditProfile } = useContext(ModalContext);

  const handleCloseModalEditProfile = (e) => {
    if (e.target.id === "OutsideModalEditProfile") {
      setModalEditProfile(false);
    }
  };

  const schemaProfileEdit = yup.object().shape({
    name: yup.string(),
    address: yup.string(),
    age: yup.number(),
    cpf: yup.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaProfileEdit),
  });

  // const onSubmit = (data) => {
  //   apiPatrinus
  //     .patch(`/user/${}`)
  //     .then((_) => console.log("ok"))
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      {modalEditProfile ? (
        <ModalContainer
          id="OutsideModalEditProfile"
          onClick={handleCloseModalEditProfile}
        >
          <Content>
            <ButtonExit>
              <FiXCircle onClick={() => setModalEditProfile(false)} />
            </ButtonExit>
            <h2>Editar Perfil</h2>
            <form>
              <Input label="Nome" register={register("name")} />
              <Input label="Endereço" register={register("address")} />
              <Input label="Idade" register={register("age")} />
              <Input label="CPF" register={register("cpf")} />
              <CheckboxContainer>
                <label>Eu confirmo que as informações são verdadeiras</label>
                <input type="checkbox" />
              </CheckboxContainer>
              <div>
                <button id="cancel">Cancelar</button>
                <button id="save" type="submit">
                  Salvar
                </button>
              </div>
            </form>
          </Content>
        </ModalContainer>
      ) : null}
    </>
  );
};
