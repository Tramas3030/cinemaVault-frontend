import PropTypes  from "prop-types";

import { Container } from "./styles";

export function MovieText({ text, textpreview = false }) {
  return(
    <Container $textpreview={textpreview.toString()}>
      {`${text}`}
    </Container>
  )
}

MovieText.propTypes = {
  text: PropTypes.string,
  textpreview: PropTypes.bool,
}