import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";

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
