import React from "react";
import HeroCard from "../components/heroCard/HeroCard";
import LinkItem from "../components/link/LinkItem";
import email from "../img/svg/email.svg";
import telegram from "../img/svg/telegram.svg";
import github from "../img/svg/github.svg";
import phone from "../img/svg/phone.svg";
import linkedin from "../img/svg/linkedin.svg";

const Main = () => {
  return (
    <main>
      <HeroCard />
      <hr />
      <LinkItem
        icon={linkedin}
        title={"LinkedIn"}
        href={"https://www.linkedin.com/in/luckyboggy"}
      />
      <LinkItem
        icon={github}
        title={"gitHub"}
        href={"https://github.com/luckyboggy"}
      />
      <hr />
      <LinkItem
        icon={telegram}
        title={"Telegram"}
        href={"https://t.me/luckyboggy"}
      />
      <LinkItem
        icon={email}
        title={"e-mail"}
        href={"mailto: luckyboggy@gmail.com"}
      />
      <LinkItem
        icon={phone}
        title={"+7 908 919 25 14"}
        href={"tel:+79089192514"}
      />
    </main>
  );
};

export default Main;
