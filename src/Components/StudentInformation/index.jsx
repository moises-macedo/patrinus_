import { AboutMe } from '../AboutMe'
import { Button } from '../Button'
import { InformationUser } from '../InformationUser'
import { SponsoredBy } from '../SponsoredBy'
import {StudentStyle} from './style'
export const StudentInformation = () =>{
     return (
        <StudentStyle>
        <SponsoredBy />
        <InformationUser />
        <AboutMe />
        <Button theme="fourth">Editar Perfil</Button>
        </StudentStyle>
     )
}