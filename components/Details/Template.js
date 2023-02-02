import Head from "next/head";
import { useState } from "react";
import Hero from "./Hero";
import Modal from "./Modal";
import Photos from "./Photos";

function Template({ breed }) {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <Head>
        <title>Catwiki | {breed.name}</title>
        <meta name="description" content={breed.description} />

          {/* OpenGraph Metatags */}
        <meta property="og:title" content={`Catwiki| ${breed.name}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://albertsigsbert.netlify.app/breed/${breed.id}`} />
        <meta property="og:description" content={breed.description} />
        <meta property="og:image" content={breed.image.url}/>
        

          {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@albert_sigsbert" />
        <meta name="twitter:title" content={`Catwiki| ${breed.name}`} />
        <meta name="twitter:description" content={breed.description} />
        <meta name="twitter:image" content={breed.image.url} />
    
      </Head>

      <Hero cat={breed} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Photos setSelectedImg={setSelectedImg} />
    </>
  );
}

export default Template;
