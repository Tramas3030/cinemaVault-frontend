import PropTypes  from "prop-types";

import { FiClock } from "react-icons/fi";

import { Container } from "./styles";

export function MovieRegisterDate({ data }) {
  return(
    <Container>
      <img src="https://github.com/Tramas3030.png" alt="Foto do usuário" />
      <span>Por {data.userName}</span>
      <FiClock />
      <span>{data.day} às {data.hours}</span>
    </Container>
  )
}

MovieRegisterDate.propTypes = {
  data: PropTypes.object.isRequired,
}