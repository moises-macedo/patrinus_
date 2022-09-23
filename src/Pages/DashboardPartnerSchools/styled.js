import styled from "styled-components";

export const FullPage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h2 {
    text-decoration: underline;
    margin-left: 60px;
  }
`;

export const CardArea = styled.div`
  width: 90%;
  height: 70%;
  align-self: center;
`;
