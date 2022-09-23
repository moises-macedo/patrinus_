import { BackGroundDashboard } from "../Background"
import { PartnerSchools } from "../PartnerSchools"

import {Container, Content} from "./styled"
import { MenuGodson } from "../MenuGodson"

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