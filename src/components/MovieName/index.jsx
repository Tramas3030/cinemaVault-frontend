import PropTypes  from "prop-types";

import { Container } from "./styles";

export function MovieName({ movieTitle, islarge = false }) {
  return(
    <Container $islarge={islarge.toString()}>
      {movieTitle}
    </Container>
  )       
}

MovieName.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  islarge: PropTypes.bool,
}