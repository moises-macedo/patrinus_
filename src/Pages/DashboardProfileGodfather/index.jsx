import { useContext } from "react";
import { BackGroundDashboard } from "../../Components/Background/index";
import { MenuGodFather } from "../../Components/MenuGodFather";
import { UsersContext } from "../../Provider/User";
import { FullPage, AboutMe, Discipulus, Content } from "./styled";

export const DashboardProfileGodfather = () => {

  const {user} = useContext(UsersContext)
  return (
    <FullPage>
      <BackGroundDashboard theme="patrinus" />
      <MenuGodFather />
      <Content>
        <AboutMe>
          <h3>Sobre mim</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h3>Email:</h3>
          <p>{user.email}</p>
        </AboutMe>
        <Discipulus>
          <h3>Alunos apoiados</h3>
        </Discipulus>
      </Content>
    </FullPage>
  );
};
