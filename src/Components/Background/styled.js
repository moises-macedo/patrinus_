import styled, { keyframes } from "styled-components";

const animate = keyframes`
0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
}

100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
}
`;

const theme = {
  student: {
    borderColor: "transparent transparent transparent #aecfba",
  },
  patrinus: {
    borderColor: "transparent transparent transparent #FFDACC",
  },
};

export const Area = styled.div`
  background: var(--light-2);
  background: -webkit-linear-gradient(to left, #ffff, gray);
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -8;

  /* opacity: 0.7; */
`;

export const Ul = styled.ul`
   z-index: -8;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.8;

  li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: var(--primary-1);
    animation: ${animate} 25s linear infinite;
    bottom: -150px;
    z-index: -8;
  }

  li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 2s;
  }

  li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
    animation-duration: 14s;
  }

  li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 6s;
  }

  li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 2s;
    animation-duration: 20s;
  }

  li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
  }

  li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 5s;
  }

  li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 9s;
  }

  li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 17s;
    animation-duration: 47s;
  }

  li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 4s;
    animation-duration: 37s;
  }

  li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 2s;
    animation-duration: 13s;
  }
`;
