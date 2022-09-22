import {Container, Li} from "./styled";

import {availableItems} from "./item"

export const cpStudentsRegistered = () =>{
console.log(availableItems,"aa")
    return(
        <Container>
            <ul>

            {availableItems.map((modalidade, curso) =>{
                <Li><span>Fulano</span>{modalidade}<span>{curso}</span></Li>
            })}
            </ul>
        </Container>
    )
}