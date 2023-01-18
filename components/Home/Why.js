import Link from "next/link";
import Image from "next/image";
import Cat1 from "../../public/img/image 1.png";
import Cat2 from "../../public/img/image 2.png";
import Cat3 from "../../public/img/image 3.png";

function Why(props) {
  return (
    <section className="my-12 sm:grid grid-cols-2 gap-8">
      <div className="md:self-center font-montserrat text-chocolate">
        <hr className="h-px mb-4  w-16 bg-chocolate border-0" />
        <h1 className="font-bold w-4/5 xl:w-3/5 text-3xl md:text-4xl xl:text-5xl mb-10">
          Why should you have a cat?
        </h1>
        <p className="font-medium text-lg md:text-xl lg:text-2xl">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <Link
          href="/"
          className="my-4 md:my-8 font-bold flex items-center text-xs uppercase md:text-base "
        >
          Read More{" "}
          <span className="inline-block ml-2">
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
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </Link>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4">
        <div>
          <Image src={Cat2} alt="Cat Two" className="mb-4" />
          <div className="flex justify-end">
            <Image src={Cat1} alt="Cat One" className="w-3/4" />
          </div>
        </div>
        <div>
          <Image src={Cat3} alt="Cat Three" />
        </div>
      </div>
    </section>
  );
}

export default Why;
