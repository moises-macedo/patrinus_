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
import { useState } from "react";
import { toast } from "react-toastify";
import { UsersContext } from "../../Provider/User";

export const ModalEditProfile = () => {
  const { modalEditProfile, setModalEditProfile } = useContext(ModalContext);
  const { user } = useContext(UsersContext);
  const [handleIsChecked, setHandleIsChecked] = useState(false);

  const handleCloseModalEditProfile = (e) => {
    if (e.target.id === "OutsideModalEditProfile") {
      setModalEditProfile(false);
    }
  };
  console.log(user);
  const schemaProfileEdit = yup.object().shape({
    address: yup.string(),
    age: yup.number(),
    cpf: yup.number(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schemaProfileEdit),
  });

  const onSubmit = (data) => {
    if (!handleIsChecked) {
      toast.error("Você precisar aceitar os termos!!", {
        toastId: "toastError",
      });
      return null;
    }
    apiPatrinus
      .patch(`/users/${user.id}`, data)
      .then((_) => {
        toast.success("Informações alteradas com sucesso!", {
          toastId: "toastSuccess",
        });
        setModalEditProfile(false);
      })
      .catch((err) => console.log(err));
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input label="Nome" disabled={true} placeholder={user.name} />
              <Input label="Endereço" register={register("address")} />
              <Input label="Idade" register={register("age")} type="number" />
              <Input label="CPF" register={register("cpf")} type="number" />
              <CheckboxContainer>
                <label>Eu confirmo que as informações são verdadeiras</label>
                <input
                  type="checkbox"
                  onChange={() => setHandleIsChecked(true)}
                />
              </CheckboxContainer>
              <div>
                <button id="cancel" onClick={() => setModalEditProfile(false)}>
                  Cancelar
                </button>
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
