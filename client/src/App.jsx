import "./App.css";

/* IMPORT COMPONENTES */
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/Navbar";
import About from "./Views/About/About";
import Condor from "./Views/Condor/Condor";
import Delta from "./Views/Delta/Delta";
import Home from "./Views/Home/Home";
import Mike from "./Views/Mike/Mike";
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
        <Route exact path="/condor" Component={Condor} />
        <Route exact path="/mike" Component={Mike} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
