import Image from "next/image";
import Link from "next/link";

function Template(props) {
  return (
    <section className="text-chocolate font-montserrat mt-8 mb-24">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-16">
        Top 10 most searched breeds
      </h1>
      <div className="my-8 flex flex-col space-y-8 lg:flex-row lg:space-x-16 lg:space-y-0">
        <Link href="/details">
          <div className="relative h-48 w-48 rounded-3xl overflow-hidden">
            <Image
              src="/img/bengal.jpg"
              alt="Bengal"
              fill
              className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
            />
          </div>
        </Link>
        <div className="max-w-2xl lg:max-w-4xl">
          <Link href="/details" className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            1.Bengal
          </Link>
          <p className="text-sm md:text-lg font-medium mt-4">
            Bengals are a lot of fun to live with, but they&apos;re definitely
            not the cat for everyone, or for first-time cat owners. Extremely
            intelligent, curious and active, they demand a lot of interaction
            and woe betide the owner who doesn&apos;t provide it.{" "}
          </p>
        </div>
      </div>
      <div className="my-8 flex flex-col space-y-8 lg:flex-row lg:space-x-16 lg:space-y-0">
         <Link href="/details">
         <div className="relative h-48 w-48 rounded-3xl overflow-hidden">
          <Image
            src="/img/savannah.jpeg"
            alt="Savannah"
            fill
            className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
          />
        </div>
         </Link>
        <div className="max-w-2xl lg:max-w-4xl">
          <Link href="/details" className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            2.Savannah
          </Link>
          <p className="text-sm md:text-lg font-medium mt-4">
            Bengals are a lot of fun to live with, but they&apos;re definitely
            not the cat for everyone, or for first-time cat owners. Extremely
            intelligent, curious and active, they demand a lot of interaction
            and woe betide the owner who doesn&apos;t provide it.{" "}
          </p>
        </div>
      </div>
      <div className="my-8 flex flex-col space-y-8 lg:flex-row lg:space-x-16 lg:space-y-0">
        <Link href="/details">
        <div className="relative h-48 w-48 rounded-3xl overflow-hidden">
          <Image
            src="/img/Selkirk-Rex.jpg"
            alt="Selkirk Rex"
            fill
            className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
          />
        </div>
        </Link>
        <div className="max-w-2xl lg:max-w-4xl">
          <Link href="/details" className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            3.Selkirk Rex
          </Link>
          <p className="text-sm md:text-lg font-medium mt-4">
            Selkirk Rexs are a lot of fun to live with, but they&apos;re
            definitely not the cat for everyone, or for first-time cat owners.
            Extremely intelligent, curious and active, they demand a lot of
            interaction and woe betide the owner who doesn&apos;t provide it.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Template;
