// /src/pages/Home.js
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HomeContent from "../components/HomeContent";
const Home = () => {
  return (
    <div >
      <Header />
      <NavBar />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default Home;


