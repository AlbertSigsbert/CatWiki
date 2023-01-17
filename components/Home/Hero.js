import Image from "next/image";
import HeroImagelg from "../../public/img/HeroImagelg.png";
import HeroImagemd from "../../public/img/HeroImagemd.png";
import HeroImagesm from "../../public/img/HeroImagesm.png";

function Hero(props) {
  return (
    <section className="bg-[#E3E1DC] rounded-3xl">
      <div className="relative">
        <Image
          priority
          src={HeroImagelg}
          alt="Hero Image"
          className="rounded-t-3xl w-full"
        />
        <div className="absolute top-[20%] sm:top-[25%]  2xl:top-[35%] left-[7%] 2xl:left-[15%] max-w-[136px] sm:max-w-[214px] md:max-w-xs lg:max-w-sm">
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

          <label className="relative">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-4 md:pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-2.5 h-2.5 sm:w-4 sm:h-4 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              
            </span>
            <input
              type="search"
              className="p-0.5 sm:p-2 md:p-3 lg:p-4 pl-2 sm:pl-4 md:pl-8 w-full flex items-center  placeholder:text-xs md:placeholder:text-lg  rounded-[59px] font-montserrat placeholder:text-[#291507] truncate"
              placeholder="Enter your breed"
            />
          </label>
        </div>
      </div>
    </section>
  );
}

export default Hero;
