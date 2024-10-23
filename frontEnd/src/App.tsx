import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/navbar/*" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
