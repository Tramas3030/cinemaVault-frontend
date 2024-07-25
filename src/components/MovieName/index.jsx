import PropTypes  from "prop-types";

import { Container } from "./styles";

export function MovieName({ title, isLarge = false }) {
  return(
    <Container isLarge={isLarge}>
      {title}
    </Container>
  )
}

MovieName.propTypes = {
  title: PropTypes.string.isRequired,
  isLarge: PropTypes.bool,
}