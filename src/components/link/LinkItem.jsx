import React from 'react';

const LinkItem = (props) => {
    const {icon, title} = props;
    return (
        <a type="email" href=" " className="link">
        <div className="link__icon">
          <img src={icon} alt="email" height={"34px"} />
        </div>
        {title}
      </a>
    );
};

export default LinkItem;