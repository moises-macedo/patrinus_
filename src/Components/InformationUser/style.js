import styled from "styled-components";

export const InformationUserStyle = styled.div`
    p{
    
       
        font-weight: 400;
        color: var(--dark-2);
        font-family: var(--font-inter);

    &:nth-child(1){
        span{
            text-transform: capitalize;
        }
    }
    span{
        margin-left: 5px;
        font-weight: 600;
        font-size: 18px;
        color:var(--dark-1)

    }
    }
`;