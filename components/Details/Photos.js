import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import PhotoSkeleton from "./PhotoSkeleton";

function Photos({ setSelectedImg }) {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  //Fetch photos async fn
  const fetchPhotos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/breed/${id}`);
      if (!response.ok) {
        throw new Error("Response Error (Maybe bad api url)");
      }
      const { photos } = await response.json();
      setIsLoading(false);
      setPhotos(photos);
      setError(null);
    } catch (err) {
      if (err.name === "Abort Error") {
        console.log("The fetch was aborted");
      } else {
        setIsLoading(false);
        setError("Could not fetch photos");
      }
    }
  };

  return (
    <section className="my-20">
      <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
        Other Photos
      </h1>

      {!photos && (
        <div className="flex w-full justify-center">
          <button
            onClick={fetchPhotos}
            className="px-5 py-2.5 text-center mr-2 mb-8 text-white font-medium rounded-lg text-sm bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50"
          >
            Load More Photos
          </button>
        </div>
      )}

      {isLoading && <PhotoSkeleton />}

      {error && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
          role="alert"
        >
          <span className="font-medium">Error !</span> {error}
        </div>
      )}

      {photos && (
        <div className="grid grid-cols-fluid place-items-center md:place-items-start gap-y-8">
          {photos.map((photo) => (
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
      )}
    </section>
  );
}

export default Photos;
