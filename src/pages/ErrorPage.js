import React from "react";

import error404Image from "../assets/404.png";
import PrimaryLink from "../components/primaryLink/PrimaryLink";
import "./errorPage.scss";

const ErrorPage = () => {
  return (
    <section className="error_404">
      <div>
        <h5>Error 404</h5>
        <div>
          <h3>Whoops!</h3>
          <h3>Nothing to see here</h3>
        </div>
        <p className="">
          The page you are looking for does not exist or has been removed
        </p>
        <PrimaryLink linkText="Take me Home" to="/" />
      </div>
      <div className="image__404">
        <img src={error404Image} alt="" srcset="" />
      </div>
    </section>
  );
};

export default ErrorPage;
