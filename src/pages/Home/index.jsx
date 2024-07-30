import { FiPlus } from "react-icons/fi";

import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { HomeNote } from "../../components/HomeNote";

export function Home() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <div className="home-header">
            <h1>Meus filmes</h1>
            <ButtonText 
              icon={FiPlus}
              title="Adicionar filme"
            />
          </div>

          <div className="movies">
            <HomeNote
              movieTitle="Interstellar"
              textPreview="Pragas nas colheitas fizeram a civilização 
              humana regredir para uma sociedade agrária em futuro de 
              data desconhecida. Cooper, ex-piloto da NASA, tem uma 
              fazenda com sua família. Murphy, a filha de dez anos 
              de Cooper, acredita que seu quarto está assombrado 
              por um fantasma que tenta se..."
            />

            <HomeNote
              movieTitle="Interstellar"
              textPreview="Pragas nas colheitas fizeram a civilização 
              humana regredir para uma sociedade agrária em futuro de 
              data desconhecida. Cooper, ex-piloto da NASA, tem uma 
              fazenda com sua família. Murphy, a filha de dez anos 
              de Cooper, acredita que seu quarto está assombrado 
              por um fantasma que tenta se..."
            />

            <HomeNote
              movieTitle="Interstellar"
              textPreview="Pragas nas colheitas fizeram a civilização 
              humana regredir para uma sociedade agrária em futuro de 
              data desconhecida. Cooper, ex-piloto da NASA, tem uma 
              fazenda com sua família. Murphy, a filha de dez anos 
              de Cooper, acredita que seu quarto está assombrado 
              por um fantasma que tenta se..."
            />
          </div>
        </Content>
      </main>
    </Container>
  )
}
