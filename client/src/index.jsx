import React from 'react';
import { createRoot } from "react-dom/client";
import FileUpload from './fileUpload.jsx'
const root = createRoot(document.getElementById("root"));

const App = () => {
  return (
  <div>
  <h1>Hello World</h1>
  {FileUpload("Resume")}
  {FileUpload("Cover Letter")}
  </div>
  )
}

root.render(<App />);