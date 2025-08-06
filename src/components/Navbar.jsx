import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import MobileNav from "./MobileNav";
import ButtonOne from "./ButtonOne";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const handleClick = () => {
    setOpenNav((c) => !c);
  };
  return (
    <div>
      <div className="fixed top-0 z-30  bg-white w-full  mb-3">
        <div className="w-full p-2   md:w-3/4 mx-auto md:p-2  flex  justify-between items-center">
          <div className="">
            <img src={Logo} alt="logo" className="w-2/3" />
          </div>

          <div className=" hidden md:flex  gap-4 font-semibold list-none bg-red">
            <li className="ml-2">Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </div>

          <div className="hidden md:block">
            <ButtonOne />
          </div>
          <div className=" md:hidden">
            {<MobileNav openNav={openNav} handleClick={handleClick} />}
          </div>
        </div>
      </div>
      <div className="relative w-3/4 mx-auto py-2 text-xl font-semibold cursor-pointer md:hidden">
        {!openNav && (
          <div className="w-full fixed top-10 z-30 right-0 backdrop-blur-md flex flex-col gap-y-4 items-center ">
            <li className="">Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
