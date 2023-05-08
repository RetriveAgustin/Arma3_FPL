import "./App.css";

/* IMPORT COMPONENTES */
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
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
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route exact path="/delta" Component={Delta} />
        <Route exact path="/condor" Component={Condor} />
        <Route exact path="/mike" Component={Mike} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
