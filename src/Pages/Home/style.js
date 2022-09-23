import styled from "styled-components";

export const Container = styled.div`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-barlow);
  p{
    font-size: clamp(1.5em,8vw,2em);
    color: var(--dark-2);
    font-weight: 600;
    text-shadow: 2px 2px 6px rgba(33,33,33,0.63);
    text-align: center;

    button{
        text-transform: uppercase;
        background: none;
        height: 100%;
        font-size: 1em;
        font-weight: 700;
        color: var(--primary-1);
        cursor: pointer;

    }
  }
`;
