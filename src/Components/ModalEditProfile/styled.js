import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 80%;
  width: 60%;
  background-color: var(--primary-1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 700px) {
    width: 80%;
  }

  h2 {
    font-family: "Inter";
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: underline;
  }

  form {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    font-size: 0.5em;
    color: var(--dark-1);

    input {
      background-color: var(--primary-1);
      font-size: 28px;
    }
    div {
      display: flex;
      width: 100%;
      margin-top: 20px;
      justify-content: space-evenly;

      button#cancel {
        height: 40px;
        max-width: 190px;
        width: 190px;
        min-width: 100px;
        background-color: var(--danger);
        cursor: pointer;
        font-weight: bold;

        font-size: 25px;

        box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
      }

      button#save {
        height: 40px;
        max-width: 190px;
        width: 190px;
        cursor: pointer;
        background-color: var(--success);
        font-weight: bold;
        font-size: 0.9rem;
        box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;
export const CheckboxContainer = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2em;
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
      color: var(--dark-1);
      font-size: 30px;
    }
  }
`;
