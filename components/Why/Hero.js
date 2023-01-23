import Image from "next/image";
import HeroImagelg from "../../public/img/HeroImagelg.png";

function Hero(props) {
  return (
    <header>
      <div className="relative">
        <Image
          priority
          src={HeroImagelg}
          alt="Hero Image"
          className="rounded-t-3xl w-full"
        />
        <div className="absolute top-[40%] left-[8%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h1 className="font-tillana text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white">
            Top 5 Reasons You Should Own a Cat
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Hero;
