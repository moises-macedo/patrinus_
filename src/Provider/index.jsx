import UsersProvider from "./User";
import { ModalProvider } from "./ModalStates";
import { CoursesProvider } from "./Courses";

export const Providers = ({ children }) => {
  return (
    <UsersProvider>
      <ModalProvider>
        <CoursesProvider>{children}</CoursesProvider>
      </ModalProvider>
    </UsersProvider>
  );
};
