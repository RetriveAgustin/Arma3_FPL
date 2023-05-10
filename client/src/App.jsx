import "./App.css";

/* IMPORT COMPONENTES */
// import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/Navbar";
import About from "./Views/About/About";
import Campañas from "./Views/Campañas/Campañas";
import Carreras from "./Views/Carrera/Carrera";
import Condor from "./Views/Condor/Condor";
import Delta from "./Views/Delta/Delta";
import Home from "./Views/Home/Home";
import Informacion from "./Views/Informacion/Informacion";
import Mike from "./Views/Mike/Mike";
import Reglamentos from "./Views/Reglamentos/Reglamentos";
import Social from "./Views/Social/Social";
/* FIN IMPORT COMPONENTES */

/* IMPORT UTILS */
import { Routes, Route } from "react-router-dom";
/* FIN IMPORT UTILS */

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/delta" Component={Delta} />
        <Route exact path="/campaña" Component={Campañas} />
        <Route exact path="/carrera" Component={Carreras} />
        <Route exact path="/condor" Component={Condor} />
        <Route exact path="/informacion" Component={Informacion} />
        <Route exact path="/mike" Component={Mike} />
        <Route exact path="/reglamentos" Component={Reglamentos} />
        <Route exact path="/social" Component={Social} />
      </Routes>
    </>
  );
}

export default App;
