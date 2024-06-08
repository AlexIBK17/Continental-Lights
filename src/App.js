import React from "react";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import "./App.css";
import "../src/styles/PageRpns.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { ProductProvider } from "./context/ProductContext";
import NewProduct from "./pages/admin/NewProduct";

function AdminLayout() {
  return (
    <div className="admin-layout">
      {/* <AdminNavBar /> Render admin-specific navbar */}
      <Routes>
        {/* Define admin routes */}
        <Route path="/2j2243245n42/newProduct" element={<NewProduct />} />
        {/* Add more admin routes as needed */}
      </Routes>
    </div>
  );
}

function App() {
  // const products = data;
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <ProductProvider>
      <div className="mainContainer">
        <div className="app-main">
          {/* <NavBar /> */}
          {!isAdminRoute && <NavBar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prods" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prods/:catigory/:id" element={<Details />} />
            <Route path="/admin/*" element={<AdminLayout />} />
            {/* Define admin routes */}
          </Routes>
        </div>
        <Footer className="footer" />
      </div>
    </ProductProvider>
  );
}

export default App;
