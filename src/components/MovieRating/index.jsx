import PropTypes  from "prop-types";

import { FiStar } from "react-icons/fi";

import { Container, Star } from "./styles";

export function MovieRating({ islarge = false, editable = false, rating }) {
  const finalRating = rating ?? 3;

  return(
    <Container >
      {Array.from({length: 5}, (_, index) => (
        <Star 
          key={index} 
          $active={(index < finalRating).toString()} 
          $islarge={islarge.toString()}
          $disabled={editable.toString()}  
        >
          <FiStar size={20}/>
        </Star>
      ))}
    </Container>
  )
}

MovieRating.propTypes = {
  islarge: PropTypes.bool,
  editable: PropTypes.bool,
  rating: PropTypes.number,
}