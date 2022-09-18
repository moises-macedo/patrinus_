import { Container, Content, ContainerText } from "./style";
import Pass1 from "../../Assets/Img/Pass1.png";
import Pass2 from "../../Assets/Img/Pass2.png";
import Pass3 from "../../Assets/Img/Pass3.png";

export const HowToBeGodfather = () => {

    const arr = [
        {
            image: Pass1,
            title:"Començando",
            text: "Cadastre-se, enviado todos seus dados."
        },
        {
            image: Pass2,
            title:"Investindo",
            text: "Investindo no sonho."
        },
        {
            image: Pass3,
            title:"Transformando",
            text: "Transformando uma vida com uma melhor educação."
        }
    ]
  return (
    <Container>
      <div className="tittleH2">
        <h2>Como ser um padrinho</h2>
      </div>

      <Content>
        <section>
            {arr.map(({image,title,text},index)=>{
                return(
                    <ul key={index} className="box">
                        <li className="image">
                            <img src={image} alt={title} />
                        </li>
                        <li className="tittle"> 
                            <p>{title}</p>
                        </li>
                        <li className="description">
                            <p>{text}</p>
                        </li>
                    </ul>
                )
            })}
        </section>
      </Content>
    </Container>
  );
};
