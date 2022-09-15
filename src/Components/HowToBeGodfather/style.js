import styled from "styled-components";
import backgroundImage from "../../Assets/Img/backgroundImage.jpg";
import graduacao from "../../Assets/Img/graduacao.jpg"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .tittleH2{        
        width: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        background: lightgray; 

        h2{
        
            font-family: 'Barlow';

            min-height: 50px;
            margin: 10px;
            font-size: 2em;
            letter-spacing: 0.05em;

            background: linear-gradient(45deg,#F0A500,#E15FED,#203239, #EEEDDE, #E0DDAA);
            background-size: 300% 300%;
            animation: colors 15s ease infinite;
            background-clip: text;
            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-text-fill-color: transparent;

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
        }

    }

    article{

        width: 95%;

        hr{
                height: 0px;
                width: 95%;
                margin-left: 10px;
                margin-top: 10px;                    
                border: 1px solid #595959;
        }


        p, span{
            font-family: 'Barlow';
            font-size: 1em;
            font-weight: 500;
            
            letter-spacing: 0em;
            text-align: center;
            color: #434343;
            margin-top: 10px;
        }
        span{     
            
            color: var(--primary-1);
        }
        
    }

    @media (min-width: 769px){
        height: 100%;
        width: 100%;

        background: linear-gradient( rgba(0,0,0,0.50),rgba(0,0,0,0.80) 100%), url(${graduacao}) no-repeat;
        background-size: 100%;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    
        background-position: center;

        .tittleH2{
            background: none;
            margin-bottom: 10px;

            h2{
                background: none;
                font-family: 'Barlow';
                font-size: 3.12em;
                font-weight: 700;
                line-height: 60px;
                letter-spacing: 0em;
                text-align: left;
                color: red;
                margin-top: 0.3em;
                background-clip: none;
                -webkit-background-clip: none;
                -moz-background-clip: none;
                -webkit-text-fill-color:  var(--light-3);
                
            }
        }


        article{
            display: flex;
            justify-content: center;
            align-items: center;


            hr{
                display: none;
            }

            p, span{
                font-family: 'Barlow';
                font-size: 2.8em;
                font-weight: 500;
                line-height: 54px;
                letter-spacing: 0em;
                text-align: left;
                color: #434343;
                margin-top: 1.3em;
            }

            span{   
                font-size: 1.4em;
                color: var(--primary-1);
            }
        }
        
    }

        

    

`;

export const Content = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;

    

    section{
        
        .box1, .box2, .box3{
            display: flex;
            flex-direction: column;
            align-items: center;

            .tittle{
                width: 90%;
                text-align: center;
                font-family: 'Barlow';
                font-size: 1.5em;
                font-weight: 700;
                line-height: 60px;
                letter-spacing: 0em;
                color: var(--secondary-1);
            }

            .description{
                /* height: 6.75em;
                width: 436px; */
                font-family: 'Barlow';
                font-size: 1em;
                font-weight: 500;                
                letter-spacing: 0em;
                text-align: center;
                color: #434343;
            } 
        }


        img{
            margin-top: 20px;
            margin: 10px;
            width: 36%;
            filter: drop-shadow(7px 7px 5px rgba(0,0,0,0.5) );
        }
    }

    @media (min-width: 769px){
        width: 100%;

       
       
       
        display: flex;
        flex-direction: column;
        align-items: center;

       
        section{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;

            .box1, .box2, .box3{            
                height: 30em;
                width: 30em;
                margin-top: 6.625em;
                margin: 4.5em;
                display: flex;
                flex-direction: column;
                align-items: center;

                .tittle{
                    font-family: 'Barlow';
                    font-size: 50px;
                    font-weight: 700;
                    line-height: 60px;
                    letter-spacing: 0em;
                    color: var(--secondary-1);
                }
                
                .description{
                    /* height: 6.75em;
                    width: 436px; */
                    font-family: 'Barlow';
                    font-size: 2.8em;
                    font-weight: 500;                
                    letter-spacing: 0em;
                    text-align: center;
                    color: var(--light-1);
                }
                
            }
        }



    }

    


    

`;