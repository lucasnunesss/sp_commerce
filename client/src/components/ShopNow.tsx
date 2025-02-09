import Image from "next/image";
import { arrowRight, arrowRightBlack } from "../../public/images";

interface TextProps {
  text: string;
  bg: string;
  textColor: string;
}

const ShopNow: React.FC<TextProps> = ({ text, bg, textColor }) => {
  const arrowIcon = textColor !== "black" ? arrowRight : arrowRightBlack;

  return (
    <button
      className="p-2 w-[150px] flex items-center justify-center font-normal sm:hidden"
      style={{ background: bg, color: textColor }}
    >
      {text}
      <Image src={arrowIcon} alt="arrow right" width={30} className="ml-2 font-bold" />
    </button>
  );
};

export default ShopNow;