import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    
   
    
    
`;

export const BackgroundSchool = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1000;
    background: linear-gradient(180deg, #83af93 0%, rgba(131, 175, 147, 0.431674) 77.93%, rgba(131, 175, 147, 0) 110.94%  ); 


`;  


export const Content = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    Button{
        align-self: flex-end;
        height: 52px;
        width: 193px;
        border-radius: 0px;
        box-shadow: 0px 4px 4px 0px #00000040;
        margin-right: 3.8em;
        margin-bottom: 2.5em;



    }
   
`;

export const TextContent = styled.div`
    width: 100%;

     h3{
        font-family: Inter;
        font-size: 2.5em;
        font-weight: 700;
        line-height: 2em;
        letter-spacing: 0em;
        text-align: left;
        margin-top: 75px;
        margin-left: 32px;
    }

    p{
        font-family: Inter;
        font-size: 1.5em;
        font-weight: 700;
        line-height: 1em;
        letter-spacing: 0em;
        text-align: left;
        margin-top: 61px;
        margin-left: 32px;
        width: 49%;
        
    }


`;