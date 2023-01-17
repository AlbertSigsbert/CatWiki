import Image from "next/image";
import Link from "next/link";

function Grid(props) {
  return (
    <div className="pb-12 md:pb-24 grid place-items-center gap-4 max-[400px]:grid-cols-1 grid-cols-2  xl:grid-cols-4">
      <div>
        <Link href="/">
          <div className="relative w-[135px] h-[135px] sm:w-48 sm:h-48  md:w-56 md:h-56  rounded-3xl overflow-hidden">
            <Image
              src="/img/bengal.jpg"
              alt="Bengal"
              fill
              className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
            />
          </div>
        </Link>
        <Link
          href="/"
          className="text-xs mt-4 md:text-lg font-montserrat font-semibold text-chocolate capitalize"
        >
          Bengal
        </Link>
      </div>

      <div>
        <Link href="/">
          <div className="relative w-[135px] h-[135px]  sm:w-48 sm:h-48 md:w-56 md:h-56  rounded-3xl overflow-hidden">
            <Image
              src="/img/savannah.jpeg"
              alt="Savannah"
              fill
              className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
            />
          </div>
        </Link>
        <Link
          href="/"
          className="text-xs mt-4 md:text-lg font-montserrat font-semibold text-chocolate capitalize"
        >
          Savannah
        </Link>
      </div>

      <div>
        <Link href="/">
          <div className="relative w-[135px] h-[135px]  sm:w-48 sm:h-48 md:w-56 md:h-56  rounded-3xl overflow-hidden">
            <Image
              src="/img/norwegian-forest.jpg"
              alt="Norwegian Forest Cat"
              fill
              className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
            />
          </div>
        </Link>

        <Link
          href="/"
          className="text-xs mt-4 md:text-lg font-montserrat font-semibold text-chocolate capitalize"
        >
          Norwegian Forest Cat
        </Link>
      </div>

      <div>
        <Link href="/">
          <div className="relative w-[135px] h-[135px]  sm:w-48 sm:h-48 md:w-56 md:h-56  rounded-3xl overflow-hidden">
            <Image
              src="/img/Selkirk-Rex.jpg"
              alt="Selkirk Rex"
              fill
              className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
            />
          </div>
        </Link>
        <Link
          href="/"
          className="text-xs mt-4 md:text-lg font-montserrat font-semibold text-chocolate capitalize"
        >
          Selkirk Rex
        </Link>
      </div>
    </div>
  );
}

export default Grid;
