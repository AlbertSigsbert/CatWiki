import Head from "next/head";
import Navbar from "./Navbar";


function Layout(props) {
    return (
      <>
        <Head>
            <meta name="description" content="CatWiki website with various information about cat breeds"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>CatWiki</title>
        </Head>
        <Navbar/>
        <main className="mx-[6%]">
            {props.children}
        </main>
        <footer>
            <p className="text-center">@2023</p>
        </footer>
      </>
    );
}

export default Layout;