import Image from "next/image";
import HeroImagelg from "../../public/img/HeroImagelg.png";
import HeroImagemd from "../../public/img/HeroImagemd.png";
import HeroImagesm from "../../public/img/HeroImagesm.png";

function Hero(props) {
  return (
    <section className="bg-[#E3E1DC] rounded-3xl">
      <div>
        <Image
          src={HeroImagelg}
          alt="Hero Image"
          className="rounded-t-3xl w-full"
        />
        <div className="absolute top-[35%] left-[15%] max-w-sm">
          <Image
            src="/img/LogoWhite.svg"
            alt="CatWiki Logo"
            width="207"
            height="87"
          />
          <h2 className="mt-2 mb-8 font-montserrat font-medium text-2xl text-white">
            Get to know more about your cat breed
          </h2>

          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 right-0 flex items-center pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
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
              className="p-4 pl-8 w-full rounded-[59px] font-montserrat  placeholder:text-[#291507]"
              placeholder="Enter your breed"
            />
          </label>
        </div>
      </div>
    </section>
  );
}

export default Hero;
