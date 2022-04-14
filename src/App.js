import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screen/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartScreen from "./screen/CartScreen";
import RegisterScreen from "./screen/RegisterScreen";
import ProductsDetailScreen from "./screen/ProductsDetailScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductsDetailScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
