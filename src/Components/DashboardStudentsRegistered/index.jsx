import {Container, Content, Header} from "./styled";

import {SchollMenu } from "../MenuSchool"
import {InputSearch } from "../InputSearch"
import {cpStudentsRegistered} from "../cpStudentsRegistered"

export const DashboardStudentsRegistered = () => {
    return (
        <Container>
            <SchollMenu/>
            <Content>
                <Header>
                    <h2>Alunos Cadastrados</h2>
                    <InputSearch/>
                </Header>
                <cpStudentsRegistered/>
            </Content>

        </Container>
    )
}