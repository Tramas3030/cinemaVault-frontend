import PropTypes  from "prop-types";

import { Container } from "./styles";

import { MovieRating } from "../MovieRating";
import { MovieName } from "../MovieName";
import { MovieText } from "../MovieText";
import { Tag } from "../Tag";

export function HomeNote({ movieTitle, text, rating }) {
  return(
    <Container>
      <div className="header">
        <MovieName movieTitle={movieTitle} />
        
        <MovieRating rating={rating}/>
      </div>

      <MovieText text={text} textpreview/>

      <div className="tags">
        <Tag home tagText="Ficção Científica"/>
        <Tag home tagText="Drama"/>
        <Tag home tagText="Família"/>
      </div>
    </Container>
  )
}

HomeNote.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  text: PropTypes.string,
  rating: PropTypes.number,
}