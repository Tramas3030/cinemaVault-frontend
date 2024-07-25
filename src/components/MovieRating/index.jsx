import PropTypes  from "prop-types";

import { FiStar } from "react-icons/fi";

import { Container, Star } from "./styles";

export function MovieRating({ isLarge = false, editable = false }) {
  const rating = 3;

  return(
    <Container >
      {Array.from({length: 5}, (_, index) => (
        <Star 
          key={index} 
          active={index < rating} 
          isLarge={isLarge}
          disabled={editable}  
        >
          <FiStar size={20}/>
        </Star>
      ))}
    </Container>
  )
}

MovieRating.propTypes = {
  isLarge: PropTypes.bool,
  editable: PropTypes.bool,
}