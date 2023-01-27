import Image from "next/image";

function Photos({ photos, setSelectedImg }) {
  return (
    <section className="my-20">
      <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
        Other Photos
      </h1>
      <div className="grid grid-cols-fluid place-items-center md:place-items-start gap-y-8">
        {photos &&
          photos.map((photo) => (
            <div
              key={photo.id}
              className="relative h-64 w-64 rounded-3xl overflow-hidden"
              onClick={() => setSelectedImg(photo.url)}
            >
              <Image
                src={photo.url}
                alt={photo.breeds[0].name}
                fill
                className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
              />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Photos;
