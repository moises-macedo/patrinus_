import { useEffect, useState } from "react";
import { Input } from "../Input";
import { Aside, Form, Section, Title } from "./styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { BiUser, BiMailSend, BiPencil } from "react-icons/bi";
import { MdCorporateFare, MdSettingsCell, MdInfo } from "react-icons/md";
import { toast } from "react-toastify";
import { ModalContext } from "../../Provider/ModalStates";
import { useContext } from "react";

export const ModalAddCourse = ({ id = "modal" }) => {
  const { modalAddCourse,  setModalAddCourse} =
    useContext(ModalContext);

  const formSchema = yup.object().shape({
    nameCurso: yup.string().lowercase(),
    hourlyCharge: yup.string().required("Campo obrigatório"),  
    modalidade: yup.string().required("Campo inválido"),
    descricao: yup.string(),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });


  const handleClick = (e) => {
    if (e.target.id === id) {
        setModalAddCourse(!modalAddCourse);
    }
  };

  const onSubmit = (data) =>{
    console.log(data)
  }

  return (
    <>
      {modalAddCourse ? (
        <Aside
          id={id}
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
          <Section>
            <Title>
              <h2>Adicionar novo curso</h2>
              <div></div>
            </Title>

            <Form onSubmit={handleSubmit(onSubmit)}>

              <Input
                label={<BiUser />}
                placeholder={"Nome do curso"}
                register={register("nameCurso")}
                errors={errors.nameCurso}
              />
              <Input
                label={<BiMailSend />}
                placeholder={"Carga horaria"}
                register={register("hourlyCharge")}
                errors={errors.hourlyCharge}
              />
              <Input
                label={<MdSettingsCell />}
                placeholder={"Modalidade"}
                register={register("modalidade")}
                errors={errors.modalidade}
              />
              <Input
                label={<BiPencil />}
                placeholder={"Descrição"}
                register={register("descricao")}
              />
              <Button theme={"secundary"}>
                <p>Cadastrar</p>
              </Button>
            </Form>
          </Section>
        </Aside>
      ) : null}
    </>
  );
};
