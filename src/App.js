import { Fragment } from "react";
import {  Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Store from "./pages/Store";

import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Login from "./pages/Login";





let App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
       
       
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
