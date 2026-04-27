import { React } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/habilidades";
import Habilidades from "./components/habilidades";
import Intereses from "./components/intereses";
import Proyectos from "./components/proyectos";

function App() {
  return (
    <>
      <Header />

      <br />

      <Habilidades />

      <br />

      <Intereses />

      <br />

      <Proyectos />

      <br />

      <Footer />
    </>
  );
}

export default App;
