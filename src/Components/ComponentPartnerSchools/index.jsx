import {  MenuGodson} from "../MenuGodson"
import { BackGroundDashboard } from "../Background"
import { PartnerSchools } from "../PartnerSchools"

import {Container, Content} from "./styled"

export const ComponentPartnerSchools = () => {
    return (
        <Container>
            <MenuGodson/>
            <BackGroundDashboard/>
            <Content>
                <PartnerSchools/>
            </Content>
        </Container>
    )
}