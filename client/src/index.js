import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider } from "./contexts/userContext";

ReactDOM.render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>,
  document.getElementById("root")
);
