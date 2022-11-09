import React from "react";

const HeroCard = () => {
  return (
    <div className="hero">
      <div className="hero__card">
        <div>
          <img
            src={require("../../img/cv_photo.jpg")}
            alt="#"
            className="hero__photo"
          />
        </div>
        <div className="hero__name">Bogdan Kovalyov</div>
        <div className="hero__description">frontend developer</div>
      </div>
      <div className="hero__links"></div>
    </div>
  );
};

export default HeroCard;
