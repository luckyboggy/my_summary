import React from "react";

const LinkItem = (props) => {
  const { icon, title, type, href } = props;
  return (
    <a
      type={type}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link"
    >
      <div className="link__icon">
        <img src={icon} alt="email" height={"34px"} />
      </div>
      {title}
    </a>
  );
};

export default LinkItem;
