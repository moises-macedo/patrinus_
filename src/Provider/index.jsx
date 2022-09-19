import UsersProvider from "./User";
import { ModalProvider } from "./ModalStates";

export const Providers = ({ children }) => {
  return (
    <UsersProvider>
      <ModalProvider>{children}</ModalProvider>
    </UsersProvider>
  );
};
