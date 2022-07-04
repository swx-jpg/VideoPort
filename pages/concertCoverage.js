import React, { useEffect } from "react";
import Link from "next/link";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


// components

import Footer from "components/Footers/Footer.js";
import VerticalNavbar from "components/Navbars/VerticalNavbar.js";


const imagesArray = [
  {
    img: "./img/Site/concertCoverage/syro/galeria/galeria_syro_1.jpg", alt: "galeria syro 1"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_2.jpg", alt: "galeria syro 2"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_3.jpg", alt: "galeria syro 3"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_4.jpg", alt: "galeria syro 4"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_5.jpg", alt: "galeria syro 5"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_6.jpg", alt: "galeria syro 6"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_7.jpg", alt: "galeria syro 7"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_8.jpg", alt: "galeria syro 8"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_9.jpg", alt: "galeria syro 9"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_10.jpg", alt: "galeria syro 10"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_11.jpg", alt: "galeria syro 11"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_12.jpg", alt: "galeria syro 12"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_13.jpg", alt: "galeria syro 13"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_14.jpg", alt: "galeria syro 14"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_15.jpg", alt: "galeria syro 15"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_16.jpg", alt: "galeria syro 16"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_17.jpg", alt: "galeria syro 17"
  },
  {
    img: "/img/Site/concertCoverage/syro/galeria/galeria_syro_18.jpg", alt: "galeria syro 18"
  }

]


export default function ConcertCoverage() {
  useEffect(() => {
    let imagensAEsquerda =[];
    if (document.querySelectorAll(".imgs_gallery img")!= undefined) {
      // for (let a = 0; a < document.querySelectorAll('.imgs_gallery div')[4].getElementsByTagName("img"); a++) {
      //   if (document.querySelectorAll('.imgs_gallery div')[4].getElementsByTagName("img")[a] == e.target) {
      //     found = true;
      //     console.log(document.querySelectorAll('.imgs_gallery div')[4].getElementsByTagName("img").length);

      //     break;
      //   }
      // }
      document.querySelector(".imgs_gallery").onmouseover = function (e) {
        for ( let i = 0; i < document.querySelectorAll(".imgs_gallery img").length; i++ ){
          document.querySelectorAll(".imgs_gallery img")[i].onmouseover = function (e) {
            //Math.floor(Math.random() * (max - min + 1) + min)

            // if (document.querySelectorAll('.imgs_gallery div')[4].getElementsByTagName("img").includes(e.target)){
            //   e.target.style.transform = 'rotate('+Math.floor(Math.random() * (1 + 1 + 1) - 1)+'deg) scale(1.5)';
            //   e.target.style.zIndex = '10';
            //   e.target.style.marginLeft = '-3em';
            // }

            e.target.style.transform = 'rotate('+Math.floor(Math.random() * (1 + 1 + 1) - 1)+'deg) scale(1.5)';
            e.target.style.zIndex = '10';

          }
          document.querySelectorAll(".imgs_gallery img")[i].onmouseout  = function (e) {
            
            // if (document.querySelectorAll('.imgs_gallery div')[4].getElementsByTagName("img").includes(e.target)){
            //   e.target.style.zIndex = '1';            
            //   e.target.style.marginLeft = '0em';
            //   e.target.style.marginLeft = '0em';
            // }

            e.target.style.transform = 'rotate(0) scale(1)';
            e.target.style.zIndex = '1';            
            e.target.style.marginLeft = '0em';

          }
        }
        
      }
    }
  }, []);
  return (
    <>

      <VerticalNavbar fixed />
      <section className="header page-content relative items-center flex pt-8 ">
        <div className=" mx-auto items-center flex flex-wrap h-fill ">
        <h1 className="w-full text-6xl pb-20 font-bold text-center  bege">Concert Coverage</h1>

          <div className="w-full contents px-8 ">
            <div className="w-1/2 mx-auto px-6 pb-6">
              <img className="w-1/2 mx-auto" src="/img/Site/concertCoverage/concertCover.jpg" />
            </div>
            <div className="w-1/2 mx-auto px-6 pb-6">
              <h2 className="strong text-4xl text-center pb-6 bege">Syro Shows</h2>
              <p>Went on a 2 day in a row show with the rising portuguese pop artist Syro, to coverage the two shows as a photographer and social media content creator. </p>
            </div>
          </div>
          <div className="w-full contents  ">
            <div className="w-full bg-black px-16 pt-8 pb-32 -mb-24 imgs_gallery ">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry
                  gutter={"10px"}
                >
                  {imagesArray.map((e, key) =>
                    <img className="shadow-2xl bg-white p-2 gallery_img" key={key} src={e.img} alt={e.alt} />
                  )}
                </Masonry>
              </ResponsiveMasonry>
            </div>

          </div>

        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
