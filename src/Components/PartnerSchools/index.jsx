import { Container, Content } from "./style";
import kenzie from "../../Assets/Img/kenzie.jpg";
import estacio from "../../Assets/Img/estacio.jpg";

export const PartnerSchools = () => {
    return(
        <Container>

            <h3>Escolas Parceiras</h3>

            <Content>

                <img
                    src={kenzie}
                    alt="kenzie logo"                
                />

                <img
                    src={estacio}
                    alt="estacio logo"                
                />

            </Content>
        </Container>
    )
}