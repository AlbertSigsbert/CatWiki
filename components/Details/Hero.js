import Image from "next/image";
import StatRating from "./StatRating";

function Hero({ cat, photos }) {
  const photo = photos[0];

  const stats = [
    {
      attribute: "adaptability",
      rating: `${cat.adaptability}`,
    },
    {
      attribute: "affection Level",
      rating: `${cat.affection_level}`,
    },
    {
      attribute: "child Friendly",
      rating: `${cat.child_friendly}`,
    },
    {
      attribute: "grooming",
      rating: `${cat.grooming}`,
    },
    {
      attribute: "health Issues",
      rating: `${cat.health_issues}`,
    },
    {
      attribute: "social Needs",
      rating: `${cat.social_needs}`,
    },
    {
      attribute: "stranger Friendly",
      rating: `${cat.stranger_friendly}`,
    },
  ];
  return (
    <>
      {cat && (
        <section className="my-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {photo && (
            <div className="relative w-64 h-64 xl:w-96 xl:h-96 place-self-center lg:place-self-start">
              <Image
                priority
                src={photo.url}
                alt={cat.name}
                fill
                className="object-cover rounded-3xl z-10"
              />
              <div className="absolute bg-[#DEC68B] h-48 xl:h-72 rounded-[14px] w-16 z-0 top-0 -left-4 translate-y-12"></div>
            </div>
          )}

          <div className="lg:col-span-2 md:place-self-center  font-montserrat">
            <h1 className="text-2xl md:text-4xl font-semibold text-chocolate">
              {cat.name}
            </h1>
            <p className="max-w-xl mt-8 font-medium text-base md:text-lg">
              {cat.description}
            </p>
            <p className="font-medium text-xs md:text-base my-8">
              <strong className="font-bold">Temperament:</strong>{" "}
              {cat.temperament}
            </p>
            <p className="font-medium text-xs md:text-base mb-8">
              <strong className="font-bold">Origin:</strong> {cat.origin}
            </p>
            <p className="font-medium text-xs md:text-base mb-8">
              <strong className="font-bold">Life Span:</strong> {cat.life_span}{" "}
              years
            </p>

            {stats &&
              stats.map((stat) => (
                <div
                  key={stat.attribute}
                  className="font-medium text-xs md:text-base mb-8 max-w-xl flex flex-col sm:flex-row justify-between"
                >
                  <strong className="font-bold capitalize">
                    {stat.attribute}:
                  </strong>{" "}
                  <StatRating rating={stat.rating} />
                </div>
              ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Hero;
