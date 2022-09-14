import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const ContentText = styled.div`
  width: 100%;

  h3 {
    margin: 40px 0;
  }

  h2 {
    margin-bottom: 50px;
  }

  svg {
    margin-bottom: 10px;
    font-size: 1.4rem;
    color: var(--dark-2);
    display: block;
    position: relative;
    top: 20px;
    left: 90%;
    transform: translate(-50%, -50%);

    @media (min-width: 460px) {
      display: none;
    }
  }
`;

export const ContentLogin = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: #ffff;
  width: 100%;
  height: 100%;
  @media (max-width: 460px) {
    max-width: 500px;
  }

  form {
    width: 100%;
  }

  div + div {
    margin: 20px 0;
  }

  button {
    width: 100%;
    margin-top: 30px;
  }

  p {
    margin-top: 30px;
    font-weight: bold;
    font-size: 1.2rem;
    color: #4a6cbb;
  }
`;

export const Loginbase = styled.div`
  padding: 20px;
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(
    45deg,
    var(--primary-1),
    var(--secondary-1),
    var(--dark-2),
    var(--primary-2),
    var(--primary-1)
  );
  background-size: 300% 300%;
  animation: colors 15s ease infinite;
`;

export const Blur = styled.div`
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.2);
  flex: 2;
  width: 100%;
  height: 100%;

  @media (max-width: 460px) {
    display: none;
  }
`;

export const Colors = keyframes`
  0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
`;
