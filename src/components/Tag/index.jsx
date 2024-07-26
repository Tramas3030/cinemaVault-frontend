import PropTypes  from "prop-types";

import { Container } from "./styles";

export function Tag({ title, home = false }) {
  return(
    <Container $home={home.toString()}>
      {title}
    </Container>
  )
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.bool
}