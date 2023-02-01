import { useState } from "react";
import Hero from "./Hero";
import Modal from "./Modal";
import Photos from "./Photos";

function Template({ breed }) {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <Hero cat={breed} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Photos setSelectedImg={setSelectedImg} />
    </>
  );
}

export default Template;
