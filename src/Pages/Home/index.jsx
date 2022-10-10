import { Screen1 } from "../../Components/HpScreen1";
import { PartnerSchools } from "../../Components/PartnerSchools";
import { HowToBeGodfather } from "../../Components/HowToBeGodfather";
import { CardDev } from "../../Components/CardDev";
import { Footer } from "../../Components/Footer";
import { Container } from "./style";
import { ModalRegisterSchool } from "../../Components/ModalRegisterSchool";
import { useContext } from "react";
import { ModalContext } from "../../Provider/ModalStates";
import { ModalCreateUser } from "../../Components/ModalCreateUser";
import { Login } from "../../Components/Login";
import { Navigate } from "react-router-dom";
import { UsersContext } from "../../Provider/User";

export const Home = ({ authenticated }) => {
  const { user } = useContext(UsersContext);
  const { modalPartnerSchools, setModalPartnerSchools } =
    useContext(ModalContext);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setModalPartnerSchools(!modalPartnerSchools);
  };

  if (authenticated) {
    if (user.type === "aluno") {
      return <Navigate to={"/dashboardgodsonprofile"} />;
    } else if (user.type === "padrinho") {
      return <Navigate to={"/profile-godfather"} />;
    }
  }
  return (
    <>
      <Screen1 />
      <PartnerSchools />
      <HowToBeGodfather />
      <Container>
        <p>
          Seja uma <button onClick={handleClick}>#escola</button> parceira e
          ajude melhorar a educação!
        </p>
      </Container>
      <CardDev />
      <Footer />
      {/* Modais */}
      <ModalRegisterSchool />
      <ModalCreateUser />
      <Login />
    </>
  );
};
