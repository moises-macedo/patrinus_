import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    div{
        
        p{
            text-align: center;
            width: 95%;
            font-size: 1.5em; 
            margin-top: 2%;
        }
    }

    @media (min-width: 769px){
        
        div{
            
        }
        
    }


`;

export const Content = styled.div`   
    display: flex;
    align-items: center;
    flex-direction: column;

    header{
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .button_register, .button_signIn{
            width: 100%;
            margin-top: 5px;               
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
        display: flex;
        width: 95%;
        justify-content: center;
        flex-direction: column-reverse;
        
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
                margin-top: 2%;
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
                margin-top: 8%;
                margin-bottom: 8%;
                padding: 2px;
            }

        }
    }

    

    @media (min-width: 769px){
        clip-path: polygon(0 0, 100% 0, 100% 62%, 0 88%);
        background-color: #83ad93;

        header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .button_register{                
                width: 12.5em;
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
                width: 12.5em;
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
                    margin-top: 1.75em;
                    font-family: Barlow;
                    font-size: 2.18em;
                    font-weight: 700;
                    letter-spacing: 0em;
                    text-align: left;               
                    width: 19em;
                }
    
                hr{
                    height: 0px;
                    width: 39.56em;
                    margin-left: 1em;
                    margin-top: 3em;                    
                    border: 1px solid #FFFFFF;
                }

                .button_be_a_partner{                
                    width:16.62em;                
                    margin-left: 0.68em;
                    margin-top: 2em;
                    margin-bottom: 5.5em;
                    border-radius: 40px;
                    background: #595959;
                    font-family: Barlow;
                    font-size: 2.25em;
                    font-weight: 600; 
                    color: #FFFFFF;
                    letter-spacing: 0em;
                }
            }
        

            img{
                              
                width: 46em;
                height: 33em;
            }

            
        }
    }

`;