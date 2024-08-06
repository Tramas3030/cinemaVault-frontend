import { Link } from "react-router-dom";

import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
  return(
    <Container>
      <Link to="/">CinemaVault</Link>
      
      <Input placeholder="Pesquisar pelo título" type="text"/>

      <Profile to="/profile">
        <div>
          <strong>Matheus Raphael</strong>
          <a href="#">sair</a>
        </div>
        
        <img src="https://github.com/Tramas3030.png" alt="Foto do usuário" />

      </Profile>
    </Container>
  )
}
