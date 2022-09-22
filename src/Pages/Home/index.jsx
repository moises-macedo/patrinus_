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
import { DashboardSchool } from "../DashboardSchool";

export const Home = ({ authenticated }) => {
  const { modalPartnerSchools, setModalPartnerSchools } =
    useContext(ModalContext);

    // apagar

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setModalPartnerSchools(!modalPartnerSchools);
  };


  if (authenticated ) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <>
    <DashboardSchool />
    </>
  );
};
