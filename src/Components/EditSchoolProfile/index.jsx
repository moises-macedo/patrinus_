import { useContext } from "react"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../Provider/ModalStates"
import { apiPatrinus } from "../../Services/api";
import { Input } from "../Input";
import { FiXCircle } from "react-icons/fi";
import { ModalContainer, Content, ButtonExitEditSchool,ButtonsStyle } from "./style";


export const ModalEditSchoolProfile = () =>{
        const {modalEditSchool, setModalEditSchool} = useContext(ModalContext);
        
        const handleCloseModalEditSchoolProfile = (e) => {
            if (e.target.id === "closeModalEditProfileSchool") {
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

        const onSubmit = (data) => {
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
           
            {  modalEditSchool ? (
                        <ModalContainer id="closeModalEditProfileSchool" onClick={handleCloseModalEditSchoolProfile}>
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