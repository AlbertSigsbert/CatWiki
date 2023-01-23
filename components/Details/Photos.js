import Image from "next/image";

function Photos(props) {
  return (
    <section className="my-20">
      <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">Other Photos</h1>
      <div className="grid grid-cols-fluid place-items-center md:place-items-start  gap-8">
        <div className="relative h-64 w-64 rounded-3xl overflow-hidden">
          <Image
            src="/img/bengal.jpg"
            alt="Bengal"
            fill
            className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
          />
        </div>
        <div className="relative h-64 w-64 rounded-3xl overflow-hidden">
          <Image
            src="/img/norwegian-forest.jpg"
            alt="Bengal"
            fill
            className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
          />
        </div>
        <div className="relative h-64 w-64 rounded-3xl overflow-hidden">
          <Image
            src="/img/savannah.jpeg"
            alt="Bengal"
            fill
            className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
          />
        </div>
        <div className="relative h-64 w-64 rounded-3xl overflow-hidden">
          <Image
            src="/img/Selkirk-Rex.jpg"
            alt="Bengal"
            fill
            className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
          />
        </div>
        <div className="relative h-64 w-64 rounded-3xl overflow-hidden">
          <Image
            src="/img/bengal.jpg"
            alt="Bengal"
            fill
            className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
          />
        </div>
        <div className="relative h-64 w-64 rounded-3xl overflow-hidden">
          <Image
            src="/img/norwegian-forest.jpg"
            alt="Bengal"
            fill
            className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
          />
        </div>
        <div className="relative h-64 w-64 rounded-3xl overflow-hidden">
          <Image
            src="/img/savannah.jpeg"
            alt="Bengal"
            fill
            className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
          />
        </div>
        <div className="relative h-64 w-64 rounded-3xl overflow-hidden">
          <Image
            src="/img/Selkirk-Rex.jpg"
            alt="Bengal"
            fill
            className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
          />
        </div>
   
      </div>
    </section>
  );
}

export default Photos;
