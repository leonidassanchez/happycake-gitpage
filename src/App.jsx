import { useState } from "react";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacto from "./components/Contacto";
function App() {
  const [persona, setPersona] = useState(true);
  return (
    <>
      {persona ? <Nav /> : <h1>adios</h1>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contacto" element={<Contacto />} />

        <Route
          path="*"
          element={<h1>no se encontró esta página Error 404</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
