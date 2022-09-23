import { StudentInformation } from "../../Components/StudentInformation";
import { MenuGodson } from "../../Components/MenuGodson";
import { FullPage } from "./styled";
import { ModalEditProfile } from "../../Components/ModalEditProfile/index";

export const DashboardProfileGodson = () => {
  return (
    <FullPage>
      <MenuGodson />
      <StudentInformation />
      <ModalEditProfile />
    </FullPage>
  );
};
