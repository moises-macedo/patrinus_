import { useEffect, useState } from "react";
import { apiReceita } from "../../Services/api";
import { Input } from "../Input";
import { Aside, Form, Section, InputCheckBox, Title } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { BiUser, BiMailSend, BiPencil } from "react-icons/bi";
import { MdCorporateFare, MdSettingsCell, MdInfo } from "react-icons/md";
import { toast } from "react-toastify";

export const ModalRegisterSchool = ({onClick, setOnclick,id="modal"}) => {
  const [cnpj, setCnpj] = useState();
  const [corporateName, setCorporateName] = useState();

  const formSchema = yup.object().shape({
    cnpj: yup.string().required("CNPJ obrigatório!").lowercase(),
    name: yup.string().lowercase(),
    corporateName: yup.string(),
    email: yup
      .string()
      .email("E-mail invalido")
      .required("E-mail obrigatório!")
      .lowercase(),
    telephone: yup
      .string()
      .matches(
        "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
        "Telefone inválido"
      ),
    accept: yup.boolean().oneOf([true], "Necessário aceitar os termos"),
    observation: yup.string(),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    const user = {...data, corporateName}

    if(user){
      toast.success("Enviado com sucesso")
      reset()
    }
  };

  const loadCorporateName = () => {
    if (cnpj !== undefined) {
      apiReceita
        .get(
          `https://cors-fruits.herokuapp.com/https://www.receitaws.com.br/v1/cnpj/${cnpj}`
        )
        .then((res) => setCorporateName(res.data.nome));
    }
  };

  const handleClick = (e) =>{
    if(e.target.id === id){
      setOnclick(!onClick)
    }
  }

  useEffect(() => {
    loadCorporateName();
  }, [cnpj]);

  return (
    <Aside id={id} onClick={handleClick}>
      <Section>
        <Title>
          <h2>Seja escola parceira</h2>
          <div></div>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            onChange={(e) => setCnpj(e.target.value)}
            label={<MdInfo />}
            placeholder={"Informe o CNPJ"}
            errors={errors.cnpj}
            register={register("cnpj")}
          />
          <Input
            defaultValue={corporateName}
            label={<MdCorporateFare />}
            placeholder={"Será carregado automaticamente"}
            disabled={true}
            register={register("corporateName")}
            className={"input"}
          />
          <Input
            label={<BiUser />}
            placeholder={"Informe nome do responsável"}
            register={register("name")}
            errors={errors.name}
          />
          <Input
            label={<BiMailSend />}
            placeholder={"Informe e-mail "}
            register={register("email")}
            errors={errors.email}
          />
          <Input
            label={<MdSettingsCell />}
            placeholder={"Informe telefone"}            
            register={register("telephone")}
            errors={errors.telephone}
          />
          <Input
            label={<BiPencil />}
            placeholder={"Observação"}            
            register={register("observation")}
          />
          <InputCheckBox>
            <input type={"checkbox"} />
            <p>Eu confirmo que a empresa e o responsável acima autorizou o contato</p>
          </InputCheckBox>
          <Button theme={"secundary"}>
            <p>Enviar</p>
          </Button>
        </Form>
      </Section>
    </Aside>
  );
};
