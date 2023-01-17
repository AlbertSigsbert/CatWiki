import Link from "next/link";
import Grid from "./Grid";

function Discover(props) {
  return (
    <section className="bg-[hsl(43,11%,88%)] max-[400px]:grid max-[400px]:place-items-center rounded-b-3xl px-8 md:px-16">
      <h1 className="pt-8 font-montserrat text-chocolate text-xs md:text-lg">
        Most Searched Breeds
      </h1>
      <hr className="h-px mt-1 w-16 bg-chocolate border-0" />
      <div className="py-4 md:py-12 w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 max-[400px]:items-center justify-between sm:items-end font-montserrat text-chocolate">
        <h2 className="max-w-[185px] md:max-w-xs lg:max-w-lg text-lg md:text-3xl lg:text-5xl font-bold">
          66+ Breeds For you to discover
        </h2>
        <Link href="/" className="flex items-center text-xs md:text-base uppercase">
          See More{" "}
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

      {/* Cat Grid */}
      <Grid/>
    </section>
  );
}

export default Discover;
