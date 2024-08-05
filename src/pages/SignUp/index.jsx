import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>CinemaVault</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <div className="form-fields">
          <Input 
            icon={FiUser}
            placeholder="Nome"
            type="text"
          />

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

        <Button title="Cadastrar"/>

        <ButtonText title="Voltar para o login" icon={FiArrowLeft}/>
      </Form>

      <Background />
    </Container>
  )
}