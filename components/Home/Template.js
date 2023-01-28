import Discover from "./Discover";
import Hero from "./Hero";
import Why from "./Why";

function Template({data, breeds}) {

    return (
       <>
         <Hero breeds={breeds}/>
         <Discover cats={data}/>
         <Why/>
        
       </>
    );
}

export default Template;