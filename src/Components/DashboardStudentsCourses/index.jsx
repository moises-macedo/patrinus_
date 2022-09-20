import {Container, Content, HeaderContent} from "./styled";

import {BackGroundDashboard} from "../Background"
import {Menus} from "../Menus"
import { InputSearch } from "../InputSearch";

export const DashboardStudentsCourses = () => {
    return(
        <Container>
            <Menus/>
            <BackGroundDashboard/>
            <Content>
                <HeaderContent>
                    <h2>Cursos</h2>
                    <InputSearch/>
                </HeaderContent>
            </Content>
        </Container>
    )
}