import "./Home.css"
/* IMPORT COMPONENTES */
import Carrousel from "../../Components/Carrousel/Carrousel";
import fplcard from "./assets/fplcard.png";
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";


const Home = () => {
  let images = [
    {
      image: fplcard,
      alt_text: "first slice",
      label: "",
      text: ""
    },
    {
      image: image1,
      alt_text: "second slice",
      label: "Delta",
      text: "Honor | Lealtad | Disciplina"
    },
    {
      image: image2,
      alt_text: "tird slice",
      label: "Label",
      text: "some text"
    }
  ]

  return (
    <div className="home-container">
      <div className="carousel-container">
        <Carrousel fotos={images}/>
      </div>
      <div className="seccion1">
        <div className="seccion1-comunidad">
          <h2>La Comunidad</h2>
          <p>F.P.L. es una comunidad que busca desarrollar un ambiente equilibrado entre Milsim (durante las operaciones) y Soft Sim (entorno relajado fuera de las operaciones) a fin de desarrollar la hermandad y la camaradería.</p>
        </div>
        <div className="seccion1-vanguardia">
          <p>Siempre tratamos de estar a la vanguardia, tanto con los mods, modos de juego y en tácticas o estrategias. Contamos con un servidor Top Tier para desarrollar las actividades regulares y extra-oficiales.</p>
        </div>
        <div className="seccion1-actividades">
          <h3>Actividades Oficiales</h3>
          <p>Llevadas a cavo por la plana de Oficiales y Suboficiales, estas campañas se enmarcan en la más estricta replicación de contextos operacionales diversos.</p>
          <h3>Actividades Extra-Oficiales</h3>
          <p>Estas operaciones pueden ser campañas o misiones desarrolladas por cualquiera de los miembros del Clan, a partir del rango de Soldado, y son reguladas por miembros capacitados para mantener el nivel de simulación de las operaciones.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;