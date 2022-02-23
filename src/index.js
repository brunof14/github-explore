import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GithubProvider } from "./Providers/GithubProvider";
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <GlobalStyles />
      <App />
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
