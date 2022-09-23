import styled from "styled-components";

export const FullPage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const BackgroundSchool = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  background: linear-gradient(
    180deg,
    #83af93 0%,
    rgba(131, 175, 147, 0.431674) 77.93%,
    rgba(131, 175, 147, 0) 110.94%
  );
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  div#search {
    display: flex;
    justify-content: center;
  }
`;

export const HeaderSchool = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 100px;

  h2 {
    font-family: "Inter";
    font-size: 2.5rem;
    text-decoration: underline;
    text-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
  }
  button {
    background-color: var(--secondary-1);
    height: 60px;
    width: 250px;
    font-size: 1.5rem;
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardSpace = styled.div`
  width: 95%;
  height: 40%;
  align-self: center;
`;
