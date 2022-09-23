import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { UsersContext } from "../User";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalRegisterUser, setModalRegisterUser] = useState(false);
  const [modalEditProfile, setModalEditProfile] = useState(true);
  const [modalEditSchool, setModalEditSchool] = useState(false);
  const [modalPartnerSchools, setModalPartnerSchools] = useState(false);
  const [modalAddCourse, setModalAddCourse] = useState(false);

  const { user} = useContext(UsersContext)

  useEffect(()=>{
    if(user?.age){
      setModalEditProfile(false)
    }

  },[user])

  if (
    !modalPartnerSchools ||
    !modalRegisterUser ||
    !modalSignUp ||
    !modalAddCourse
  ) {
    document.querySelector("body").style.overflow = "auto";
  }
  if (
    modalPartnerSchools ||
    modalRegisterUser ||
    modalSignUp ||
    modalAddCourse
  ) {
    document.querySelector("body").style.overflow = "hidden";
  }

  return (
    <ModalContext.Provider
      value={{
        modalSignUp,
        setModalSignUp,
        modalEditProfile,
        setModalEditProfile,
        modalPartnerSchools,
        setModalPartnerSchools,
        modalRegisterUser,
        setModalRegisterUser,
        modalAddCourse,
        setModalAddCourse,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
