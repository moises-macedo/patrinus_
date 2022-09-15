import { ModalContainer, Content } from "./styled";
import { Input } from "../Input/index";

export const ModalEditProfile = () => {
  return (
    <ModalContainer>
      <Content>
        <h2>Editar Perfil</h2>
        <form>
          <Input label="Nome" />
          <Input label="Endereço" />
          <Input label="Idade" />
          <Input label="CPF" />
          <div>
            <button id="cancel"> Cancelar</button>
            <button id="save">Salvar</button>
          </div>
        </form>
      </Content>
    </ModalContainer>
  );
};
