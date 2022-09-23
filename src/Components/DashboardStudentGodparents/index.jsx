import {Container, Content} from "./styled"
import {BackGroundDashboard} from "../Background"
import { CardGodFather } from "../CardGodFather"
import { MenuGodSon } from "../MenuGodson/styled"
export const DashboardStudentGodparents = ( ) =>{
    return(
        <Container>
            <MenuGodSon/>
            <BackGroundDashboard/>
            <Content>
            <h2>Padrinhos</h2>
            <CardGodFather/>
            </Content>
        </Container>
    )
}