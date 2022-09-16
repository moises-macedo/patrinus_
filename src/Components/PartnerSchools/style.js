import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h3{
        margin-top: 0.5em;
        font-family: 'Barlow';
        font-size: 3em;
        font-weight: 700;
        //line-height: 84px;
        letter-spacing: 0em;
        text-align: center;
        color: #212121;
    }
`;

export const Content = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    margin-top: 40px;
   
    

    img{
        width: 40%;
        margin-top: 10%;
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        filter: drop-shadow(5px 5px 10px #000);

    }

    @media (min-width: 769px){
        display: flex;
        flex-direction: row;
        width: 100%;
        
        margin-top: 5em;
       

        img{
            width: 30%;
            justify-content: space-between;
            margin: 5em;
        }
    }




`;
