import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/products/:id" element={<ProductScreen />} />
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
