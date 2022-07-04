import React, { useEffect, useState } from "react";
import Link from "next/link";
// components






export default function Navbar(props) {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);

  useEffect(() => {
    if ( window.location.href != undefined  && document.getElementsByClassName("nav-item")!=undefined ) {
      for ( let i = 0; i < window.location.href.split('/').length; i++){
        for ( let j = 0; j < document.getElementsByClassName("nav-item").length; j++){
          if ( window.location.href.split('/')[i].toUpperCase() == document.getElementsByClassName("nav-item")[j].innerHTML.toUpperCase().split(" ").join("")){
            //colocar aba ativa na navbar vertical com efeito  
            document.getElementsByClassName("nav-item")[j].setAttribute("class",document.getElementsByClassName("nav-item")[j].getAttribute("class")+" active ");
          }else if (window.location.href.split('/')[3]==""){
            document.getElementsByClassName("nav-item")[0].setAttribute("class",document.getElementsByClassName("nav-item")[0].getAttribute("class")+" active ");
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
      </div>
    </>
  );
}
