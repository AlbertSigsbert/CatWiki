import Head from "next/head";
import Article from "./Article";
import Hero from "./Hero";

function Template(props) {
  return (
    <>
    <Head>
        <title>CatWiki | Why Cat ?</title>
        <meta name="description" content="This webpage provides 5 reasons on why you should have a cat"/>

        {/* OpenGraph Metatags */}
        <meta property="og:title" content="CatWiki | Why Cat ?"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://cat-wiki-phi.vercel.app/why"/>
        <meta property="og:description" content="This webpage provides 5 reasons on why you should have a cat"/>
        <meta property="og:image"content="https://cat-wiki-phi.vercel.app/img/why.png"/>

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@albert_sigsbert"/>
        <meta name="twitter:title" content="CatWiki | Why Cat ?"/>
        <meta name="twitter:description" content="This webpage provides 5 reasons on why you should have a cat"/>
        <meta name="twitter:image" content="https://cat-wiki-phi.vercel.app/img/why.png"/>
      </Head>

      <Hero />
      <Article />
    </>
  );
}

export default Template;
