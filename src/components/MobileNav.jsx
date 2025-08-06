import React from "react";
import Hamburger from "../../images/icon-Hamburger.svg";
import Close from "../../images/icon-close.svg";

function MobileNav({ openNav, handleClick }) {
  return (
    <div onClick={handleClick} className="transition-all ease-in-out">
      <img src={`${openNav ? Hamburger : Close}`} alt="" />
    </div>
  );
}

export default MobileNav;
