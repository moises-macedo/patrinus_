import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalRegisterUser, setModalRegisterUser] = useState(false);
  const [modalEditProfile, setModalEditProfile] = useState(true);
  const [modalPartnerSchools, setModalPartnerSchools] = useState(false);

  if (!modalPartnerSchools || !modalRegisterUser || !modalSignUp) {
    document.querySelector("body").style.overflow = "auto";
  }
  if (modalPartnerSchools || modalRegisterUser || modalSignUp) {
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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
