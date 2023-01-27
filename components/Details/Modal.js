import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.5 } },
};

function Modal({ selectedImg, setSelectedImg }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <AnimatePresence>
      {selectedImg && (
        <motion.div
          key="backdrop"
          variants={backdropVariants}
          onClick={handleClick}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="backdrop fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-10"
        >
          <motion.div
            variants={modalVariants}
            className="relative max-[300px]:w-72 max-[300px]:h-[162px] max-[450px]:w-96 max-[450px]:h-[216px] sm:w-[576px] sm:h-[324px] md:w-[672px] md:h-[378px] lg:h-[540px] lg:w-[960px] my-16 mx-auto border-2 bg-white p-2 border-white"
          >
            <Image
              fill
              src={selectedImg}
              alt="Enlarged Image"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
