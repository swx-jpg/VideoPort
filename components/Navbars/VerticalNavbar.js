import React, { useEffect, useState } from "react";
import Link from "next/link";
// components

import { FiArrowRightCircle } from "react-icons/fi";


export default function Navbar(props) {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [active, setActive] = useState(false);

  const sidebarClick = () => {
    //condition checking to change state from true to false and vice versa
    active ? setActive(false) : setActive(true)

  };

  useEffect(() => {
    // if (window.innerWidth <= 768) {
    document.getElementById("idBtnSidebar").onclick = function () {
      // sidebarClick();
      if (document.querySelector("#sidebar.active") === null) {
        document.querySelector("#sidebar").setAttribute("class", document.querySelector("#sidebar").getAttribute("class") + " active");
        document.querySelector(".page-content").setAttribute("class", document.querySelector(".page-content").getAttribute("class") + " active");

        // document.getElementById("sidebar").style.left = "";
        // document.getElementsByClassName("page-content")[0].style.width = "calc(100% - 20rem)";
        // document.getElementsByClassName("page-content")[0].style.marginLeft = "20rem";
        document.getElementById("idBtnSidebar").style.transform = "rotate(180deg)";

        if (document.getElementById("idInfo") !== undefined && document.getElementById("idInfo") !== null) {
          document.getElementById("idInfo").style.opacity = 0;

        }


      } else {
        if (document.getElementById("idInfo") !== undefined && document.getElementById("idInfo") !== null) {

          if (document.getElementById("idInfo").style.opacity === '0') {
            document.getElementById("idInfo").remove();
          }
        }
        
        
        // --tw-shadow: 0 -5px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)


        // document.getElementById("sidebar").style.left = "-20em";
        // remove active class from #sidebar e .page-content
        document.querySelector("#sidebar.active").setAttribute("class", document.querySelector("#sidebar").getAttribute("class").replace(" active", " "));
        document.querySelector(".page-content.active").setAttribute("class", document.querySelector(".page-content").getAttribute("class").replace(" active", " "));
        // document.getElementsByClassName("page-content")[0].style.width = "100%";
        // document.getElementsByClassName("page-content")[0].style.marginLeft = "0";
        document.getElementById("idBtnSidebar").style.transform = "rotate(0deg)";

      }

    };//idBtnSidebar
    // }//window.innerWidth <= 768)



    if (window.location.href !== undefined && document.getElementsByClassName("nav-item") !== undefined) {
      for (let i = 0; i < window.location.href.split('/').length; i++) {
        for (let j = 0; j < document.getElementsByClassName("nav-item").length; j++) {

          if (window.location.href.split('/')[i].toUpperCase() === document.getElementsByClassName("nav-item")[j].innerHTML.toUpperCase().split(" ").join("")) {
            //colocar aba ativa na navbar vertical com efeito  
            document.getElementsByClassName("nav-item")[j].setAttribute("class", document.getElementsByClassName("nav-item")[j].getAttribute("class") + " active ");
          } else if (window.location.href.split('/')[3] === "") {
            document.getElementsByClassName("nav-item")[0].setAttribute("class", document.getElementsByClassName("nav-item")[0].getAttribute("class") + " active ");
          }

        }
      }
    }

  }, []);
  return (
    <>
      <div className="vertical-nav shadow-xl bg-white px-4" id="sidebar">
        <div className="py-4 mb-4 bg-light">

          <div className="media d-flex align-items-center">
            <div className="media-body">
              <div className="absolute space-x-2 justify-center sidebar-active">
                {/* <button  type="button" className="inline-block px-6 py-2.5 bg-transparent text-white font-medium text-xl leading-tight uppercase rounded-full  transition duration-150 ease-in-out"> */}
                <FiArrowRightCircle id="idBtnSidebar" className="text-5xl bg-white rounded-full text-black shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none" />
                <div id="idInfo" className="absolute top-0 shadow-md p-2 ">Click to open the menu</div>
                {/* </button> */}
              </div>
              <Link href="/"><h1 className="m-0 bege text-6xl font-bold  bege">Afonso Rufino</h1></Link>
            </div>
          </div>
        </div>



        <ul className="nav flex-column bg-white mb-0 pt-6">
          <Link href="/">
            <li className="nav-item">
              Works
            </li>
          </Link>
          <Link href="/about">
            <li className="nav-item">
              About
            </li>
          </Link>


        </ul>

        <hr className="w-1/3 my-4 border-black" />

        <ul className="nav flex-column bg-white mb-0">
          <Link href="/musicVideos">
            <li className="nav-item">
              Music Videos
            </li>
          </Link>
          <Link href="/concertCoverage">
            <li className="nav-item">
              Concert Coverage
            </li>
          </Link>
          <Link href="/commercials">
            <li className="nav-item">
              Commercials
            </li>
          </Link>
          <Link href="/stories">
            <li className="nav-item">
              Stories
            </li>
          </Link>


        </ul>
        <div className="inline text-center absolute bottom-0 mt-6 lg:mb-0 mb-6">
          <div className="w-full px-4">
            <h3 className="text-xl font-semibold pb-6">Let's keep in touch!</h3>

            {/* <h5 className="text-lg mt-0 mb-2 text-black-600">
                Find me on any of these platforms, I respond 1-2 business days.
              </h5> */}

          </div>
          <Link href="mailto:afonsoncarvalho@icloud.com">
            <a target="_blank" rel="noopener noreferrer">

              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fa fa-envelope"></i>
              </button>
            </a>
          </Link>

          <Link href="https://www.instagram.com/afonso_rufino/">
            <a target="_blank" rel="noopener noreferrer">

              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-instagram"></i>
              </button>
            </a>
          </Link>

          <Link href="https://github.com/swx-jpg">
            <a target="_blank" rel="noopener noreferrer">
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </a>
          </Link>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full py-4 pt-12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Afonso Rufino Portfólio by{" "}
                Swx
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
