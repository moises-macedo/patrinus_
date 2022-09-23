import styled from "styled-components";

export const MenuGodSon = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  background: linear-gradient(
    174.14deg,
    var(--primary-1) 4.65%,
    rgba(131, 175, 147, 0) 157.91%
  );
  align-items: center;
  -webkit-box-shadow: 5px 5px 15px -4px #000000;
  box-shadow: 5px 5px 15px -4px #000000;

  h2 {
    color: var(--light-1);
    font-size: 25px;
    text-transform: capitalize;
  }

  img {
    width: 170px;
    height: 170px;
    margin-top: 30px;
    background-color: beige;
    border-radius: 100%;
    filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.5));
  }

  ul {
    position: relative;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    li {
      color: var(--dark-2);

      list-style-type: disc;
      margin-right: 80px;
    }
    li::marker {
      font-size: 30px;
    }
    li:hover {
      cursor: pointer;
      color: var(--dark-1);
    }
  }

  #exit {
    font-size: 40px;
    width: 193px;
    height: 52px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: var(--secondary-1);
    border: none;
    color: var(--light-1);
    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
    filter: brightness(0.9);
  }
  #exit:hover {
    cursor: pointer;
    filter: brightness(1);   
  }

  #menuList {
    text-align: right;
    position: relative;
    color: var(--dark-2);
    font-size: 25px;
    border: none;
    text-align: start;
    background-color: transparent;

    ::before {
      content: "";
      position: absolute;
      border-radius: 50%;
      top: 9px;
      left: -20px;
      height: 10px;
      width: 10px;
      background: var(--dark-2);
    }
    :hover {
      cursor: pointer;
      color: var(--dark-1);
    }
  }
`;

export const UnderlineSelect = styled.div`
  height: 2px;
  width: 190px;
  background-color: var(--dark-1);
`;
