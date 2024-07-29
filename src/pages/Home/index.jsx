import { FiPlus } from "react-icons/fi";

import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";

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
        </Content>
      </main>
    </Container>
  )
}
