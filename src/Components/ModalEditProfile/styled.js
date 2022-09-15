import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 60%;
  width: 50%;
  background-color: var(--primary-1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    font-family: "Inter";
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: underline;
  }

  form {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    background-color: var(--light-1);
    box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 0.7em;
    color: var(--dark-1);
    div {
      display: flex;
      width: 100%;

      button#cancel {
        height: 40px;
        width: 190px;
        background-color: var(--danger);
        cursor: pointer;
        font-weight: bold;
        font-size: 25px;
        margin-left: 20px;
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
