import styled from "styled-components";

export const StudentStyle = styled.div`
   display: flex;
   flex-direction: column;
   
   font-size: 16.75px;

  
   
   button{
    margin-top: 10px;
     color: #000000;
     font-family: var(--font-inter);
     font-size: 16.75px;
   }

   @media(min-width: 600px){
    button{
        width: 272px;
        height: 65px;
        font-family: var(--font-inter);
        font-size: 18px;
        margin-top: 288px;
    }
   }

`;

export const StudentStyleMain = styled.div`
    display: flex;
    justify-content: space-around;

`;

export const ProfileStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

  

    
`;
