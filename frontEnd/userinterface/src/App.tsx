import React from "react";
import DynamicForm from "./dynamicForm";
import TitleNew from "./title"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<DynamicForm />} />
          <Route path="/title" element={<TitleNew />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
