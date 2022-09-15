import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  height: 100vh;
  width: 50%;
  background: linear-gradient(192.59deg, #84b094 0.58%, #fedacc 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  height: 97vh;
  width: 97%;
  border-radius: 15px;
  border: 2px var(--dark-1) solid;
  background-color: var(--light-1);
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 30px;
    color: var(--dark-2);
    margin-top: 20px;
    margin-bottom: 30px;
  }
  h2 {
    font-family: "Barlow";
    font-size: 300%;
    font-weight: 500px;
    background-image: linear-gradient(
      263.25deg,
      #83af93 16.44%,
      #ffdacc 100.64%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: black;
    -webkit-text-fill-color: transparent;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    width: 80%;
    height: 75%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: "Barlow";
    font-size: 0.5em;

    input {
      height: 30px;
      font-size: 20px;
    }

    button {
      height: 10%;
      width: 60%;
      border-radius: 10px;
      border: none;
      background-color: var(--dark-2);
      color: var(--light-1);
      font-size: 20px;
      margin-bottom: 20px;

      :hover {
        cursor: pointer;
      }
    }
  }
`;

export const InputBox = styled.div`
  height: 30px;
  width: auto;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  align-items: center;

  label {
    width: auto;
  }
  select {
    width: 150px;
    border-radius: 5px;
    margin-left: 50px;
    font-size: 1em;
  }
`;

export const ButtonExit = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
  @media (max-width: 700px) {
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 10px;
    align-self: flex-end;
    svg {
      color: var(--primary-1);
      font-size: 30px;
    }
  }
`;
