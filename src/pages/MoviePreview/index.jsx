import { FiArrowLeft } from "react-icons/fi";

import { Container, Content } from "./styles";

// import { 
//   Header,
//   ButtonText,
//   MovieName,
//   MovieRating,
//   MovieRegisterDate,
// } from "components";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { MovieName } from "../../components/MovieName";
import { MovieRating } from "../../components/MovieRating";
import { MovieRegisterDate } from "../../components/MovieRegisterDate";
import { Tag } from "../../components/Tag";

export function MoviePreview() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <div className="content-header">
            <ButtonText title="Voltar" icon={FiArrowLeft}/>
            <div className="movieName-and-rating">
              <MovieName title="Interestellar" islarge/>
              <MovieRating islarge editable/>
            </div>
            <MovieRegisterDate data={{
              userName: "Matheus Raphael",
              day: "24/07/2024",
              hours: "10:27"
            }}/>
          </div>

          <div className="tags">
            <Tag title="Ficção Científica" />
            <Tag title="Drama" />
            <Tag title="Família" />
          </div>
        </Content>
      </main>
    </Container>
  )
}