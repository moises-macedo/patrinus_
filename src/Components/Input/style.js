import styled, { css } from "styled-components";

export const Container = styled.div`
  @keyframes shake {
    25% {
      transform: translateX(4px);
    }

    50% {
      transform: translateX(-5px);
    }

    100% {
      transform: translateX(4px);
    }
  }
  animation: ${(props) =>
    props.errors === undefined ? null : css`shake 200ms;`};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 75px;
  label {
    font-size: 2.37em;
    color: ${(props) =>
      props.errors === undefined ? css`rgba(0, 0, 0, 0.56)` : css`red`};

    span {
      font-size: 1.1rem;
    }
  }
`;
export const InputContainer = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.76);
  display: flex;
  textarea:focus,
  input:focus,
  select:focus {
    outline: 0;
  }
  input {
    font-size: 1.125em;
    border: none;

    background: transparent;
    width: 100%;
    &::placeholder {
      background: transparent;
    }
  }
  svg {
    font-size: 30px;
    cursor: pointer;
  }
`;
