import PropTypes  from "prop-types";

import { Container } from "./styles";

export function Tag({ tagText, home = false }) {
  return(
    <Container $home={home.toString()}>
      {tagText}
    </Container>
  )
}

Tag.propTypes = {
  tagText: PropTypes.string.isRequired,
  home: PropTypes.bool
}