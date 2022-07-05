import React, { useEffect } from "react";
import Link from "next/link";

import { Player } from 'video-react';

import Footer from "components/Footers/Footer.js";
import VerticalNavbar from "components/Navbars/VerticalNavbar.js";

const documentaryContent = [
  {
    last: false, imageLocation: "Left", urlImg:"./img/Site/commercials/logo-reakiro.png", title: "Documentary for Reakiro", desc: "Reakiro wanted a short documentary that described well the company as leading CBD company.", videoUrl: "./img/Site/commercials/Reakiro.mp4", text: "Commercial for Reakiro"
  }

]

export default function Stories() {
  
  return (
    <>

      <VerticalNavbar fixed />
      <section className="header page-content relative items-center flex pt-8 ">
        <div className=" mx-auto items-center flex flex-wrap h-fill ">
          <h1 className="w-full text-6xl pb-20 font-bold text-center bege ">Stories</h1>
     
          {documentaryContent.map((e, key) =>

          <div key={key} className="w-full contents  px-8 pb-32 -mb-24 div_commercials " >
                <div className="w-1/2 mx-auto px-6 pb-6 mx-6">
                  <img className="w-1/2 mx-auto" src={e.urlImg} alt={e.text} />
                </div>
                <div className="w-1/2 mx-auto px-6 pb-6">
                  <h2 className="strong text-4xl text-center pb-6 bege"> {e.title}  </h2>
                  <p>{e.desc}</p>
                </div>
              
              <div className="w-full bg-black px-8 pt-8 pb-6  imgs_gallery ">
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
