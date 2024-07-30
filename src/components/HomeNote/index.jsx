import PropTypes  from "prop-types";

import { Container } from "./styles";

import { MovieRating } from "../MovieRating";
import { MovieName } from "../MovieName";
import { Tag } from "../Tag";

export function HomeNote({ movieTitle, textPreview }) {
  return(
    <Container>
      <div className="header">
        <MovieName movieTitle={movieTitle} />
        
        <MovieRating />
      </div>

      <p>
        {textPreview}
      </p>

      <div className="tags">
        <Tag tagText="Ficção Científica"/>
        <Tag tagText="Drama"/>
        <Tag tagText="Família"/>
      </div>
    </Container>
  )
}

HomeNote.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  textPreview: PropTypes.string,
}