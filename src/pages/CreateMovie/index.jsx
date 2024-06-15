import { FiArrowLeft } from "react-icons/fi";

import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";

export function CreateMovie() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Voltar" icon={FiArrowLeft}/>
          <h1>Novo Filme</h1>

          <div className="title-and-rating">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="markers-note-item">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <footer>
            <Button highlight title="Excluir filme" />
            <Button title="Salvar alterações"/>
          </footer>
        </Content>
      </main>
    </Container>
  )
}