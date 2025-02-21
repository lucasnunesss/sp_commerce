import BgSection from "@/components/BgSection";
import { boot } from "../../public/images";


export default function Home() {
  const bgStyle = `url(${boot.src})`
  return (
    <div className="">
      <BgSection bg={bgStyle} subTitle={"Bem Vindo a nossa loja esportiva"} btn={true}>

          Nunca desista, Dispute com <span className='bg-red-700 rounded-md py-1 px-2 italic'>honra,</span> <br />vença com humildade.
        </BgSection>
    </div>
  );
}
