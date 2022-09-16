import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalEditProfile, setModalEditProfile] = useState(true);

  return (
    <ModalContext.Provider
      value={{
        modalSignUp,
        setModalSignUp,
        modalEditProfile,
        setModalEditProfile,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
