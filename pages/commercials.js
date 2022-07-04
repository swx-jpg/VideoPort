import React, { useEffect } from "react";
import Link from "next/link";

import { Player } from 'video-react';

import Footer from "components/Footers/Footer.js";
import VerticalNavbar from "components/Navbars/VerticalNavbar.js";

const commercialsContent = [
  {
    last: false, imageLocation: "Left", urlImage:"./img/Site/commercials/Commercial1.png", title: "Commercial for Dorsya", desc: "The project is an ad for watch company. Dorsya is a brand from London, UK. The concept of the ad was integrating the watch in nature and fashion. ", videoUrl: "./img/Site/commercials/Dorsya.mp4", text: "Commercial for Dorsya"
  },
  {
    last: true, imageLocation: "Right", urlImage:"./img/Site/commercials/Commercial2.png",  title: "Commercial for Dlights", desc: "The project is an ad for glasses company. Dlights is a brand from Gotemburgo, Sweden. The concept of the ad was integrating the glasses as a fashionble fun accessory.", videoUrl: "./img/Site/commercials/Dlights.mp4", text: "Commercial for Dlights"
  }

]

export default function Commercials() {
  
  return (
    <>

      <VerticalNavbar fixed />
      <section className="header page-content relative items-center flex pt-8  ">
        <div className=" mx-auto items-center flex flex-wrap h-fill ">
        <h1 className="w-full text-6xl pb-20 font-bold text-center bege ">Commercials</h1>

          {commercialsContent.map((e, key) =>

          <div key={key} className="w-full contents px-8 pb-32 -mb-24 div_commercials" >
                <div className="w-1/2 mx-auto px-6 pb-6 mx-6  pt-6">
                  <img className="w-2/3 mx-auto" src={e.urlImage} />
                </div>
                <div className="w-1/2 mx-auto px-6 pb-6">
                  <h2 className="strong text-4xl text-center pb-6 bege"> {e.title}  </h2>
                  <p>{e.desc}</p>
                </div>
              
              <div className="w-full bg-black px-8 pt-6 pb-6  imgs_gallery  ">
                <div className="w-1/2 mx-auto py-6">
                  <Player>
                    <source src={e.videoUrl} />
                  </Player>
                </div>
                <h4 className="text-center text-white">{e.title}</h4>
              </div>
            </div>
            
            
          )}

        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
