import React, { useEffect } from "react";
import Link from "next/link";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


// components

import Footer from "components/Footers/Footer.js";
import VerticalNavbar from "components/Navbars/VerticalNavbar.js";


const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }



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


export default function concertCoverage() {
  useEffect(() => {
    if (document.querySelectorAll(".imgs_gallery img")!= undefined) {
      document.querySelector(".imgs_gallery").onmouseover = function (e) {
        for ( let i = 0; i < document.querySelectorAll(".imgs_gallery img").length; i++ ){
          document.querySelectorAll(".imgs_gallery img")[i].onmouseover = function (e) {
            //Math.floor(Math.random() * (max - min + 1) + min)
            e.target.style.transform = 'rotate('+Math.floor(Math.random() * (1 + 1 + 1) - 1)+'deg) scale(1.5)';
            e.target.style.zIndex = '10';

          }
          document.querySelectorAll(".imgs_gallery img")[i].onmouseout  = function (e) {
            e.target.style.transform = 'rotate(0) scale(1)';
            e.target.style.zIndex = '1';
          }
        }
      }
    }

    
    
    
    
  }, []);
  return (
    <>

      <VerticalNavbar fixed />
      <section className="header page-content relative items-center flex pt-8 ">
        <div className="container mx-auto items-center flex flex-wrap h-fill ">
          <div className="w-full contents px-8 ">
            <div className="w-1/2 mx-auto px-6 pb-6">
              <img className="w-1/2 mx-auto" src={imagesArray[0].img} />
            </div>
            <div className="w-1/2 mx-auto px-6 pb-6">
              <h2 className="bold text-4xl text-center pb-6">Syro Shows</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor interdum urna, vel commodo turpis condimentum at. Sed mollis bibendum tortor, at molestie magna efficitur sagittis. Proin eu nulla urna. Cras commodo dui vitae nisi imperdiet euismod. Integer quis arcu suscipit, facilisis leo eu, euismod massa. Vestibulum at nibh pharetra, mattis diam non, hendrerit arcu. Curabitur molestie ut lectus semper aliquet. Nulla blandit, elit non sodales lobortis, mauris ligula egestas lectus, at lobortis nisi arcu id ipsum. Proin quis lorem sit amet dui sagittis feugiat. Praesent sodales diam sed iaculis vehicula. Nulla egestas tincidunt risus non malesuada. Aliquam placerat mollis ligula nec condimentum. Pellentesque eu massa tincidunt, facilisis erat ac, gravida orci. Cras interdum congue scelerisque. Praesent ipsum nibh, sagittis vel ex id, ornare tempor mi.</p>
            </div>
          </div>
          <div className="w-full contents  ">
            <div className="w-full bg-black px-8 pt-8 pb-32 -mb-24 imgs_gallery ">
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

      <Footer />
    </>
  );
}
