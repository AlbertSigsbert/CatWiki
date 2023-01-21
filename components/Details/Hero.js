import Image from "next/image";
import StatRating from "./StatRating";

function Hero(props) {
  const stats = {
    adaptability: 5,
    affectionLevel: 5,
    childFriendly: 4,
    grooming: 1,
    intelligence: 5,
    healthIssues: 3,
    socialNeeds: 5,
    strangerFriendly: 3,
  };
  return (
    <section className="my-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="relative max-[360px]:w-64 max-[360px]:h-64 w-72 h-72 md:w-96 md:h-96 place-self-center">
        <Image
          src="/img/bengal.jpg"
          alt="Bengal"
          fill
          className="object-cover rounded-3xl z-10"
        />
        <div className="absolute bg-[#DEC68B] h-48 md:h-72 rounded-[14px] w-16 z-0 top-0 -left-4 translate-y-12"></div>
      </div>

      <div className="md:col-span-2 font-montserrat">
        <h1 className="text-2xl md:text-4xl font-semibold text-chocolate">Bengal</h1>
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
        <p className="font-medium text-xs md:text-base mb-8 max-w-xl flex flex-col md:flex-row justify-between">
          <strong className="font-bold">Adaptability:</strong>{" "}
          <StatRating rating={stats.adaptability} />
        </p>
        <p className="font-medium text-xs md:text-base mb-8 max-w-xl flex flex-col md:flex-row justify-between">
          <strong className="font-bold">Affection Level:</strong>{" "}
          <StatRating rating={stats.affectionLevel} />
        </p>
        <p className="font-medium text-xs md:text-base mb-8 max-w-xl flex flex-col md:flex-row justify-between">
          <strong className="font-bold">Child Friendly:</strong>{" "}
          <StatRating rating={stats.childFriendly} />
        </p>
        <p className="font-medium text-xs md:text-base mb-8 max-w-xl flex flex-col md:flex-row justify-between">
          <strong className="font-bold">Grooming:</strong>{" "}
          <StatRating rating={stats.grooming} />
        </p>
        <p className="font-medium text-xs md:text-base mb-8 max-w-xl flex flex-col md:flex-row justify-between">
          <strong className="font-bold">Intelligence:</strong>{" "}
          <StatRating rating={stats.intelligence} />
        </p>
        <p className="font-medium text-xs md:text-base mb-8 max-w-xl flex flex-col md:flex-row justify-between">
          <strong className="font-bold">Health issues:</strong>{" "}
          <StatRating rating={stats.healthIssues} />
        </p>
        <p className="font-medium text-xs md:text-base mb-8 max-w-xl flex flex-col md:flex-row justify-between">
          <strong className="font-bold">Social needs:</strong>{" "}
          <StatRating rating={stats.socialNeeds} />
        </p>
        <p className="font-medium text-xs md:text-base mb-8 max-w-xl flex flex-col md:flex-row justify-between">
          <strong className="font-bold">Stranger friendly:</strong>{" "}
          <StatRating rating={stats.strangerFriendly} />
        </p>
      </div>
    </section>
  );
}

export default Hero;
