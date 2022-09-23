import { FullPage, CardArea, Content } from "./styled";
import { MenuGodson } from "../../Components/MenuGodson";
import { BackGroundDashboard } from "../../Components/Background";

export const DashboardPartnerSchools = () => {
  return (
    <FullPage>
      <BackGroundDashboard />
      <MenuGodson />
      <Content>
        <h2>Escolas Parceiras</h2>
        <CardArea> </CardArea>
      </Content>
    </FullPage>
  );
};
