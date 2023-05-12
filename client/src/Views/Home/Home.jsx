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
      <Carrousel fotos={images}/>
    </div>
  )
}

export default Home;