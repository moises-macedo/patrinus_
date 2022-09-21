import { Background, Container, Content } from "./style";
import imgEarth from "../../Assets/Img/imgEarth.svg";
import { useContext } from "react";
import { ModalContext } from "../../Provider/ModalStates";
// import { Button } from "../Button";

export const Screen1 = () => {
  const {modalPartnerSchools,setModalPartnerSchools,modalRegisterUser,
    setModalRegisterUser, modalSignUp, setModalSignUp} = useContext(ModalContext)

  const handleClickPartnerSchools = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  setModalPartnerSchools(!modalPartnerSchools)
  }

  const handleClickRegisterUser = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  setModalRegisterUser(!modalRegisterUser)
  }
  const handleClickSignUp = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  setModalSignUp(!modalSignUp)
  }


  return (
    <Background>
      <Container>
        <Content>
          <header>
            <p className="logo">Patrinus</p>
            <div>
            <button className="button_register" onClick={handleClickRegisterUser}>Cadastrar</button>
            
            <div className="button__signIn-div" onClick={handleClickSignUp}>
              <button>Entrar</button>
            </div>
            </div>
            
          </header>

          <main>
            <article>
              <p>Talvez você não possa transformar o mundo todo.</p>
              <hr />
              <p>Mas pode mudar a realidade de alguém...</p>
              <hr />
              <p>
                ...Educação muda as pessoas e as pessoas transformam o mundo.
              </p>
              <button className="button_be_a_partner" onClick={handleClickPartnerSchools}>
                Seja escola parceira
              </button>
            </article>

            <aside>
              <img src={imgEarth} alt="ico logo" />
            </aside>
          </main>
        </Content>
      </Container>
      <div>
        <p className="pSup">Apartir de R$1,99 por dia,</p>
        <p className="pUnde">
          você pode apoiar essa experiência transformadora!
        </p>

        <hr />
      </div>
    </Background>
  );
};
