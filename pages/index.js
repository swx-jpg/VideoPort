/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import VerticalNavbar from "components/Navbars/VerticalNavbar.js";
import Footer from "components/Footers/Footer.js";



const about = [
  {
    title: "ABOUT", desc: "Here to create your vision. Photographer and Filmmaker based in Torres Vedras, Portugal. Passionate about getting creative  and materializing ideas."
  }
];
const workCat = [
  {
    title: "Music Videos", img: "./img/Site/MusicVideo/ricko_Lowkey/Thumbnail-min.jpg", width: "w-1/2"
  },
  // {
  //   title: "Other1 Videos", img: "./img/Site/MusicVideo/ricko_Lowkey/Thumbnail-min.jpg", width: "w-1/2"
  // },
  {
    title: "Concert Coverage", img: "./img/Site/concertCoverage/syro/Syro_Thumbail_.jpg", width: "w-full"
  }
  // ,{
  //   title: "Other2 Videos", img: "./img/Site/MusicVideo/ricko_Lowkey/Thumbnail-min.jpg", width: "w-1/2"
  // },
  // {
  //   title: "Other3 Videos", img: "./img/Site/MusicVideo/ricko_Lowkey/Thumbnail-min.jpg", width: "w-1/2"
  // }

];

export default function Index() {
  return (
    <>
      <VerticalNavbar fixed />
      <section className="header page-content relative flex h-screen pt-8  px-8">
        
        <div className="container mx-auto  flex flex-wrap  pb-20">
          <div className="w-full contents px-4 h-fit">

            <div className="w-1/2 text-center py-16 px-16 h-fit">
              <h2 className=" color_title">{about[0].title}</h2>
            </div>
            <div className="w-1/2 text-left py-16 px-16 h-fit">
              <p className="">{about[0].desc}</p>
            </div>
            
            <Link href="/musicVideos"> 
            <div className="w-1/2 text-center bg_musicVideo pb-2 px-2">
                <img src={workCat[0].img} />
                <h2 className="">{workCat[0].title}</h2>
            </div>
            </Link>

            <Link href="/concertCoverage"> 
            <div className="w-1/2 text-center bg_musicVideo pb-2 px-2">
              <img src={workCat[1].img} />
              <h2 className="">{workCat[1].title}</h2>
            </div>
            </Link>

            {/* <div className="w-full text-center bg_musicVideo pb-2 px-2">
              <a href="#">
                <img src={workCat[2].img} />
                <h2 className="">{workCat[2].title}</h2>
              </a>            
            </div> */}
            {/* <div className="w-1/2 text-center bg_musicVideo pb-2 px-2">
              <a href="#">
                <img src={workCat[0].img} />
                <h2 className="">{workCat[3].title}</h2>
              </a>            </div>
            <div className="w-1/2 text-center bg_musicVideo pb-2 px-2">
              <a href="#">
                <img src={workCat[0].img} />
                <h2 className="">{workCat[4].title}</h2>
              </a>            
            </div> */}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
