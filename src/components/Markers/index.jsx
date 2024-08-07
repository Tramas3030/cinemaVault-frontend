import PropTypes from "prop-types";

import { FiPlus, FiX } from "react-icons/fi"

import { Container } from "./styles";

export function Markers({ isNew, value, onClick, ...rest }){

  return(
    <Container isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}

Markers.propTypes = {
  value: PropTypes.string,
  isNew: PropTypes.bool,
  onClick: PropTypes.func
}