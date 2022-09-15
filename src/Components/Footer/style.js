import styled from "styled-components";

export const Container = styled.footer`
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-between;
background: var(--light-3);
min-height: 50px;
font-family: var(--font-barlow);
`

export const Section = styled.section`
width: 100%;
max-width: 300px;
min-height: 50px;
display: flex;
align-items: center;
justify-content: space-around;
button{
    background: none;
    cursor: pointer;
    border: none;
    color: var(--dark-2);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    &:nth-child(2){
        border-left:3px solid var(--dark-2);
        border-right:3px solid var(--dark-2);
    }
    p{
        font-weight: 600;
        letter-spacing: 0.05em;
        &:hover{
            color: var(--dark-1);
        }
        &:active{
            color: var(--light-1);
        }
    }
}
`

export const Div = styled.div`
width: 100%;
max-width: 270px;
display: flex;
align-items: center;
justify-content: center;
h5{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    span{
        font-size: 10px;
        margin-right: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
`

export const Ul = styled.ul`
display: flex;
align-items: center;
justify-content: space-evenly;
width:100%;
max-width: 270px;
li{
    border: 1px solid var(--primary-1);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-1);
    cursor: pointer;
    p{
        color: var(--light-1);
        font-size:20px;
        transform: translateY(2px);
    }
    &:hover{
        border: 1px solid var(--primary-2);
        background: var(--primary-2);
    }
}
`