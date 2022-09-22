import {Container, Content} from "./styled"
import {MenuGodFather} from "../MenuGodFather"
import {BackGroundDashboard} from "../Background"
import { CardGodFather } from "../CardGodFather"
export const DashboardStudentGodparents = ( ) =>{
    return(
        <Container>
            <MenuGodFather/>
            <BackGroundDashboard/>
            <Content>
            <h2>Padrinhos</h2>
            <CardGodFather/>
            </Content>
        </Container>
    )
}