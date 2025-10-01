"use client";
import foto1 from "./foto/foto1.jpg";
import logo from "./foto/logo.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./app.css";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <main className="main">

        {/* navbar */}

        <div className="navbar">
          <div>
            <Image src={foto1} alt="gambar" width={74} className="foto1" />
          </div>

          <div >
            <h1 className="nama"> Andi Reza Syahputra</h1>
          </div>

          <ul className="ul-navbar">
            <li onClick={()=> router.push("/cart")} className="li-navbar">
              <a>Cart</a>
            </li>
            <li className="li-navbar">
              <a>Contact Us</a>
            </li>
            <li className="li-navbar">
              <a>About us</a>
            </li>
          </ul>
        </div>

        {/* navbar */}
                
        {/* isi */}

        <div className="Isi">
          <div className="bg-isi">
            <div className="logo">
              <Image src={logo} alt="logo" width={250} />
            </div>
            <button className="start" type="button" onClick={()=> router.push("/login")}>  Join Now  </button>
          </div>
        </div>


        {/* isi */}
        
      </main>
    </div>
  );
}

// import Navbar from "./uangkas/page";
// import React from 'react'

// export default function page() {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   )
// }
