import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 310px;
  width: 270px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-2);

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Border = styled.div`
  height: 90%;
  width: 90%;
  ${((props) => props.theme === true ? css`border: 3px solid var(--secondary-1)` : css`border: 3px solid #83AF93`)} ;
  position: absolute;
  z-index: 10;
`;
