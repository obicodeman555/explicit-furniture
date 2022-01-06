import React from "react";
import { Navbar, Sidebar, Footer } from "../components";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <Sidebar />
      <div>
        <h1>HomePage</h1>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
