import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
  return(
    <Container>
      <h1>CinemaVault</h1>
      
      <Input placeholder="Pesquisar pelo título"/>

      <Profile>
        <img src="https://github.com/Tramas3030.png" alt="Foto do usuário" />

        <div>
          <strong>Matheus Raphael</strong>
          <button>sair</button>
        </div>
      </Profile>
    </Container>
  )
}