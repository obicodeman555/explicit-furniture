import React from "react";

import FeaturedProducts from "../components/featuredProducts/FeaturedProducts";
import handshake from "../assets/handshake.svg";
import settings from "../assets/settings.svg";
import travel from "../assets/travel.svg";
import { Link } from "react-router-dom";
import bannerImageOne from "../assets/side-image.jpg";

import "./homePage.scss";

const HomePage = () => {
  return (
    <>
      <div className="explicitFurnitures">
        <main className="main__container">
          <section className="hero__one__container">
            <div className="hero__content">
              <div className="hero__transparentCard">
                <div className="hero__transparentCard__body">
                  <h1 className="hero__card__megaText line__height-20">
                    Get the expectional, high-quality furniture just for you
                  </h1>
                  <ul className="beInterested__lists text__gray mxWidth-60 text__bold hero__transparentCard__bodyIntroText">
                    <li className="beInterested__list__item">
                      <span className="beInterested__list__itemImageBox">
                        <img src={travel} alt="travel icon" />
                      </span>
                      <span className="beInterested__list__itemText">
                        we travel the world to find traditional and modern
                        furniture
                      </span>
                    </li>
                    <li className="beInterested__list__item">
                      <span className="beInterested__list__itemImageBox">
                        <img src={handshake} alt="handshake icon" />
                      </span>
                      <span className="beInterested__list__itemText">
                        outstanding customer experiences on your product desire
                      </span>
                    </li>
                    <li className="beInterested__list__item">
                      <span className="beInterested__lists__item">
                        <img src={settings} alt="handshake icon" />
                      </span>
                      <span className="beInterested__list__itemText">
                        You decide want you want, and we'll be by your side to
                        help you get the best
                      </span>
                    </li>
                  </ul>
                  <div className="hero__ctaButton">
                    <div className="primaryLink--cta" id="shopNow">
                      <Link to="">
                        <span>Shop now</span>
                        <svg
                          width="20"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 2L11 13"
                            stroke="#212D52"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22 2L15 22L11 13L2 9L22 2Z"
                            stroke="#212D52"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="primaryLink--cta" id="customOrders">
                      <Link to="">
                        <span>Custom orders</span>
                        <svg
                          width="35"
                          height="42"
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_313_25)">
                            <path
                              d="M21 31C26.5228 31 31 26.5228 31 21C31 15.4772 26.5228 11 21 11C15.4772 11 11 15.4772 11 21C11 26.5228 15.4772 31 21 31Z"
                              stroke="#0ED797"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M21 25L25 21L21 17"
                              stroke="#0ED797"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M17 21H25"
                              stroke="#0ED797"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_313_25"
                              x="-1"
                              y="-1"
                              width="44"
                              height="44"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.108333 0 0 0 0 0.0984028 0 0 0 0 0.0984028 0 0 0 0.33 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_313_25"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_313_25"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero__rightContent">
                <div className="hero__imageBox">
                  <img src={bannerImageOne} alt="banner hero advert" />
                </div>
                <div className="pulsing__moon"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
