import styled from "styled-components";

export const Container = styled.li`
  padding: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 210px;
  max-height: 175px;
  background: var(--secondary-1);
  border-radius: 4px;
  box-shadow: 8px 10px 4px rgba(0, 0, 0, 0.25);
  margin: 10px 0;
  
  figure {
    width: 80%;
    height: 50%;

    img {
      width: 100%;
      height: 126px;
      border-radius: 4px;
    }
  }

  p{
    margin-top: 10px;
    font-weight: bold;
    letter-spacing: 1.5px;
  }

  &:hover {
    border: 1px solid rgba(0, 0, 0);
    transform: translateY(-5px);
  }
`;
