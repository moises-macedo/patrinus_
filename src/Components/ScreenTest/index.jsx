import { useState } from "react";
import { ModalRegisterSchool } from "../ModalRegisterSchool";
import { CardDev } from "../CardDev";
import { Footer} from "../Footer"
import {Screen1} from "../HpScreen1"

export const ScreenTest = () => {
  const [onClick, setOnclick] = useState(true);

  return (
    <>
      
      <Screen1/>
      {onClick ? <ModalRegisterSchool onClick={onClick} setOnclick={setOnclick} /> : null}
    </>
  );
};
