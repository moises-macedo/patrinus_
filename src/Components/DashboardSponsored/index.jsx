import {Container, Content} from "./styled"

import {MenuGodFather} from "../MenuGodFather"
import {CardGodFather} from "../CardGodFather"
import {BackGroundDashboard} from "../Background"

export const DashboardSponsored = () =>{
    return(
        <Container>
            <MenuGodFather />
            <BackGroundDashboard theme="patrinus"/>
            <Content>
                <h2>Apadrinhados</h2>
                <CardGodFather/>
            </Content>

        </Container>
    )
}