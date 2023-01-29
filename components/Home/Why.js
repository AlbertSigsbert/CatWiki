import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { RightArrowIcon } from "../Icons";
import Cat1 from "../../public/img/image 1.png";
import Cat2 from "../../public/img/image 2.png";
import Cat3 from "../../public/img/image 3.png";

const slideRight = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1, ease: "easeInOut" },
  },
};

function Why(props) {
  return (
    <motion.section className="my-12 sm:grid grid-cols-2 gap-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: "some" }}
        transition={{ duration: 1, delay: 0.5 }}
        variants={slideRight}
        className="md:self-center font-montserrat text-chocolate"
      >
        <hr className="h-px mb-4  w-16 bg-chocolate border-0" />
        <h1 className="font-bold w-4/5 xl:w-3/5 text-3xl md:text-4xl xl:text-5xl mb-10">
          Why should you have a cat?
        </h1>
        <p className="font-medium text-lg md:text-xl lg:text-2xl">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <Link
          href="/why"
          className="my-4 md:my-8 font-bold flex items-center text-xs uppercase md:text-base "
        >
          Read More{" "}
          <span className="inline-block ml-2">
            <RightArrowIcon/>
          </span>
        </Link>
      </motion.div>

      <motion.div
        className="mt-14 grid grid-cols-2 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: "some" }}
        variants={fadeIn}
      >
        <div>
          <div>
            <Image src={Cat2} alt="Cat Two" className="mb-4" />
          </div>
          <div className="flex justify-end">
            <Image src={Cat1} alt="Cat One" className="w-3/4" />
          </div>
        </div>

        <div>
          <Image src={Cat3} alt="Cat Three" />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Why;
