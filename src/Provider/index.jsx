import AuthProvider from "./Auth";
import UsersProvider from "./User";
import { ModalProvider } from "./ModalStates";

export const Providers = ({ children }) => {
  return (
    <UsersProvider>
      <AuthProvider>
        <ModalProvider>{children}</ModalProvider>
      </AuthProvider>
    </UsersProvider>
  );
};
