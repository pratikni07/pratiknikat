import React from "react";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import Resume from "./Resume";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
