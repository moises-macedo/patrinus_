import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 2;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.2);
  height: 100%;

  @media (max-width: 900px) {
    height: 100vh;
  }
`;

export const ContentText = styled.div`
  margin-top: 30px;

  h3 {
    margin-bottom: 30px;
  }

  h2 {
    margin: 70px 0;
  }

  @media (max-width: 900px) {
    margin-top: 20px;

    h3 {
      margin-bottom: 30px;
    }

    h2 {
      margin: 60px 0;
    }
  }
`;

export const ContentLogin = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  height: 100%;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  svg {
    @media (max-width: 530px) {
      display: block;
      text-align: right;
      position: absolute;
      top: 40px;
      right: 50px;
      font-size: 1.5rem;
      color: var(--dark-2);
    }
    display: none;
  }

  p {
    width: 100%;
    text-align: left;
    margin-left: 15px;
    font-size: 1.3rem;
    color: #4a6cbb;
  }
`;

export const Loginbase = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
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
  flex: 1;
  padding: 20px;
  form {
    width: 100%;
    margin-top: 30px;

    button,
    input {
      width: 100%;
    }

    button {
      margin: 50px 0;
      font-size: 1.6rem;

      @media (max-width: 900px) {
        margin: 30px 0;
      }
    }

    div {
      width: 100%;
    }

    div + div {
      margin-top: 40px;
      @media (max-width: 900px) {
        margin-top: 10px;
      }
    }
  }

  @keyframes colors {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;
