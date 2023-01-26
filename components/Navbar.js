import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar(props) {
  return (
    <header className="my-[6%] md:my-[3%]">
      <motion.nav
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ delay:0.2, type:'spring', stiffness: 200}}
        className="mx-[6%]"
      >
        <Link
          aria-label="CatWiki Logo"
          href="/"
          className="font-mystery text-2xl font-normal"
        >
          <Image
            src="/img/Logo.svg"
            alt="Logo"
            width="78"
            height="33"
            priority
          />
        </Link>
      </motion.nav>
    </header>
  );
}

export default Navbar;
