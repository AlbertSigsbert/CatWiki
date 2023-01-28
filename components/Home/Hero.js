import Image from "next/image";
import HeroImagelg from "../../public/img/HeroImagelg.png";
import Search from "./Search";


function Hero({breeds}) {
  return (
    <section className="bg-[#E3E1DC] rounded-3xl">
      <div className="relative">
        <Image
          priority
          src={HeroImagelg}
          alt="Hero Image"
          className="rounded-t-3xl w-full"
        />
        <div
          className="absolute top-[20%] sm:top-[25%]  2xl:top-[35%] left-[7%] 2xl:left-[15%] max-w-[136px] sm:max-w-[214px] md:max-w-xs lg:max-w-sm"
        >
          <Image
            src="/img/LogoWhite.svg"
            alt="CatWiki Logo"
            width="207"
            height="87"
            className="w-[46px] sm:w-[100px] lg:w-[207px]"
          />
          <h2 className="mt-1 sm:mt-2 mb-4 sm:mb-6 md:mb-8 font-montserrat font-medium text-[10px] sm:text-sm md:text-lg lg:text-2xl text-white">
            Get to know more about your cat breed
          </h2>

          <Search breeds={breeds}/>

        </div>
      </div>
    </section>
  );
}

export default Hero;
