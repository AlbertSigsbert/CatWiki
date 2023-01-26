import Head from "next/head";
import Image from "next/image";
import Navbar from "./Navbar";
import CatSVG from "../public/img/LogoWhite.svg";
import { motion, AnimatePresence } from "framer-motion";

function Layout(props) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="CatWiki website with various information about cat breeds"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CatWiki</title>
      </Head>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={props.route}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y:-15 }}
          transition={{ delay: 0.5, ease:"easeOut" }}
          className="mx-[6%] min-h-screen"
        >
          {props.children}
        </motion.main>
      </AnimatePresence>

      <footer className="bg-black mx-[6%] rounded-t-[42px] pt-6 px-4 lg:px-8">
        <div className="flex flex-col space-y-4 md:space-y-0 justify-between md:flex-row font-montserrat font-normal">
          <div className="relative w-20 sm:w-28 xl:w-32">
            <Image src={CatSVG} alt="CatWiki Logo" />
          </div>
          <p className="inline-flex flex-wrap items-center pb-2 xl:pb-4 text-center text-xs sm:text-lg text-white">
            <span className="md:text-2xl md:pr-2">&copy;</span> created by{" "}
            <span className="font-bold px-1 md:px-2">albert</span> -
            devChallenge.io 2023
          </p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
