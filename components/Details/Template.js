import { useState } from "react";
import Hero from "./Hero";
import Modal from "./Modal";
import Photos from "./Photos";

function Template({ data, photos }) {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <Hero cat={data} photos={photos} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Photos photos={photos} setSelectedImg={setSelectedImg} />
    </>
  );
}

export default Template;
