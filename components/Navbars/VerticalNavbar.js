import React, { useEffect, useState } from "react";
import Link from "next/link";
// components






export default function Navbar(props) {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);


  return (
    <>
      <div class="vertical-nav shadow-xl bg-white px-4" id="sidebar">
        <div class="py-4 mb-4 bg-light">
          <div class="media d-flex align-items-center">
            <div class="media-body">
              <Link href="/"><h4 class="m-0">Afonso Carvalho</h4></Link>

              <p class="font-weight-light text-muted mb-0">Video and Photo</p>
            </div>
          </div>
        </div>



        <ul class="nav flex-column bg-white mb-0">
          <Link href="/">
            <li class="nav-item">
              Works
            </li>
          </Link>
          <Link href="/about">
            <li class="nav-item">
                About
            </li>
          </Link>


        </ul>

        <hr className="w-1/3 my-4 border-black" />

        <ul class="nav flex-column bg-white mb-0">
          <Link href="/musicVideos">
          <li class="nav-item">
              Music Videos
          </li>
          </Link>
          <Link href="/concertCoverage">
            <li class="nav-item">
              Concert Coverage
            </li>
          </Link>


        </ul>
      </div>
    </>
  );
}
