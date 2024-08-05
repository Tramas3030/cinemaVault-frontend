import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>CinemaVault</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <div className="form-fields">
          <Input 
            icon={FiMail}
            placeholder="E-mail"
            type="text"
          />

          <Input 
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />
        </div>

        <Button title="Entrar"/>

        <a href="#">Criar conta</a>
      </Form>

      <Background />
    </Container>
  )
}