import { FullPage, CardArea, Content } from "./styled";
import { MenuGodson } from "../../Components/MenuGodson";
import { BackGroundDashboard } from "../../Components/Background";
import { useNavigate } from "react-router-dom";

export const DashboardPartnerSchools = () => {
   const navigate = useNavigate()
  return (
    <FullPage>
      <BackGroundDashboard />
      <MenuGodson />
      <Content>
        <h2>Escolas Parceiras</h2>
        <CardArea onClick={()=> navigate("/dashboardstudentscourses")}> </CardArea>
      </Content>
    </FullPage>
  );
};
