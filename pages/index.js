/* eslint-disable react/jsx-no-target-blank */
import React, {useState, useEffect} from "react";
import Link from "next/link";
import classNames from "classnames";
// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import VerticalNavbar from "components/Navbars/VerticalNavbar.js";
import Footer from "components/Footers/Footer.js";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import Cursor from "/pages/cursor.js";

// import dynamic from "next/dynamic";
// import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

// const Cursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [hidden, setHidden] = useState(false);
//   const [clicked, setClicked] = useState(false);
//   const [linkHovered, setLinkHovered] = useState(false);


//   useEffect(() => {
//     addEventListeners();
//     handleLinkHoverEvents();
//     return () => removeEventListeners();
//   }, []);

//   const addEventListeners = () => {
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseenter", onMouseEnter);
//     document.addEventListener("mouseleave", onMouseLeave);
//     document.addEventListener("mousedown", onMouseDown);
//     document.addEventListener("mouseup", onMouseUp);
//   };

//   const removeEventListeners = () => {
//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseenter", onMouseEnter);
//     document.removeEventListener("mouseleave", onMouseLeave);
//     document.addEventListener("mousedown", onMouseDown);
//     document.addEventListener("mouseup", onMouseUp);
//   };
//   const onMouseDown = () => {
//     setClicked(true);
//   };

//   const onMouseUp = () => {
//     setClicked(false);
//   };
//   const onMouseLeave = () => {
//     setHidden(true);
//   };

//   const onMouseEnter = () => {
//     setHidden(false);
//   };

//   const onMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };
//   const handleLinkHoverEvents = () => {
//            document.querySelectorAll("a").forEach(el => {
//                el.addEventListener("mouseover", () => setLinkHovered(true));
//                el.addEventListener("mouseout", () => setLinkHovered(false));
//            });
//        };
//   const cursorClasses = classNames(
//     'cursor',
//     {
//       'cursor--clicked': clicked,
//       'cursor--hidden': hidden,
//       'cursor--link-hovered': linkHovered
//     }
//   );
//   return <div className="cursor"
//     style={{
//       left: `${position.x}px`,
//       top: `${position.y}px`
//     }} />
// }
const about = [
  {
    title: "ABOUT", desc: "Here to create your vision. Photographer and Filmmaker based in Torres Vedras, Portugal. Passionate about getting creative  and materializing ideas."
  }
];
const workCat = [
  {
    title: "Music Videos", img: "/img/Site/musicVideo/ricko_Lowkey/Thumbnail-min.jpg", width: "w-1/2"
  },
  {
    title: "Concert Coverage", img: "/img/Site/concertCoverage/syro/Syro_Thumbail_.jpg", width: "w-full"
  },
  {
    title: "Commercials", img: "/img/Site/commercials/commercial.jpg", width: "w-full"
  },
  {
    title: "Stories", img: "/img/Site/stories/stories.jpg", width: "w-full"
  }


];

export default function Index() {




  return (
    <>
      <Cursor/>
      <VerticalNavbar fixed />
      <section className="header page-content relative flex h-screen pt-8  px-8">

        <div className=" mx-auto  flex flex-wrap  pb-20">

          <div className="w-full contents px-4 h-fit">

            <div className="w-1/2 width_mobile mobile_title_padding text-center py-16 px-16 h-fit">
              <h2 className=" color_title">{about[0].title}</h2>
            </div>
            <div className="w-1/2 width_mobile text-left py-16 px-16 h-fit">
              <p className="">{about[0].desc}</p>
            </div>
            <MouseParallaxContainer
              className="parallax"
              containerStyles={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "50% 50%"
                
              }}
              resetOnLeave>
              
              <MouseParallaxChild
                factorX={0.07}
                factorY={0.07}
                updateStyles={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  width: "100%",
                height: "100%"
                }}
                >
                  <div className="w-full text-center">
                    <Link className="w-full" href="/musicVideos">
                      <img height="100%" className="w-full h-auto min-h-img" src={workCat[0].img} alt="" />
                    </Link>
                    <h2 className="w-full">{workCat[0].title}</h2>
                  </div>

              </MouseParallaxChild>

              <MouseParallaxChild
                factorX={0.07}
                factorY={0.07}
                updateStyles={{
                  display: "flex",
                  alignItems: "center",
                  height: "auto",
                  padding: "10px",
                  width: "100%",
                height: "100%"
                }}
                >
                  <div className="w-full text-center">
                  <Link className="w-full" href="/concertCoverage">
                    <img height="100%" className="w-full h-auto min-h-img" src={workCat[1].img} alt="" />
                  </Link>
                  <h2 className="w-full">{workCat[1].title}</h2>
                  </div>


              </MouseParallaxChild>

              <MouseParallaxChild
                factorX={0.07}
                factorY={0.07}
                updateStyles={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  width: "100%",
                height: "100%"
                }}
                >
                  <div className="w-full text-center">
                  <Link className="w-full" href="/commercials">
                    <img height="100%" className="w-full h-auto min-h-img" src={workCat[2].img} alt="" />
                  </Link>
                  <h2 className="w-full">{workCat[2].title}</h2>
                  </div>
              </MouseParallaxChild>

              <MouseParallaxChild
                factorX={0.07}
                factorY={0.07}
                updateStyles={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  width: "100%",
                height: "100%"
                }}
                >
                  <div className="w-full text-center">
                    <Link className="w-full" href="/stories">
                      <img height="100%" className="w-full h-auto min-h-img" src={workCat[3].img} alt="" />
                    </Link>
                    <h2 className="w-full">{workCat[3].title}</h2>
                  </div>
                  
              </MouseParallaxChild>

            </MouseParallaxContainer>            

          </div>

        </div>
      </section >

      {/* <Footer /> */}
    </>
  );
}
