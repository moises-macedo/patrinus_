import { DescriptionSchool } from "../../Components/DescriptionSchool"
import { SchollMenu } from "../../Components/MenuSchool"
import { TitlePage } from "../../Components/TitlePage"
import { DashboardSchoolStyle, DashMainStyle } from "./style"

export const DashboardSchool = () =>{
        return (
            <DashboardSchoolStyle>
            <SchollMenu />
            <DashMainStyle>
            <TitlePage>Escola Parceira</TitlePage>
            <DescriptionSchool />
            </DashMainStyle>
            </DashboardSchoolStyle>
        )    
}