import { useNavigate } from "react-router-dom";
import { Container } from "./style";

export const MenuMobile = ({arr}) => {
    
    const navigate = useNavigate()


    // Exemplo:
    // const arr = [
    //     {text:"texto", link: '/'}
    // ]
  return (

      <Container>
        <nav >
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                {arr.map(({text, link},index)=>{
                    return(
                        <li key={index}>
                            <button onClick={()=>navigate(link)}>
                                <p>{text}</p>
                            </button>
                        </li>
                    )
                })} 
                <button></button>             
            </ul>
          </div>
        </nav>
      </Container>

  );
};
