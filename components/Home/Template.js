import Head from "next/head";
import Hero from "./Hero";
import Discover from "./Discover";
import Why from "./Why";

function Template({ breeds }) {
  return (
    <>
      <Head>
        <title>CatWiki</title>
        <meta name="description" content="CatWiki is a website which provides more information about cat breeds and an amazing collection of cat photos"/>

        {/* OpenGraph Metatags */}
        <meta property="og:title" content="CatWiki"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://cat-wiki-phi.vercel.app/"/>
        <meta property="og:description" content="CatWiki is a website which provides more information about cat breeds and an amazing collection of cat photos"/>
        <meta property="og:image" content="https://cat-wiki-phi.vercel.app/img/home.png"/>

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@albert_sigsbert"/>
        <meta name="twitter:title" content="CatWiki"/>
        <meta name="twitter:description" content="CatWiki is a website which provides more information about cat breeds and an amazing collection of cat photos."/>
        <meta name="twitter:image" content="https://cat-wiki-phi.vercel.app/img/home.png"/>
      </Head>
      
      <Hero breeds={breeds} />
      <Discover />
      <Why />
    </>
  );
}

export default Template;
