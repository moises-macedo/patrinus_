import { Screen1 }  from "../../Components/HpScreen1";
import {PartnerSchools} from "../../Components/PartnerSchools";
import {HowToBeGodfather} from "../../Components/HowToBeGodfather";
import {CardDev} from "../../Components/CardDev";
import { Footer } from "../../Components/Footer";


export const Home = () => {
  return(
    <>
            <Screen1/>
            <PartnerSchools/>
            <HowToBeGodfather/>
            <CardDev/>
            <Footer/>
    </>
  )
};