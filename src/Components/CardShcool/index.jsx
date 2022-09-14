import { Container, Content } from "./styled";

export const CardEscola = ({ nameSchool, img, fn }) => {
  return (
    <Container onClick={() => fn}>
      <Content>
        <figure>
          <img src={img} alt={nameSchool} />
        </figure>
        <p>{nameSchool}</p>
      </Content>
    </Container>
  );
};
