import styled from "styled-components";

export const Container = styled.div`
  width: 100;
  display: flex;
`;

export const Content = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 7%;

  h2{
    font-size: 2.3rem;
    text-decoration: underline;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
`;
