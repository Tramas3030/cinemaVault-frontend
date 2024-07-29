import PropTypes from "prop-types";

import { Container } from "./styles";

export function Button({ title, loading = false, highlight = false, ...rest }) {
  
  return(
    <Container 
      type="button"
      disabled={loading}
      $highlight={highlight.toString()}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  highlight: PropTypes.bool,
};
