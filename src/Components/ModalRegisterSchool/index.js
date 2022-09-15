import { useState } from "react"
import { apiReceita } from "../../Services/api"
import { Input } from "../Input"
import { Aside, Form, Section, InputCheckBox, Title } from "./style"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { BiUser, BiMailSend, BiPencil } from 'react-icons/bi';
import { MdCorporateFare, MdSettingsCell, MdInfo } from 'react-icons/md';

export const ModalRegisterSchool = () => {
    const [cnpj, setCnpj] = useState();
    const [corporateName, setCorporateName] = useState();

    const formSchema = yup.object().shape({
        cnpj: yup.string().required("CNPJ obrigatório!").lowercase(),
        name: yup.string().lowercase(),
        corporateName: yup.string(),
        email: yup.string().email('E-mail invalido').required("E-mail obrigatório!").lowercase(),
        telephone: yup.string().matches("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$", "Telefone inválido"),
        accept: yup.boolean().oneOf([true], 'Necessário aceitar os termos'),
        observation: yup.string(),

    })

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmit = (data) => {

    }

    const loadCorporateName = () => {
        if (cnpj !== undefined) {

            apiReceita.get(`https://cors-fruits.herokuapp.com/https://www.receitaws.com.br/v1/cnpj/${cnpj}`)
                .then((res) =>
                    setCorporateName(res.data.nome))

        }
    }

    return (
        <Aside>
            <Section>
                <Title>
                    <h2>Seja escola parceira</h2>
                    <div></div>
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        name={"cnpj"}
                        label={<MdInfo />}
                        placeholder={"Informe o CNPJ"}
                        register={register}
                    />
                    <Input
                        name={"corporateName"}
                        label={<MdCorporateFare />}
                        placeholder={"Será carregado automaticamente"}
                        register={register} />                        
                    <Input
                        name={"name"}
                        label={<BiUser />}
                        placeholder={"Informe nome do responsável"}
                        register={register} />
                    <Input
                        name={"email"}
                        label={<BiMailSend />}
                        placeholder={"Informe e-mail "}
                        register={register} />
                    <Input
                        name={"telephone"}
                        label={<MdSettingsCell />}
                        placeholder={"Informe telefone"}
                        register={register}
                    />
                    <Input
                        name={"observation"}
                        label={<BiPencil />}
                        placeholder={"Observação"}
                        register={register} />
                    <InputCheckBox>
                        <input type={"checkbox"} />
                        <p>Eu concordo com os Termos de Usuário</p>
                    </InputCheckBox>
                    <Button theme={"secundary"}>
                        <p>Enviar</p>
                    </Button>
                </Form>
            </Section>
        </Aside>
    )
}