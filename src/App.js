import React from "react";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { ProductProvider } from "./context/ProductContext";
function App() {
  // const products = data;
  return (
    <ProductProvider>
      <div className="mainContainer">
        <div className="app-main">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prods" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prods/:id" element={<Details />} />
          </Routes>
        </div>
        <Footer className="footer" />
      </div>
    </ProductProvider>
  );
}

export default App;
