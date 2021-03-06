import React, { useEffect } from "react";
import Link from "next/link";

// import '~video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';



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
  },
  {
    img: "./img/Site/musicVideo/ricko_Lowkey/Thumbnail-min.jpg", alt: "galeria lowkey thumbnail", videoUrl: "https://www.youtube.com/watch?v=FKZThNEChyo"
  },
  {
   videoUrl: "./img/Site/musicVideo/ricko_Lowkey/Reel_Lowkey-.mp4", text:"LOWKEY's instagram teaser"
  },
  {
   videoUrl: "./img/Site/musicVideo/ricko_Lowkey/Reel_Lowkey-_1.mp4", text:"LOWKEY's instagram ad"
  }
  ,
  {
   videoUrl: "./img/Site/musicVideo/ricko_Lowkey/Spotify_Canva.mp4", text:"LOWKEY's spotify canva"
  }
  

]


export default function MusicVideo() {
  
  return (
    <>

      <VerticalNavbar fixed />
      <section className="header page-content relative items-center flex pt-8 ">
        <div className=" mx-auto items-center flex flex-wrap h-fill ">
        <h1 className="w-full width_mobile mobile_title_padding text-6xl pb-20 font-bold text-center bege ">Music Videos</h1>

          <div className="w-full contents px-8 ">
            <div className="w-1/2 width_mobile mx-auto px-6 pb-6 py-6">
              <img className="w-1/2 width_mobile title_image_desk mx-auto" src={lowkeyContentArray[0].img}  alt={lowkeyContentArray[0].alt}/>
            </div>
            <div className="w-1/2 width_mobile mx-auto px-6 pb-6">
              <h2 className="strong text-4xl text-center pb-6 bege mobile_title_padding">Ricko Sicko - LOWKEY</h2>
              <img className="w-1/2 width_mobile title_image_mobile mx-auto" src={lowkeyContentArray[0].img}  alt={lowkeyContentArray[0].alt}/>
              <p>Music video for the underground artist Ricko Sicko. It was challenging to be on the production, as a director and as the script writter, since it was a new position for me. You can see the outcome below :)</p>
              <p>Also made the thumbnail, instagram ad, instagram teaser, Spotify canva and artwork.</p>
            </div>
          </div>
          <div className="w-full contents">
            
            {/* bg-black */}
            <div className="w-full bg-black px-8 pt-8 pb-32 -mb-24 imgs_gallery ">
              <Link href="https://www.youtube.com/watch?v=FKZThNEChyo">
                <a className="w-8/12 mx-auto" target="_blank">
                  <img className="w-8/12 mx-auto py-4" src={lowkeyContentArray[1].img} alt={lowkeyContentArray[1].alt} />
                </a>
              </Link>
              <h4 className="text-center text-white">Ricko Sicko - LOWKEY</h4>
              <div className="w-full mx-auto py-6">
                <div className="w-1/3 mx-auto">
                <Player className="py-4">
                  <source src={lowkeyContentArray[2].videoUrl} />
                </Player>
                </div>
                <h4 className="text-center text-white">{lowkeyContentArray[2].text}</h4>
              </div>
              <div className="w-full mx-auto py-6">
                <div className="w-1/3 mx-auto">
                <Player className="py-4">
                  <source src={lowkeyContentArray[3].videoUrl} />
                </Player>
                </div>
                <h4 className="text-center text-white">{lowkeyContentArray[3].text}</h4>
              </div>
              <div className="w-full mx-auto py-6">
                <div className="w-1/3 mx-auto">
                <Player className="py-4">
                  <source src={lowkeyContentArray[4].videoUrl} />
                </Player>
                </div>
                <h4 className="text-center text-white">{lowkeyContentArray[3].text}</h4>
              </div>
              
            </div>
            {/* bg-black */}
          </div>

        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
