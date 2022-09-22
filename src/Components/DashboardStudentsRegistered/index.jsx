import {Container, Content, Header} from "./styled";

import {SchollMenu } from "../MenuSchool"
import {InputSearch } from "../InputSearch"

export const DashboardStudentsRegistered = () => {
    return (
        <Container>
            <SchollMenu/>
            <Content>
                <Header>
                    <h2>Alunos Cadastrados</h2>
                    <InputSearch/>
                </Header>
            </Content>

        </Container>
    )
}