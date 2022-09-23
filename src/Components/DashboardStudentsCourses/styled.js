import styled from "styled-components";

export const Container = styled.div`
  width: 100;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2%;

  h2 {
    font-size: 2.3rem;
    text-decoration: underline;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;

  @media (max-width: 720px) {
    h2 {
      margin-bottom: 25px;
    }
    flex-direction: column;
  }
`;

export const ContentComponent = styled.div`
  margin-top: 105px;
  margin-left: 12px;
  width: 76vw;
  padding: 0 20px;
  overflow-y: scroll;
  height: 78vh;
  ::-webkit-scrollbar{
    overflow-y: hidden;
  }
`;
