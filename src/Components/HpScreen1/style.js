import styled from "styled-components";

export const Background = styled.div`
  div {
    p {
      font-family: var(--font-barlow);
      font-size: 1em;
      font-weight: 600;
      letter-spacing: 0em;
      text-align: center;
    }

    .pSup {
      margin-top: 90px;
    }

    hr {
      width: 95%;
      margin-top: 30px;
      margin-left: 10px;
      border: 1px solid #fcb1a7;
    }
  }

  @media (min-width: 769px) {
    div {
      p {
        font-size: 1.5em;
      }

      .pSup {
        margin-top: -5px;
        
      }

      hr {
        width: 95%;
        margin-top: 30px;
        margin-left: 25px;
        margin-bottom: 30px;
        border: 1px solid #fcb1a7;
      }
    }
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  background-color: #83ad93;

  @media (min-width: 769px) {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 95%);
    background-color: #83ad93;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: pink;
  /* cor certa: #83ad93 */

  header {
    margin-top: 10px;
    width: 95%;
    display: flex;  
    align-items: center;
    justify-content: space-between ;

    /* borda de teste*/

    .container_logo {
      width: 218px;
      height: 66px;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative; 
    }
        .animated-border {
          width: 304px;
          height: 91px;
          border-radius: 20px;
          
          position: absolute;
          animation: backgroundAnimation 1s steps(50) 3s normal both, rotate 5s infinite ease-in-out;

          @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }       

          @keyframes backgroundAnimation {
          from {
            background: transparent;
          }
  
          to {
            background: #edebe8;
          }
        } 
          
        }
        .corner {
          width: 346px;
          height: 62px; 
          border-radius: 20px;         
          background: #83ad93;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .content_logo {
          width: 203px;
          height: 52px;          
          border-radius: 20px;
          /* padding: 10px; */
          background: #83ad93;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          
          .logo_tittle{      
        font-family: var(--font-barlow);
        background: linear-gradient(90deg,#212121,
          #595959,          
          #203239,
         #edebe8        
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        text-align: center;
        letter-spacing: 0.08em;
        font-size: 2.7em;
        /* color: var(--light-2); */
        font-weight: 700;
        animation: typing 2s steps(50) 1s normal both;
        white-space: nowrap; 
        overflow: hidden;
          
        @keyframes typing {
          from {
            width: 0;
          }
  
          to {
            width: 5em;
          }
        }    
      }
        }
        

    
    
    
    
    
    
    /* final de teste*/

   

    /* .logo{
      border: 2px solid #fff;
      border-radius: 20px;
      padding: 5px;

      background: #de0d9c;
          position: absolute;
          animation: rotate 3s infinite ease-in-out;



      .logo_tittle{      
        font-family: var(--font-barlow);
        background: linear-gradient(90deg,#f0a500,
        #e15fed,
        #203239,
        #eeedde,
        #e0ddaa);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        text-align: center;
        font-size: 2em;
        
        font-weight: 700;
        animation: border 500ms infinite normal, typing 4s steps(50) 2s normal both;
        white-space: nowrap; 
        overflow: hidden;
          
        @keyframes typing {
          from {
            width: 0;
          }
  
          to {
            width: 5em;
          }
        }  
  
        @keyframes border {
          from {
            border-right-color: black;
          }
  
          to {
            border-right-color: red;
          }
        }
      }

    } */



    div{
      display: flex;
      flex-direction: column;            
     
      

      .button_register{
        width: 100%;
        /* margin-top: 20px; */
        border-radius: 10px;

        background: transparent;
        padding-right: 8px ;
        padding-left: 8px ;
        padding-top: 4px ;
        padding-bottom: 4px ;
        
        border: 1px solid var(--dark-1);


        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);        
        font-family: Barlow;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0em;        
        cursor: pointer;
      }
      .button_register{
        width: 100%;
        height: 43px;
        max-width: 200px;

        &:hover{
            color: var(--light-2);
            border:1px solid var(--light-2);
          }
      }
     
      .button__signIn-div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 9px;
        button{
          background: none;
          font-size: 18px;
          text-decoration: underline;
          cursor: pointer;

          &:hover{
            color: var(--light-2);
          }
        }
      }

    }

    
  }

  main {
    display: flex;
    width: 95%;
    justify-content: center;
    flex-direction: column-reverse;
    background-color: #83ad93;
    margin-top: 20px;

    aside {
      margin-top: 27px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        max-width: 300px;
      }
    }

    article {
      margin-top: 1rem;
      p {
        width: 95%;
        text-align: center;
        margin-top: 7%;
        font-family: Barlow;
        font-weight: 400;
        font-size: 2em;
      }

      hr {
        height: 0px;
        width: 95%;
        margin-left: 10px;
        margin-top: 10px;
        border: 1px solid #ffffff;
      }

      .button_be_a_partner {
        width: 95%;
        border-radius: 40px;
        background: #595959;
        color: #ffffff;
        font-size: 1.5em;
        margin-top: 15px;
        padding: 4px;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 769px) {
    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;

      .logo{
        .logo_tittle{
          font-size: 2em;
          font-weight: 600;
        }
      }


      div{
        display: flex;
        align-items: center;        
        flex-direction: row-reverse;       
        justify-content: space-between ;

        .button_register{
        width: 100%;
        max-width: 200px;
        border-radius: 10px;

        background: transparent;
        padding-right: 8px ;
        padding-left: 8px ;
        padding-top: 4px ;
        padding-bottom: 4px ;
        
        border: 1px solid var(--dark-1);


        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);        
        font-family: Barlow;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0em;        
        cursor: pointer;
      }     
        
        .button__signIn-div{
        margin-right: 15px;
        }

      }

    }

    main {
      display: grid;
      grid-template-columns: 1fr 1fr;

      article {
        p {
          margin-left: 1em;   
          font-size: 1.5em;
          font-weight: 400;
          text-align: left;
          width: 19em;
        }

        hr {
          margin-top: 1.5em;
          border: 1px solid #ffffff;
        }

        .button_be_a_partner {
          width: 100%;
          max-width: 400px;
          margin-left: 0.68em;
          margin-top: 2.5em;
          padding: 13px;
          font-size: 2em;
        }
      }

      aside {
        img {
          margin-bottom: auto;
          width: 100%;
          max-width: 600px;
        }
      }
    }
  }

  @media (min-width: 1439px) {
    main {
      display: grid;
      grid-template-columns: 1fr 1fr;

      article {
                
        p {
          margin-left: 1em;
          margin-top: 1em;
          font-family: Barlow;
          font-size: clamp(1.5em, 8vw, 2em);
          font-weight: 400;
        }

        hr {
          width: 39.56em;
          margin-top: 1em;
        }

        .button_be_a_partner {
          width: 100%;
          max-width: 500px;
          border-radius: 40px;
          padding: 13px;
          background: #595959;
          font-family: Barlow;
          font-size: clamp(1.5em, 8vw, 2.5em);
          font-weight: 500;
          color: #ffffff;
        }
      }      
    }
  }
`;
