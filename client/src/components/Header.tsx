import Image from "next/image";
import React from "react";
import { cart, menuSvg, spfc } from "../../public/images";
const Header = () => {
  return (
<div className="header-col flex justify-center items-end h-[100px] relative w-full">
  {/* Ícone do Menu */}
  <Image
    src={menuSvg}
    alt="menu"
    width={20}
    className="absolute left-4 bottom-10 svg-class  lg:hidden"
  />

  {/* Logo */}
  <div>
    <Image
      src={spfc}
      alt="spfc"
      className="w-[150px] m-auto top-5 relative sm:w-[40%] md:w-[25%] lg:w-[20%] "
    />
  </div>

  <Image
    src={cart}
    alt="menu"
    width={40}
    className="absolute right-10 bottom-8 svg-class  lg:hidden"
  />
</div>
  );
};

export default Header;
