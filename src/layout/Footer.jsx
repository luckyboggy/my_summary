import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer__wrapper">
        <div className="footer__copyright">© {year} Copyright Text</div>
      </div>
    </footer>
  );
};

export default Footer;
