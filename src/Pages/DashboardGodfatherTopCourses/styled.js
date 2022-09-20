import styled from "styled-components";

export const Fullpage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h3 {
    font-size: 4rem;
    color: var(--dark-1);
    text-decoration: underline;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  h2 {
    font-family: "Inter";
    font-size: 2.5rem;
    text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
    align-self: flex-start;
    padding-left: 80px;
  }
`;

export const CardDiv = styled.div`
  height: 50%;
  width: 100%;
`;
