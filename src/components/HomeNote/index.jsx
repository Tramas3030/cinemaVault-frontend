import PropTypes  from "prop-types";

import { Container } from "./styles";

import { MovieRating } from "../MovieRating";
import { MovieName } from "../MovieName";
import { MovieText } from "../MovieText";
import { Tag } from "../Tag";

export function HomeNote({ movieTitle, text, rating, datatags }) {
  return(
    <Container>
      <div className="header">
        <MovieName movieTitle={movieTitle} />
        
        <MovieRating rating={rating}/>
      </div>

      <MovieText text={text} textpreview/>

      {
        datatags && 
        <div className="tags">
          {
            datatags.tags.map(tag => <Tag tagText={tag.text} key={tag.id} home/>)
          }
        </div>
      }

    </Container>
  )
}

HomeNote.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  text: PropTypes.string,
  rating: PropTypes.number,
  datatags: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    }))
  }),
}