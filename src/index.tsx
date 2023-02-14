import React, { useState } from "react";
import ReactDOM from "react-dom";
import "nes.css/css/nes.min.css";
import GlobalStyle from './ui/helpers/styles/global';
import { SelectThemeProvider } from './ui/helpers/hooks/theme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as C from "./ui/helpers/constantes";
import Hash from './ui/components/templates/Hash';

const App = () => {
  const [initialBoard, setInitialBoard] = useState(C.boardDefaultString);

  return (
    <SelectThemeProvider>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path="/" element={<Hash board={initialBoard} setInitialBoard={setInitialBoard} />} />
          <Route path={`/react-hash/`} element={<Hash board={initialBoard} setInitialBoard={setInitialBoard} />} />
          {/*route /react-hash/ was defined because of git, where the project is hosted! */}
          <Route path='*' element={<h1>URL NAO EXISTE!</h1>} />
        </Routes>
      </Router>
    </SelectThemeProvider>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);