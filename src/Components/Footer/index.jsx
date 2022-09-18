import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { BiPlay } from 'react-icons/bi';
import { Container, Section, Div, Ul } from './style';

export const Footer = () => {

    const arrIcon = [
        { icon: < AiOutlineTwitter /> },
        { icon: < GrFacebookOption /> },
        { icon: < AiFillInstagram /> },
        { icon: < BiPlay /> }
    ]

    const arrRedirection = [
        {
            click: "",
            text: "Seja parceiro"
        },
        {
            click: "",
            text: "Termos"
        },
        {
            click: "",
            text: "Sobre nós"
        }

    ]

    return (
        <Container>
            <Section>
                {arrRedirection.map((el,index)=>{
                    const {click, text}= el
                    return(
                        <button key={index}>
                            <p>{text}</p>
                        </button>
                    )
                })}
            </Section>
            <Div>
                <h5>
                    <span>&#9400;</span>
                    Patrinus
                </h5>
            </Div>
            <Ul>
                {arrIcon.map((el, index) => {
                    const { icon } = el
                    return (
                        <li key={index}>
                            <p>{icon}</p>
                        </li>
                    )
                })}

            </Ul>
        </Container>
    )
}