import { FullPage, CardArea, Content } from "./styled";
import { MenuGodson } from "../../Components/MenuGodson";
import { BackGroundDashboard } from "../../Components/Background";

export const DashboardGodfatherCard = () => {
  return (
    <FullPage>
      <BackGroundDashboard />
      <MenuGodson />
      <Content>
        <h2>Padrinhos</h2>
        <CardArea> 
          
        </CardArea>
      </Content>
    </FullPage>
  );
};
