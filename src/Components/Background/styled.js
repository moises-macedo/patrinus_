import styled from "styled-components";

const theme = {
    student: {
        borderColor: "transparent transparent transparent #aecfba"
          
    },
    patrinus: {
        borderColor: "transparent transparent transparent #FFDACC"
    },  
}

export const Triangle = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 1.4%;
  width: 0;
  height: 0px;
  border-style: solid;
  border-width: 0px 0 180px 1100px;
  border-color: ${(props) => theme[props.theme].borderColor};
  transform: rotate(0deg);
`;
