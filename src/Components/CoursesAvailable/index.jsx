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
import { useContext } from "react";
import { CoursesContext } from "../../Provider/Courses";
import { toast } from "react-toastify";

const CoursesDescription = ({ card, index, id = "modal" }) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClick = (e) => {
    if (e.target.id === id) {
      setIsClosed(!isClosed);
    }
  };
  const { addCourses, myCourses } = useContext(CoursesContext);

  const handleAddCourses = (card) => {
    addCourses(card);
    setIsClosed(!isClosed);
    toast.success("Inscrição realizada!", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
        <Section
          id={id}
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
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
                  <button onClick={() => handleAddCourses(card)}>
                    Inscrever-se
                  </button>
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
