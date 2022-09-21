import {Container, Content} from "./styled"
import {Menus} from "../Menus"
import {BackGroundDashboard} from "../Background"
import { CardGodFather } from "../CardGodFather"
export const DashboardStudentGodparents = ( ) =>{
    return(
        <Container>
            <Menus/>
            <BackGroundDashboard/>
            <Content>
            <h2>Padrinhos</h2>
            <CardGodFather/>
            </Content>
        </Container>
    )
}