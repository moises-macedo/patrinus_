import styled from "styled-components";

export const Container = styled.div`
  z-index: 100;

nav {
  background-color: transparent;
  height: 65px;
  width: 100%;
}


#menuToggle {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 25px;
  margin-left: 25px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: flex;
  width: 40px;
  height: 32px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

#menuToggle span
{
  display: flex;
  width: 29px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: #000;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 5px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-3px, -1px);
  background: var(--dark-1);
}
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#menu
{
  position: absolute;
  min-width: 400px;
  height: 103vh;
  box-shadow: 0 0 10px #85888C;
  margin: -50px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background-color: var(--secondary-2);
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0;
  transition-delay: 2s;
}

#menuToggle input:checked ~ ul
{
  transform: none;
}
button {
 width: 100%;
 max-width: 250px;
 height: 45px;
 cursor: pointer;
 border: none;
 outline: none;
 background: transparent;
 color: var( --primary-1);
 font-family: 'Times New Roman', Times, serif;
 font-weight: 700;
 position: relative;
 transition: all 0.5s;
 z-index: 1;
 font-family: var(--font-barlow);

 p{
    font-size: 30px;
    text-transform: capitalize;
 }


 &::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: var( --primary-1);
  z-index: -1;
  transition: all 0.5s;
}

&:hover::before {
 width: 100%;
}

&:hover {
 color: var(--secondary-2);
}

&:active:before {
 background: #b9b9b9;
}
}


`