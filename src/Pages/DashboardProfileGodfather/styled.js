import styled from "styled-components";

export const FullPage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  height: 100vh;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const AboutMe = styled.div`
  font-size: 1.5rem;
  height: auto;
  width: 360px;
`;

export const Discipulus = styled.div`
  width: 360px;
  height: 50%;
  border-radius: 8px;
  background-color: var(--primary-1);
  text-align: center;
  h3 {
    font-size: 1.9rem;
  }
`;
