/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./Carrousel.css";

/* IMPORT COMPONENTS */
import { Carousel } from "react-bootstrap";

const Carrousel = (props) => {

  return (
    <Carousel>
      {
        props.fotos.map(foto => {
          return (
            <Carousel.Item>
              <img className="d-block carousel-img" src={foto.image} alt={foto.alt_text} />

              <Carousel.Caption>
                <h3>{foto.label}</h3>
                <p>{foto.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
};

export default Carrousel;
