import styled from "styled-components";
import graduacao from "../../Assets/Img/graduacao.jpg";

export const Container = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8) 100%),
    url(${graduacao});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  .tittleH2 {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: var(--dark-2);

    h2 {
      font-family: "Barlow";

      min-height: 50px;
      margin: 10px;
      font-size: 2em;
      letter-spacing: 0.05em;

      background: linear-gradient(
        45deg,
        #f0a500,
        #e15fed,
        #203239,
        #eeedde,
        #e0ddaa
      );
      background-size: 300% 300%;
      animation: colors 15s ease infinite;
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;

      @keyframes colors {
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

  @media (min-width: 769px) {
    height: 100%;
    width: 100%;

    .tittleH2 {
      background: var(--dark-2);
      margin-bottom: 10px;

      h2 {
        background: none;
        font-family: "Barlow";
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
        -webkit-text-fill-color: var(--light-3);
      }
    }
  }
`;

export const Content = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px;

      .image{
        width: 100%;
        max-width: 350px;
        display: flex;
        align-items: center;
        justify-content: center;        

      }

      .tittle {
        width: 90%;
        text-align: center;
        font-family: "Barlow";
        font-size: 1.5em;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: 0em;
        color: var(--secondary-1);
      }

      .description {
        font-family: "Barlow";
        font-size: 1.2em;
        font-weight: 500;
        letter-spacing: 0em;
        text-align: center;
        color: var(--light-1);
      }
    }

    img {
      margin-top: 20px;
      margin: 10px;
      width: 36%;
      filter: drop-shadow(7px 7px 5px rgba(0, 0, 0, 0.5));
    }
  }

  @media (min-width: 769px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      width: 100%;
      height: 80vh;

      .box {
        height: 30em;
        width: 30em;
        margin-top: 1.625em;
        margin: 1.5em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .image {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 100%;
            max-width: 250px;
          }
        }

        .tittle {
          font-size: 30px;
          font-weight: 700;
          line-height: 60px;
          color: var(--secondary-1);
        }

        .description {

          font-size: 20px;
          font-weight: 500;
          text-align: center;
          color: var(--light-1);
          word-wrap: break-word;
        }
      }
    }
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    width: 95%;
    margin-left: 5px;
    margin-top: 10px;
    border: 1px solid #595959;
  }

  p,
  span {
    font-family: "Barlow";
    font-size: 1.5em;
    font-weight: 500;
    /* line-height: 54px; */
    letter-spacing: 0em;
    text-align: center;
    color: #434343;
    margin-top: 1.3em;
    margin-bottom: 1.3em;
  }

  span {
    font-size: 1.4em;
    color: var(--primary-1);
  }

  @media (min-width: 769px) {
    p,
    span {
      font-size: 2.8em;
    }

    span {
      font-size: 1.4em;
      color: var(--primary-1);
    }
  }

  hr {
    display: none;
  }
`;
