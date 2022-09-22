import { AboutMe } from '../AboutMe'
import { BackGroundDashboard } from '../Background'
import { Button } from '../Button'
import { Grades } from '../Grades'

import { InformationUser } from '../InformationUser'
import { SponsoredBy } from '../SponsoredBy'
import { TitlePage } from '../TitlePage'
import {StudentStyle, StudentStyleMain, ProfileStyle} from './style'
export const StudentInformation = () =>{
     return (
         <>
         <BackGroundDashboard theme='student' />
   
       <StudentStyleMain>
        <ProfileStyle>
        <TitlePage>Perfil</TitlePage>
        <Grades />
        </ProfileStyle>
        <StudentStyle>         
        <SponsoredBy />
        <InformationUser />
        <AboutMe />
        <Button theme="fourth">Editar Perfil</Button>
        </StudentStyle>
        </StudentStyleMain>
       
        </>
     )
}