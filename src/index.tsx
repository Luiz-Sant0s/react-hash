import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './ui/helpers/globalStyle/globalStyle.css';
import { boardDefault } from "./ui/helpers/constantes";
import Hash from './ui/components/templates/Hash';

const App = () => {
  const [initialBoard, setInitialBoard] = useState(boardDefault);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hash board={initialBoard} setInitialBoard={setInitialBoard} />} />
        <Route path={`/react-hash/`} element={<Hash board={initialBoard} setInitialBoard={setInitialBoard} />} />
        {/*rota /react-hash/ foi definida por causa do git, onde o projeto ta hospedado! */}
        <Route path='*' element={<h1>URL NAO EXISTE!</h1>} />
      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);