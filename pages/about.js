import React, { useEffect } from "react";
import Link from "next/link";

// import '~video-react/dist/video-react.css'; // import css



// components

import Footer from "components/Footers/Footer.js";
import VerticalNavbar from "components/Navbars/VerticalNavbar.js";


const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }



const lowkeyContentArray = [
  {
    img: "./img/Site/musicVideo/ricko_Lowkey/Artwork-lowkey-min.jpg", alt: "galeria lowkey artwork"
  }
  

]


export default function concertCoverage() {
  
  return (
    <>

      <VerticalNavbar fixed />
      <section className="header page-content relative items-center flex pt-8 ">
        <div className="container mx-auto items-center flex flex-wrap h-fill ">
          <div className="w-full contents px-8 ">
            <div className="w-1/2 mx-auto px-6 pb-6">
              <img className="w-1/2 mx-auto " src={lowkeyContentArray[0].img}  alt={lowkeyContentArray[0].alt}/>
            </div>
            <div className="w-1/2 mx-auto px-6 pb-6">
              <h2 className="bold text-4xl text-center pb-6">Ricko Sicko - LOWKEY</h2>
              <p>Music video for the underground artist Ricko Sicko. It was challenging to be on the production, as a director and as script writer, since it was a new position for me. You can see the outcome below :)</p>
              <p>Also made the thumbnail, instagram ad, instagram teaser, Spotify canva and artwork.</p>
            </div>
          </div>
          <div className="w-full contents  ">
            
            {/* bg-black */}
            <div className="w-full bg-black px-8 pt-8 pb-32 -mb-24 imgs_gallery ">
              
              
              
            </div>
            {/* bg-black */}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
