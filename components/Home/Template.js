import Discover from "./Discover";
import Hero from "./Hero";
import Why from "./Why";

function Template({data}) {
    return (
       <>
         <Hero/>
         <Discover cats={data}/>
         <Why/>
        
       </>
    );
}

export default Template;