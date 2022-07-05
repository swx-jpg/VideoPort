import React, { useEffect, useState } from "react";
import Link from "next/link";
// components






export default function Navbar(props) {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);

  useEffect(() => {
    if (window.location.href != undefined && document.getElementsByClassName("nav-item") != undefined) {
      for (let i = 0; i < window.location.href.split('/').length; i++) {
        for (let j = 0; j < document.getElementsByClassName("nav-item").length; j++) {
          if (window.location.href.split('/')[i].toUpperCase() == document.getElementsByClassName("nav-item")[j].innerHTML.toUpperCase().split(" ").join("")) {
            //colocar aba ativa na navbar vertical com efeito  
            document.getElementsByClassName("nav-item")[j].setAttribute("class", document.getElementsByClassName("nav-item")[j].getAttribute("class") + " active ");
          } else if (window.location.href.split('/')[3] == "") {
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
              <Link href="/"><h4 className="m-0 bege">Afonso Carvalho</h4></Link>

              {/* <p className="font-weight-light text-muted mb-0">Portfólio</p> */}
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
                Copyright © {new Date().getFullYear()} Afonso Carvalho Portfólio by{" "}
                Swx
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
