import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const ContentText = styled.div`
  width: 100%;
  margin-top: 100px;

  h3 {
    margin-top: 100px;
    margin-left: 30px;
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }
`;
export const H2 = styled.h2`
  width: 100%;
  font-size: 2rem;
  text-align: center;
  text-decoration: underline;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Ul = styled.ul`
  margin-top: 40px;
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  height: 400px;
  overflow-y: scroll;
  ::-webkit-scrollbar{
    display: none;
  }
  gap: 5px 20px;
  margin-left: 30px;
`;
