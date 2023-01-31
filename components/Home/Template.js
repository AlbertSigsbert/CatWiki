import Hero from "./Hero";
import Discover from "./Discover";
import Why from "./Why";

function Template({breeds}) {

    return (
       <>
         <Hero breeds={breeds}/>
         <Discover />
         <Why/>
        
       </>
    );
}

export default Template;