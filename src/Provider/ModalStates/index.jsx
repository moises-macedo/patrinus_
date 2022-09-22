import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalRegisterUser, setModalRegisterUser] = useState(false);
  const [modalEditProfile, setModalEditProfile] = useState(false);
  const [modalPartnerSchools, setModalPartnerSchools] = useState(false);
  const [modalAddCourse, setModalAddCourse] = useState(false);

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
