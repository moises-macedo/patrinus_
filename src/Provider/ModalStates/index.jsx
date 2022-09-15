import { createContext, useState, useContext } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalSignUp, setModalSignUp] = useState(false);

  return (
    <ModalContext.Provider value={{ modalSignUp, setModalSignUp }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
