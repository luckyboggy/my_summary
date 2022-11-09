import React from "react";
import HeroCard from "../components/heroCard/HeroCard";
import email from "../img/svg/email.svg";
import telegram from "../img/svg/telegram.svg";

const Main = () => {
  return (
    <main>
      <HeroCard />
      <hr />
      <a type="email" href=" " className="link">
        <div className="link__icon">
          <img src={email} alt="email" height={"34px"} />
        </div>
        Написать e-mail
      </a>
      <a type="email" href=" " className="link">
        <div className="link__icon">
          <img src={telegram} alt="telegram" height={"34px"} />
        </div>
        Написать в telegram
      </a>
    </main>
  );
};

export default Main;
