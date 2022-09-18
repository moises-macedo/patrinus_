import { Menus } from "../Menus"
import { BackGroundDashboard } from "../Background"
import { PartnerSchools } from "../PartnerSchools"

import {Container, Content} from "./styled"

export const ComponentPartnerSchools = () => {
    return (
        <Container>
            <Menus/>
            <BackGroundDashboard/>
            <Content>
                <PartnerSchools/>
            </Content>
        </Container>
    )
}