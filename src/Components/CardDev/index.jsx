import Moises from "../../Assets/Img/moises.png";
import Douglas from "../../Assets/Img/douglas.jpeg";
import Julio from "../../Assets/Img/julio.jpeg";
import Gabriel from "../../Assets/Img/gabriel.jpeg";
import Eduardo from "../../Assets/Img/eduardo.jpeg";
import { Border, Card, Container, Aside } from "./style";


export const CardDev = () => {
  const arr = [
    {
      image: Douglas,
      name: "Douglas B.",
    },
    {
      image: Moises,
      name: "Moisés A.",
    },
    {
      image: Julio,
      name: "Julio C.",
    },
    {
      image: Gabriel,
      name: "Gabriel B.",
    },
    {
      image: Eduardo,
      name: "Eduardo R.",
    },
  ];

  return (
    <Container>
      <h3>Desenvolvedores</h3>
      <Aside>
        {arr.map((el, index) => {
          const { image, name } = el;
          return (
            
              <Card key={index} backgroud={image}>
                <Border></Border>
                <h2>{name}</h2>
              </Card>
            
          );
        })}
      </Aside>
    </Container>
  );
};
