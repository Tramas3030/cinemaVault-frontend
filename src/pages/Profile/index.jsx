import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  return(
    <Container>
      <header>
        <ButtonText icon={FiArrowLeft} title="Voltar" to="/"/>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Tramas3030.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file"/>
          </label>
        </Avatar>

        <div className="userName-and-userEmail">
          <Input 
            icon={FiUser}
            placeholder="Seu nome"
            type="text"
          />
          
          <Input 
            icon={FiMail}
            placeholder="Seu email"
            type="text"
          />
        </div>

        <div className="password">
          <Input 
            icon={FiLock}
            placeholder="Senha atual"
            type="password"
          />

          <Input 
            icon={FiLock}
            placeholder="Nova senha"
            type="password"
          />
        </div>

        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}