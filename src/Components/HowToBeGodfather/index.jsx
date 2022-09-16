import { Container, Content, ContainerText } from "./style";
import Pass1 from "../../Assets/Img/Pass1.png";
import Pass2 from "../../Assets/Img/Pass2.png";
import Pass3 from "../../Assets/Img/Pass3.png";

export const HowToBeGodfather = () =>{
return (
    <>
    <Container> 

        <div className="tittleH2">
        <h2>Como ser um padrinho</h2>
        </div>
            
            <Content>

            <section>
                <div className="box1">                    
                    <img
                    src={Pass1}
                    alt="começando"
                    /> 

                    <p className="tittle">
                        Començando
                    </p>

                    <p className="description">
                        Cadastre-se, enviado todos seus dados.
                    </p>
                </div>

                 <div className="box2">
                    <img
                    src={Pass2}
                    alt="Investindo"
                    /> 

                    <p className="tittle">
                        Investindo    
                    </p>

                    <p className="description">
                        Investindo no sonho.
                    </p>
                </div>

                <div className="box3">
                    <img
                    src={Pass3}
                    alt="transformando"
                    />

                    <p className="tittle">
                        Transformando
                    </p>

                    <p className="description">
                        Transformando uma vida com uma melhor educação.
                    </p>
                </div> 
            </section>

            </Content>  

             <ContainerText>
            <hr />
            <p>Seja uma <span>escola</span> parceira e ajude melhor a educação. </p>
        </ContainerText>        

        </Container>
       
        </>
)

}