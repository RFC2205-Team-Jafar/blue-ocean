import React from "react";
import Header from "./Components/Header.jsx";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

const App = () => {
  return (
    // <h1>Hello World</h1>
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
};

root.render(<App />);
