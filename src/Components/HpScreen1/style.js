import styled from "styled-components";

export const Background = styled.div`

    div{
        p{
            font-family: 'Barlow';
            font-size: 1em;
            font-weight: 700;        
            letter-spacing: 0em;
            text-align: center;
        }

        .pSup{
            margin-top: 10px;
        }

        hr{
            width: 95%;            
            margin-top: 10px; 
            margin-left: 10px;                   
            border: 1px solid #FCB1A7;

        }
    }


    @media (min-width: 769px){

        div{
            p{                      
                font-size: 1.5em;           
            }
    
            .pSup{
                margin-top: -137px; 
            }

            hr{
            width: 95%;             
            margin-top: 30px; 
            margin-left: 25px;                   
            border: 1px solid #FCB1A7;

        }
        }


        


    }

    @media (min-width: 1439px){


    }

`;

export const Container = styled.div`
    height: 100vh;
    background-color: #83ad93;
    
/* 
    div{
        
        p{
            text-align: center;
            width: 95%;
            font-size: 1.5em; 
            margin-top: 2%;
        }
    } */

    @media (min-width: 769px){
        clip-path: polygon(0 0, 100% 0, 100% 62%, 0 88%);
        background-color: #83ad93;
    }

    /* @media (min-width: 1439px){
        clip-path: polygon(0 0, 100% 0, 100% 62%, 0 88%);
        background-color: #83ad93;
    } */


`;

export const Content = styled.div`   
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #83ad93;

    header{
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .button_register, .button_signIn{
            width: 100%;
            margin-top: 20px;               
            border-radius: 30px;
            background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 22.74%, #FFEEE6 100%);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border: none;
            font-family: Barlow;
            font-size: 1.87em;
            font-weight: 600;                
            letter-spacing: 0em;  
            padding: 4px ;
        }
    }

    main{
        display: flex;
        width: 95%;
        justify-content: center;
        flex-direction: column-reverse;
        background-color: #83ad93;
        
        aside{
            margin-top: 27px;
            display: flex;
            justify-content: center;
            align-items: center;

            img{                
                width: 42%;
            }
        }
    

        article{
            
            margin-top: 1rem;
            p{
                width: 95%;
                text-align: center;
                margin-top: 7%;
                font-family: Barlow;
                font-weight: 700;
                font-size: 2em;  
            }

            hr{
                height: 0px;
                width: 95%;
                margin-left: 10px;
                margin-top: 10px;                    
                border: 1px solid #FFFFFF;
            }

            .button_be_a_partner{

                width: 100%;
                border-radius: 40px;
                background: #595959;
                font-family: Barlow;
                font-weight: 600; 
                color: #FFFFFF;
                font-size: 1.87em;
                font-weight: 600; 
                margin-top: 11%;
                margin-bottom: 8%;
                padding: 4px;
            }

        }
    }

    @media (min-width: 769px){
        
        header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .button_register{                
                width: 30%;
                padding: 0.625em;
                margin-left: 1em;
                margin-top: 1.12em;
                border-radius: 0px;
                border: none;
                background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 22.74%, #FFEEE6 100%);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                font-family: Barlow;
                font-size: 1.87em;
                font-weight: 600;                
                letter-spacing: 0em;
            }

            .button_signIn{               
                width: 30%;
                padding: 0.625em;
                margin-right: 1em;
                margin-top: 34px;
                border-radius: 30px;
                background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 22.74%, #FFEEE6 100%);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border: none;
                font-family: Barlow;
                font-size: 1.87em;
                font-weight: 600;                
                letter-spacing: 0em;
            } 

        }

        main{  
            display: grid;
            grid-template-columns: 1fr 1fr; 
            

            article{
                p{
                    margin-left: 1em;
                    margin-top: 1.5em;
                    font-family: Barlow;
                    font-size: 1.5em;
                    font-weight: 700;
                    letter-spacing: 0em;
                    text-align: left;               
                    width: 19em;
                }
    
                hr{
                    height: 0px;
                    width: 28em;
                    margin-left: 1em;
                    margin-top: 3em;                    
                    border: 1px solid #FFFFFF;
                }

                .button_be_a_partner{                
                    width:11.62em;                
                    margin-left: 0.68em;
                    margin-top: 2em;
                    /* margin-bottom: 41%; */
                    border-radius: 40px;
                    padding: 13px;
                    background: #595959;
                    font-family: Barlow;
                    font-size: 2.25em;
                    font-weight: 600; 
                    color: #FFFFFF;
                    letter-spacing: 0em;
                }
            }

            aside{
                img{
                    margin-bottom: auto;  
                    width: 86%;
                }
            }
        }
    }

    @media (min-width: 1439px){
        main{  
            display: grid;
            grid-template-columns: 1fr 1fr; 
            

            article{
                p{
                    margin-left: 1em;
                    margin-top: 1em;
                    font-family: Barlow;
                    font-size: 2.5em;
                    font-weight: 700;
                    letter-spacing: 0em;
                    text-align: left;               
                    width: 19em;
                }
    
                hr{
                    height: 0px;
                    width: 39.56em;
                    margin-left: 1em;
                    margin-top: 1em;                    
                    border: 1px solid #FFFFFF;
                }

                .button_be_a_partner{                
                    width:11.62em;                
                    margin-left: 0.68em;
                    margin-top: 1em;
                    margin-bottom: 41%;
                    border-radius: 40px;
                    padding: 13px;
                    background: #595959;
                    font-family: Barlow;
                    font-size: 2.25em;
                    font-weight: 600; 
                    color: #FFFFFF;
                    letter-spacing: 0em;
                }
            }

            aside{
                img{
                    margin-bottom: auto;                            
                    width: 35em;                    
                }
            }
        }
    }
`;