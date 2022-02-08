import React from "react";
import { Navbar, Sidebar, Footer, PrimaryButton } from "../components";
import FeaturedProducts from "../components/featuredProducts/FeaturedProducts";
import "./homePage.scss";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <Sidebar />
      <main className="main__container">
        <section className="hero__one__container">
          <div className="hero__backgroundImage"></div>
          <div className="hero__content">
            <div className="hero__transparentCard">
              <div className="hero__transparentCard__body">
                <h1 className="mxWidth-60 line__height-20">
                  High-Quality Furniture Just For You
                </h1>
                <span className="text__gray mxWidth-60 text__bold hero__transparentCard__body_introText">
                  Our furinture is made from selected and best quality materials
                  that are suitable for your dream house
                </span>
                <PrimaryButton buttonText="Shop Now" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default HomePage;
