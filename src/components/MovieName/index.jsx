import PropTypes  from "prop-types";

import { Container } from "./styles";

export function MovieName({ title, islarge = false }) {
  return(
    <Container $islarge={islarge.toString()}>
      {title}
    </Container>
  )
}

MovieName.propTypes = {
  title: PropTypes.string.isRequired,
  islarge: PropTypes.bool,
}