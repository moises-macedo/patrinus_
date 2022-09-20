import styled, { keyframes } from "styled-components";

const MoveLeftToRight = keyframes`
    from{
        opacity: 0;
        width: 0%;
    }to{
        opacity: 1;
        width: 440px;
    }
`;

const MoveRightToLeft = keyframes`
    from{
        border: 1px solid #000;
        justify-content: flex-end;
        max-width: 440px;
        display: flex;
        align-items: center;
        padding: 4px;
        border-radius: 8px;
        background: var(--secondary-1);
        opacity: 1;
    }to{
        width: inherit;
        opacity: 1;
    }
`;

export const InputOpenSearch = styled.div`
  width: 440px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  padding: 4px;
  border-radius: 8px;
  background: var(--secondary-1);
  animation: ${MoveLeftToRight} ease-in-out 500ms;

  input {
    background: var(--secondary-1);
    width: 100%;
    border: none;
    outline: none;
  }

  input::placeholder {
    color: #000;
    font-weight: bold;
  }
`;

export const Div = styled.div`
  animation: ${MoveRightToLeft} ease-in-out 600ms;
  justify-content: flex-start;
  display: flex;
  align-items: center;
`;
