import React from "react";
import DynamicForm from "./dynamicForm";
import TitleNew from "./title"
import { BrowserRouter, Routes,Route } from "react-router-dom";


function App () {
  return(
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<DynamicForm/>}/>
            <Route path="/home" element={<TitleNew />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
