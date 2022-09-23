import { motion } from "framer-motion";
import styled from "styled-components";

export const UlTitle = styled.ul`
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--primary-2);
  border: 1px solid var(--dark-2);
  position: -webkit-sticky;
  position: sticky;
  z-index: 10;

  li {
    min-height: 50px;
    font-family: var(--font-barlow);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    font-weight: bold;
    p {
      color: var(--dark-2);
      font-size: 20px;
      font-weight: 600;
    }
    &:nth-child(1) {
      width: 43%;
    }
    &:nth-child(2) {
      width: 23%;
      justify-content: flex-start;
    }
    &:nth-child(3) {
      width: 33%;
    }
  }
`;
export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* position: relative; */
`;

export const UlDescription = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.1);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255);
  cursor: pointer;
  li {
    min-height: 50px;
    font-family: var(--font-barlow);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    &:nth-child(1) {
      width: 43%;
    }
    &:nth-child(2) {
      width: 23%;
      justify-content: flex-start;
    }
    &:nth-child(3) {
      width: 33%;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-left: 10px;
      background: none;
      color: var(--primary-2);

      &:hover {
        color: var(--primary-1);
      }
    }
  }
`;

export const Section = styled(motion.section)`
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: none;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;
export const Aside = styled.aside`
  width: 100%;
  max-width: 500px;
  background: var(--light-2);
  min-height: 100vh;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80px;
  margin-bottom: 20px;
  div {
    width: 95%;
    display: flex;
    justify-content: flex-end;
    button {
      background: none;
      cursor: pointer;
      p {
        font-size: 20px;
        color: var(--dark-2);

        &:hover {
          color: var(--dark-1);
        }
      }
    }
  }
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-height: 50px;
      border-bottom: 1px solid #e1e1e1;
      img {
        width: 100%;
        max-width: 150px;
        margin-bottom: 5px;
      }
      span {
        font-weight: bold;
      }
      p {
        margin-left: 10px;
        font-size: 18px;
      }
      &:nth-child(5) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        p {
          margin-left: 0;
          margin-top: 10px;
          text-align: justify;
        }
      }
      &:nth-child(6) {
        margin-top: 30px;
        border: none;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        button {
          width: 100%;
          font-size: 18px;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: inline-block;
          text-align: center;
          font-weight: bold;
          padding: 1em 2em;
          border: 3px solid var(--primary-1);
          border-radius: 2px;
          position: relative;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.1);
          color: var(--primary-1);
          text-decoration: none;
          transition: 0.3s ease all;
          z-index: 1;
          cursor: pointer;

          &::before {
            transition: 0.5s all ease;
            position: absolute;
            top: 0;
            left: 50%;
            right: 50%;
            bottom: 0;
            opacity: 0;
            content: "";
            background-color: var(--primary-1);
            z-index: -1;
          }
          &:hover,
          &:focus {
            color: var(--light-2);
          }
          &:hover:before,
          &:focus:before {
            transition: 0.5s all ease;
            left: 0;
            right: 0;
            opacity: 1;
          }
          &:active {
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
