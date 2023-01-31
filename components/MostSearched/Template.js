import Image from "next/image";
import Link from "next/link";
import { useTopSearched } from "../../hooks/useTopSearched";

function Template(props) {
  const cats = useTopSearched(10);

  return (
    <section className="text-chocolate font-montserrat mt-8 mb-24">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-16">
        Top 10 most searched breeds
      </h1>
      {cats &&
        cats.map((cat, index) => (
          <div
            key={cat.id}
            className="my-8 flex flex-col space-y-8 lg:flex-row lg:space-x-16 lg:space-y-0"
          >
            <Link href={`/breed/${cat.id}`}>
              <div className="relative h-48 w-48 rounded-3xl overflow-hidden">
                <Image
                  src={cat.image.url}
                  alt={cat.name}
                  fill
                  className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
                />
              </div>
            </Link>
            <div className="max-w-2xl lg:max-w-4xl">
              <div className="flex justify-between">
                <Link
                  href={`/breed/${cat.id}`}
                  className="text-2xl sm:text-3xl md:text-4xl font-semibold"
                >
                  {index + 1}.{cat.name}
                </Link>

                <div className="inline-flex items-center px-5 py-2.5 text-sm md:text-lg font-medium text-center">
                    Hits
                  <span className="inline-flex items-center justify-center w-6 h-6 ml-2 text-sm md:text-lg font-semibold text-blue-800 bg-blue-200 rounded-full">
                    {cat.vote}
                  </span>
                </div>
              </div>
              <p className="text-sm md:text-lg font-medium mt-4">
                {cat.description}
              </p>
            </div>
          </div>
        ))}
    </section>
  );
}

export default Template;
