import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "./Provider/index";
import {GLobalStyled} from "./Assets/Styles/global"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <GLobalStyled />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
