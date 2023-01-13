import Image from "next/image";
import Link from "next/link";


function Navbar(props) {
  return (
    <header className="my-[6%] md:my-[3%]">
      <nav className="mx-[6%]">
        <Link
          aria-label="CatWiki Logo"
          href="/"
          className="font-mystery text-2xl font-normal"
        >
           <Image src="/img/Logo.svg" alt="Logo" width="78" height="33" priority />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
