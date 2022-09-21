import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

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

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
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

    @media (min-width: 900px) {
      display: none;
    }
  }
`;

export const ContentLogin = styled.div`
  z-index: 5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: #ffff;
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    max-width: 500px;
  }

  form {
    width: 100%;
  }

  div + div {
    margin: 20px 0;
  }

  label{
    font-size: 1.4rem;
  }

  button {
    width: 100%;
    margin-top: 30px;
  }

  p {
    margin-top: 45px;
    font-weight: bold;
    font-size: 1.2rem;
    color: #4a6cbb;
    position: relative;
    bottom: 5%;
  }
`;

export const Loginbase = styled.div`
  padding: 20px;
  flex: 1;
  width: 100%;
  min-width: 320px;
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
  z-index: 4;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.2);
  flex: 3;
  width: 100%;
  height: 100%;

  @media (max-width: 470px) {
    display: none;
  }
`;
