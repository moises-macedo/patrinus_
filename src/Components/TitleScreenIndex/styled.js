import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  text-align: center;
  h2 {
    font-family: var(--font-barlow);
    font-size: clamp(1.5em, 15vw, 4.5em);
    font-weight: 600;
    letter-spacing: 0.08em;
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
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
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
