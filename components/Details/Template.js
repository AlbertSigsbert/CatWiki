import { useState } from "react";
import Hero from "./Hero";
import Modal from "./Modal";
import Photos from "./Photos";

function Template({ breed, photos }) {

  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <Hero cat={breed} photos={photos} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Photos photos={photos} setSelectedImg={setSelectedImg} />
    </>
  );
}

export default Template;
