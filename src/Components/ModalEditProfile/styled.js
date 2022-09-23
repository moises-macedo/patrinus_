import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 110vh;
  width: 100%;
  position: absolute;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 60%;
  width: 40%;
  background-color: var(--primary-1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 700px) {
    width: 80%;
    height: 70%;
  }

  h2 {
    font-family: "Inter";
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: underline;
  }

  form {
    width: 80%;
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;

    font-size: 0.7em;
    color: var(--dark-1);

    input {
      background-color: var(--primary-1);
      font-size: 28px;
    }
    div {
      display: flex;
      width: 100%;
      margin-top: 20px;

      button#cancel {
        height: 40px;
        width: 190px;
        background-color: var(--danger);
        cursor: pointer;
        font-weight: bold;
        font-size: 25px;
        box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
      }

      button#save {
        height: 40px;
        width: 190px;
        cursor: pointer;
        background-color: var(--success);
        font-weight: bold;
        font-size: 25px;
        margin-left: 25px;
        box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;
export const CheckboxContainer = styled.div`
  height: 30px;
  width: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3em;
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
