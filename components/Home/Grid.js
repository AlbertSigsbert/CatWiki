import Image from "next/image";
import Link from "next/link";
import { useTopSearched } from "../../hooks/useTopSearched";


function Grid() {

  const cats = useTopSearched(4);
  // console.log(cats);

  return (
    <div
      className="pb-12 md:pb-24 grid place-items-center gap-4 max-[400px]:grid-cols-1 grid-cols-2 xl:grid-cols-4"
    >
      {cats &&
        cats.map((cat) => (
          <div key={cat.name}>
            <Link href={`/breed/${cat.id}`}>
              <div className="relative w-[135px] h-[135px] sm:w-48 sm:h-48  md:w-56 md:h-56 rounded-3xl overflow-hidden">
                <Image
                  src={cat.image.url}
                  alt={cat.name}
                  fill
                  priority
                  className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
                />
              </div>
            </Link>
            <Link
              href={`/breed/${cat.id}`}
              className="text-xs mt-4 md:text-lg font-montserrat font-semibold text-chocolate capitalize"
            >
              {cat.name}
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Grid;
