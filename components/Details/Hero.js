import Image from "next/image";
import StatRating from "./StatRating";

function Hero(props) {
  const stats = [
    {
      attribute: "adaptability",
      rating: 5,
    },
    {
      attribute: "affection Level",
      rating: 5,
    },
    {
      attribute: "child Friendly",
      rating: 4,
    },
    {
      attribute: "grooming",
      rating: 1,
    },
    {
      attribute: "health Issues",
      rating: 3,
    },
    {
      attribute: "social Needs",
      rating: 5,
    },
    {
      attribute: "stranger Friendly",
      rating: 3,
    },
  ];
  return (
    <section className="my-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="relative w-64 h-64 xl:w-96 xl:h-96 place-self-center lg:place-self-start">
        <Image
          priority
          src="/img/bengal.jpg"
          alt="Bengal"
          fill
          className="object-cover rounded-3xl z-10"
        />
        <div className="absolute bg-[#DEC68B] h-48 xl:h-72 rounded-[14px] w-16 z-0 top-0 -left-4 translate-y-12"></div>
      </div>

      <div className="lg:col-span-2 md:place-self-center  font-montserrat">
        <h1 className="text-2xl md:text-4xl font-semibold text-chocolate">
          Bengal
        </h1>
        <p className="max-w-xl mt-8 font-medium text-base md:text-lg">
          Bengals are a lot of fun to live with, but they&apos;re definitely not
          the cat for everyone, or for first-time cat owners. Extremely
          intelligent, curious and active, they demand a lot of interaction and
          woe betide the owner who doesn&apos;t provide it.
        </p>
        <p className="font-medium text-xs md:text-base my-8">
          <strong className="font-bold">Temperament:</strong> Alert, Agile,
          Energetic, Demanding, Intelligent
        </p>
        <p className="font-medium text-xs md:text-base mb-8">
          <strong className="font-bold">Origin:</strong> United States
        </p>
        <p className="font-medium text-xs md:text-base mb-8">
          <strong className="font-bold">Life Span:</strong> 12 - 15 years
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
  );
}

export default Hero;
