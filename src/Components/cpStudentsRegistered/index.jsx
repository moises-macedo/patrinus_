import {Container, Li} from ".styled";

import {availableItems} from "./item"

export const cpStudentsRegistered = () =>{

    return(
        <Container>
            <ul>

            {availableItems.length > 0 ? <Li></Li> : "Sem Alunos!"}
            </ul>
        </Container>
    )
}