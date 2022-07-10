import React, { useEffect } from "react";
import Link from "next/link";

// import '~video-react/dist/video-react.css'; // import css



// components

import Footer from "components/Footers/Footer.js";
import VerticalNavbar from "components/Navbars/VerticalNavbar.js";

const aboutArray = [
  {
    img: "./img/Site/about/profile_pic.jpg", alt: "Profile Picture"
  }
]

const logosAbout =[
  {
    url:"./img/Site/commercials/logo-reakiro.png", alt: "Logo Reakiro"
  }
  ,{
    url:"./img/Site/logos_about/logo_mln.png", alt: "Logo Mln Studio"
  }
  ,{
    url:"./img/Site/logos_about/logo_dorsya.jpeg", alt: "Logo Dorsya"
  }
  
]

const tableContent = [
  {
    type: "Work History", content: [
      {
        text: "LongRunMusic", text2:"Since 2021"
      },
      {
        text: "NODE Creations",text2:"Since 2022"
      }
    ]//content 
  },
  {
    type: "Clients", content: [
      
      {
        text:"Dlights"
      },
      {
        text:"Dorsya"
      },
      {
        text:"Reakiro"
      },
      {
        text: "Mln Studios"
      }
    ]//content 
  },
  {
    type: "Specialities", content: [
      {
        text: "Video Clips"
      },
      {
        text: "Concert Photography"
      }
    ]//content 
  },
  {
    type: "Contacts", content: [
      {
        text: "afonsoncarvalho@icloud.com", link:"mailto:afonsoncarvalho@icloud.com"
      },
      {
        text: "918067322", link:"tel:+351918067322"
      }
    ]//content 
  }
]//tableContent


export default function About() {

  return (
    <>

      <VerticalNavbar fixed />
      <section className="header page-content relative items-center flex pt-8 ">
        <div className="mx-auto items-center flex flex-wrap h-fill ">
        <h1 className="w-full text-6xl pb-20 font-bold text-center  bege">About</h1>

          <div className="w-full contents px-8 ">
            <div className="w-1/2 width_mobile mx-auto px-6 pb-6">
              <img className="w-1/2 width_mobile mx-auto title_image_desk rounded-full h-1/2 w-1/2" src={aboutArray[0].img} alt={aboutArray[0].alt} />
            </div>
            <div className="w-1/2 width_mobile   mx-auto px-6 pb-6">
              <h2 className="strong center_text_mobile text-5xl pb-6">Afonso Rufino</h2>
              <img className="w-1/2 profile_mobile_img mx-auto title_image_mobile rounded-full h-1/2 w-1/2" src={aboutArray[0].img} alt={aboutArray[0].alt} />

              <a href="mailto:afonsoncarvalho@icloud.com"><h4 className="center_text_mobile">afonsoncarvalho@icloud.com</h4></a>
              <br/>
              <p className="center_text_mobile">Freelancer Videographer and Photographer.</p>
              <p className="center_text_mobile">Based in Torres Vedras, Portugal. Creative worldwide.</p>
            </div>
          </div>
          <div className="w-full contents">
          <div className="w-full mx-auto px-6 pb-6 pt-12">
            <h2 className="text-3xl strong_g text-center">Selected Clients</h2>
            <div className="w-full flex flex-wrap">
                {logosAbout.map((e, key) =>
                <div key={key} className="w-1/3 self-center text-center">
                    <img  src={e.url} alt={e.alt}/>
                </div>
                )}
            </div>
           
          </div>
            {/* bg-black */}
            <div className="w-full bg-black table_mobile px-40 md:px-20 sm:px-10 pt-12 pb-40 -mb-24 imgs_gallery py-6 ">

              <table className="w-full text-white ">
                <thead>
                  <tr>
                    <th className="w-1/4 text-center text-3xl strong">{tableContent[0].type}</th>
                    <th className="w-1/4 text-center text-3xl strong">{tableContent[1].type}</th>
                    <th className="w-1/4 text-center text-3xl strong">{tableContent[2].type}</th>
                    <th className="w-1/4 text-center text-3xl strong">{tableContent[3].type}</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr> */}
                  <td className="w-1/4 text-center text-xl">
                    {tableContent[0].content.map((e, key) =>
                      <tr key={key}>{e.text +" "+ e.text2}</tr>
                    )}
                  </td>
                  <td className="w-1/4 text-center text-xl">
                    {tableContent[1].content.map((e, key) =>
                      <tr key={key}>{e.text}</tr>
                    )}
                  </td>
                  <td className="w-1/4 text-center text-xl">
                    {tableContent[2].content.map((e, key) =>
                      <tr key={key}>{e.text}</tr>
                    )}
                  </td>
                  <td className="w-1/4 text-center text-xl">
                    {tableContent[3].content.map((e, key) =>
                      <tr key={key}><a href={e.link} target="_blank" rel="noreferrer noopener" >{e.text}</a></tr>
                    )}
                  </td>



                </tbody>
              </table>

            </div>
            {/* bg-black */}
          </div>

        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
