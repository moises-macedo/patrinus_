import styled from "styled-components";
import { MenuGodSon } from "../MenuGodson/styled";

export const Container = styled.div`
    .mobile{
    @media (min-width: 720px){
      display:none;
    }
  }

  .desktop{
    @media (max-width: 720px){
      display:none;
    }
  }
`

export const MenuGodfather = styled(MenuGodSon)`
  width: 100%;
  background: linear-gradient(
    174.14deg,
    var(--secondary-1) 4.65%,
    rgba(131, 175, 147, 0) 157.91%
  );
  img{
    filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.5));
  }
  h2{
    text-transform: capitalize;
  }



`;
