import React from "react";
import { Navbar, Sidebar, Footer } from "../components";
import FeaturedProducts from "../components/featuredProducts/FeaturedProducts";
const HomePage = () => {
  return (
    <>
      <Navbar />

      <Sidebar />
      <div>
        <h1>HomePage</h1>
      </div>
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default HomePage;
