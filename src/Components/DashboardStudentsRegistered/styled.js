import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  .mobile1{
    @media (min-width: 700px) {
      display: none;
    }
  }
  .mobile{
    @media (max-width: 700px) {
      display: none;
    }
  }
`;
export const Content = styled.div`
  width: 100%;
  margin-left: 7%;
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  padding-right: 60px;
  justify-content: space-between;
  margin-top: 10%;
  margin-bottom: 80px;
`;
