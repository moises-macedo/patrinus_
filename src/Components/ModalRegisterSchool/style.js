import styled from "styled-components";


export const Aside = styled.aside`
font-family: var(--font-barlow);
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
width: 100%;
background: rgba(0,0,0,0.4);
z-index: 10;
position: absolute;
top: 0;
left: 0;
overflow-y: none;

@keyframes colors{

0% {
    background-position: 0% 50%;
}
50% {
    background-position: 100% 50%;
}

100% {
    background-position: 0% 50%;
}
}
@keyframes rotate {
    0% {
     opacity: 1;
     transform: scale(1) rotateY(0deg);
    }
   
    50% {
     opacity: 0;
     transform: scale(.8) rotateY(180deg);
    }
   
    100% {
     opacity: 1;
     transform: scale(1) rotateY(360deg);
    }
}
.input{
    color: var(--dar-1);
    border-bottom: 2px solid #636e72;
    cursor: not-allowed;

    &::placeholder{
        color:#636e72;
    }
    label{
        color:#636e72;
    }
}
`

export const Section = styled.section`
width: 100%;
max-width: 400px;
border: 1px solid;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
min-height: 90vh;
border-radius: 15px;
box-shadow: 10px 10px 21px 0px rgba(0, 0, 0, 0.75);
-webkit-box-shadow: 10px 10px 21px 0px rgba(0, 0, 0, 0.75);
-moz-box-shadow: 10px 10px 21px 0px rgba(0, 0, 0, 0.75);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
background: rgba(0, 0, 0, 0.3);

backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(15px);
border: 1px solid rgba(0, 0, 0, 0.3);

`

export const Form = styled.form`
width: 90%;
position: relative;



label{
    font-size: 20px;
    color: var(--light-2);
}
input{
 width: 100%;
 margin-bottom: 5px;
 padding-left: 5px; 
 border-bottom: 2px solid var(--light-2);
 height: 30px;
 transition: all 0.1s linear;



 &::placeholder{
    padding-left: 30px;
    color: var(--light-2);
 }
 &:focus{
    width:310px;
    border-bottom: 2px solid var(--dark-1);
 }
 
}
button{
    padding: 15px 25px;
    border: unset;
    border-radius: 15px;
    color: #212121;
    z-index: 1;
    background: linear-gradient(45deg, var(--primary-2),var(--secondary-1),var(--dark-2), var(--primary-1), var(--primary-1));
    background-size: 300% 300%;
    animation: colors 15s ease infinite;
    position: relative;
    font-weight: 1000;
    font-size: 17px;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
    overflow: hidden;
    width: 100%;
    
    margin-top: 10px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 15px;
        background-color: #212121;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        transition: all 250ms;
        
    }
    &:hover::before {
        width: 100%;
    }
        

    p {
        font-size: 20px;
        color: var(--light-2);
    }

}

div{
    height: 55px;
    margin-bottom: 10px;
    border: none;
    position: relative;

}
.border{
    position: absolute;
    bottom: 45px;
    left: 25px;
    height: 2px;
    width: 0;
    background: red;
    transition: 0.5s;
        
}


`

export const InputCheckBox = styled.aside`
width: 100%;
display: flex;
align-items: center;
min-height: 50px;
p{
    margin-left: 10px;
    font-weight: 600;
    color: var(--dark-1);
}
input{
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 2px;
        appearance: none;
        background-color: transparent;
        border: 2px solid var(--dark-1);
        transition: all .3s;
        cursor: pointer;
        

        &::before {
            content: '';
            position: absolute;
            border: solid #fff;
            display: block;
            width: .3em;
            height: .6em;
            border-width: 0 .2em .2em 0;
            z-index: 1;
            opacity: 0;
            right: calc(50% - .3em);
            top: calc(50% - .6em);
            transform: rotate(0deg);
            transition: all .3s;
            transform-origin: center center;
            

        }

        &:checked {
            animation: rotate .3s ease-in forwards;
            background-color: rgb(12, 9, 234);
            border: none;

            &::before {
                opacity: 1;
                transform: rotate(405deg);
            }
        }
        &:focus{
            width: 20px;
            
            
        }
 
 
}
`
export const Title = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100px;
h2{
    text-align: center;
        color: var(--light-2);
        font-size: 30px;
        text-shadow: 1px 3px 0px var(--dark-1);
}
div{
    margin-top: 20px;
    height: 2px;
    width: 100%;
    background: linear-gradient(45deg,var(--primary-2),var(--secondary-1),var(--dark-2), var(--primary-1), var(--primary-1));    background-size: 300% 300%;
    animation: colors 15s ease infinite;
}

`