import { availableItems } from "../../Services/item";
import { MdInfo } from "react-icons/md";
import { useState } from "react";
import {
  ContainerDescription,
  UlDescription,
  UlTitle,
  Section,
  Aside,
  Title,
  Description,
} from "./style";
import { FiXCircle } from "react-icons/fi";

const CoursesDescription = ({ card, index, id = "modal" }) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClick = (e) => {
    if (e.target.id === id) {
      setIsClosed(!isClosed);
    }
    console.log(e.target);
  };
  return (
    <>
      <UlDescription key={index}>
        <li>{card.escola}</li>
        <li>{card.curso}</li>
        <li>
          <p>{card.modalidade}</p>
          <button onClick={() => setIsClosed(!isClosed)}>
            <p>
              <MdInfo />
            </p>
          </button>
        </li>
      </UlDescription>

      {isClosed ? (
        <Section id={id} onClick={handleClick}>
          <Aside>
            <Title>
              <div>
                <button onClick={() => setIsClosed(!isClosed)}>
                  <p>
                    <FiXCircle />
                  </p>
                </button>
              </div>
              <h2>Detalhes do curso</h2>
            </Title>
            <Description>
              <ul>
                <li>
                  <img src={card.image} alt={card.escola} />
                </li>
                <li>
                  <span>Escola:</span>
                  <p>{card.escola}</p>
                </li>
                <li>
                  <span>Curso:</span>
                  <p>{card.curso}</p>
                </li>
                <li>
                  <span>Modalidade:</span>
                  <p>{card.modalidade}</p>
                </li>
                <li>
                  <span>Descrição:</span>
                  <p>{card.descricao}</p>
                </li>
                <li>
                  <button>Inscrever-se</button>
                </li>
              </ul>
            </Description>
          </Aside>
        </Section>
      ) : null}
    </>
  );
};

const CoursesTitle = () => {
  return (
    <UlTitle>
      <li>
        <p>Escola</p>
      </li>
      <li>
        <p>Curso</p>
      </li>
      <li>
        <p>Modalidade</p>
      </li>
    </UlTitle>
  );
};

export const CoursesAvailable = () => {
  return (
    <ContainerDescription>
      <CoursesTitle />
      {availableItems.map((el, index) => {
        return <CoursesDescription card={el} key={index} />;
      })}
    </ContainerDescription>
  );
};
