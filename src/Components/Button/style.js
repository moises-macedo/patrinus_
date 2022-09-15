import styled from "styled-components";
const theme = {
    primary: {
        background: "#FFEEE6",
        color: "#000000",
          
    },
    secundary: {
        background: "#595959",
        color: "#ffff"
    },
    third: {
        background: "#ff8989",
        color: "#ffff"
    },
    fourth: {
        background: "#83ad93",
        color: "#ffff"
    }
    

}

export const ButtonStyled = styled.button`
  width: 50%;
  height: 60px;
  border-radius: 10px;
  background-color: ${(props) => theme[props.theme].background};
  color: ${(props) => theme[props.theme].color};
  text-transform: uppercase ;
  cursor: pointer;
`