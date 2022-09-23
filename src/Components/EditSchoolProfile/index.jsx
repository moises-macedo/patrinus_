import { useContext } from "react"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../Provider/ModalStates"

import { Input } from "../Input";
import { FiXCircle } from "react-icons/fi";
import { ModalContainer, Content, ButtonExitEditSchool,ButtonsStyle } from "./style";


export const ModalEditSchoolProfile = () =>{
        const {modalEditSchool, setModalEditSchool} = useContext(ModalContext);
        
        const handleCloseModalEditSchoolProfile = (e) => {
            if (e.target.id === "OutsideModalEditProfile") {
                setModalEditSchool(false);
            }
          };

         const schemaProfileEdit = yup.object().shape({
            name: yup.string(),
            description: yup.string(),
            
          });

          
        const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm({
        resolver: yupResolver(schemaProfileEdit),
        });
        
        return (

            <>
           
            {  modalEditSchool ? (
                        <ModalContainer  onClick={handleCloseModalEditSchoolProfile}>
                        <Content>
                            <ButtonExitEditSchool>
                             <FiXCircle onClick={() => setModalEditSchool(false)} />
                            </ButtonExitEditSchool>
                            <h2>Editar Perfil Escola</h2>
                            <form>
                           <Input  label="NomeEscola" register={register("name")}/>
                           <Input  label="descrição" register={register("description")}/>
                            </form>
                            <ButtonsStyle>
                                <button id="cancel">Cancelar</button>
                                <button id="save" type="submit">Salvar</button>
                            </ButtonsStyle>


                        </Content>


                    </ModalContainer>
            ) : null} 
            
            </>
        )
}