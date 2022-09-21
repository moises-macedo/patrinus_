import { Container, BackgroundSchool, Content, TextContent } from "./style"
import {Button} from "../Button"
import { SchollMenu } from "../MenuSchool"


export const SchoolProfile = () => {
    return (
        <Container>
            <BackgroundSchool/>
            <SchollMenu/>
            
            <Content>                
                <TextContent>
                    <h3>Kenzie Academy Brasil</h3>
                    <p>
                        Através da educação e da programação, fazemos diferença real na realidade de milhares de pessoas.
                    </p>
                </TextContent> 
                <Button
                 theme="third">Editar</Button>
            </Content>
        </Container>
    )
}