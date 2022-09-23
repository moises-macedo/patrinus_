import styled from "styled-components";

export const CourseStyle = styled.div`
    background-color: var(--secondary-1);
    font-family: Inter;
    font-size: 1rem;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin: 20px;
    color: var(--dark-2);
    display: flex;
    justify-content: space-around;
     width: 70%; 
    height: 42px;
    align-items: center;

    div{
        display: flex;
        height: 100%;
        align-items: center;
    }

    @media (max-width: 520px){
        font-size: 15px;        
        width: 100%;
        margin: 20px 0px 20px 0px;

        div{
            display: flex;
            height: 100%;
            align-items: center;

            svg{
                width: 70%;
            }
        }
    }
`;
