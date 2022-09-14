import { Container, Content } from "./style";
import  imgEarth  from "../../Assets/Img/imgEarth.svg";
// import { Button } from "../Button";



export const Screen1 = () => {
    return(
        <Container>

            <Content>
            <header>
            <button className="button_register">Cadastrar</button>
            <button className="button_signIn">Entra</button>                    
            </header>

            <main>
                <article>
                    <p>Talvez você não possa transformar o mundo todo.</p>
                    <hr />
                    <p>Mas pode mudar a realidade de alguém...</p>
                    <hr />
                    <p>...Educação muda as pessoas e as 
                        pessoas transformam o mundo.
                    </p>
                    <button className="button_be_a_partner">Seja escola parceira</button>
                </article>
            
                <aside>
                    <img
                    src={imgEarth}
                    alt="ico logo"
                    />
                </aside>
            </main>
            </Content>
            <div>
                <p>
                Apartir de R$1,99 por dia, 
                </p>
                <p>você pode apoiar essa experiência transformadora!</p>
            </div>
        </Container>
    )
}