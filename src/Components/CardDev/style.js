import styled from "styled-components";

export const Container = styled.section`
width: 100%;
min-height: 180px;
background: var(--dark-1);
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
position: relative;
`
export const Card = styled.div`

height: 150px;
  width: 150px;
  background: grey;
  border-radius: 10px;
  transition: ease-in-out background 0.8s;
  overflow: hidden;
  background: black;
  box-shadow: 0 70px 63px -60px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${props => `url(${props.backgroud})`};
  background-size: 200px;
  margin: 10px;

  &:hover{
    background: ${props => ` linear-gradient( rgba(0,0,0,0.20),rgba(0,0,0,0.80) 100%),url('${props.backgroud}')`} ;
    background-size:210px;
    h2{
        opacity: 1;
    }
      
  }
  h2{
    font-family: var(--font-barlow);
    font-weight: 400;
    position: absolute;
    bottom: 10px;
    color: var(--light-1);
    opacity: 0;
  }
`

export const Border = styled.div`
  height: 145px;
  width: 145px;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: absolute;
  backdrop-filter: blur(2px);
-webkit-backdrop-filter: blur(2px);

  &:hover{
    backdrop-filter:none;
-webkit-backdrop-filter: none;
    border: 1px solid white
  }
`