import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimationControls } from "framer-motion";

const cats = [
  {
    name: "Bengal",
    src: "/img/bengal.jpg",
  },
  {
    name: "Savannah",
    src: "/img/savannah.jpeg",
  },
  {
    name: "Norwegian Forest Cat",
    src: "/img/norwegian-forest.jpg",
  },
  {
    name: "Selkirk Rex",
    src: "/img/Selkirk-Rex.jpg",
  },
];

const parentVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};

function Grid() {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const isParentInView = useInView(parentRef, { amount: 0.5 });
  const isChildInView = useInView(childRef, { amount: 0.5 });

  const parentAnimation = useAnimationControls();
  const childAnimation = useAnimationControls();

  useEffect(() => {
    parentAnimation.start("hidden");
    childAnimation.start("hidden");

    if (isParentInView && isChildInView) {
      parentAnimation.start("show");
      childAnimation.start("show");
    }
  }, [isParentInView, isChildInView, parentAnimation, childAnimation]);

  return (
    <motion.div
      ref={parentRef}
      variants={parentVariants}
      animate={parentAnimation}
      className="pb-12 md:pb-24 grid place-items-center gap-4 max-[400px]:grid-cols-1 grid-cols-2 xl:grid-cols-4"
    >
      {cats &&
        cats.map((cat) => (
          <motion.div ref={childRef} variants={imageVariants} key={cat.name}>
            <Link href="/details">
              <div className="relative w-[135px] h-[135px] sm:w-48 sm:h-48  md:w-56 md:h-56 rounded-3xl overflow-hidden">
                <Image
                  src={cat.src}
                  alt={cat.name}
                  fill
                  className="object-cover rounded-3xl hover:brightness-50 transition duration-300 ease-in"
                />
              </div>
            </Link>
            <Link
              href="/details"
              className="text-xs mt-4 md:text-lg font-montserrat font-semibold text-chocolate capitalize"
            >
              {cat.name}
            </Link>
          </motion.div>
        ))}
    </motion.div>
  );
}

export default Grid;
