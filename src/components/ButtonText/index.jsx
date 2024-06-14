import PropTypes  from "prop-types";

import { Container } from "./styles";

export function ButtonText({ icon: Icon, title, ...rest}) {
  return(
    <Container
    type="button"
    {...rest}
    >
      {Icon && <Icon size={20}/>}
      { title }
    </Container>
  )
}

ButtonText.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
}