"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import keranjang from "./keranjang.jpg";
import tumbler from "./tumbler.jpg";
import "./cart.css"

export default function page() {
  const router = useRouter();
  let x = 100;
  do{
    console.log(x)
    x--;
  }
  while(x>=1);  
  return (
    <div className="bg">
      <main>

        <div className="sidebar">
            <ul className="ul-sidebar">
                <li className="li-nama">
                  <a className="nama-sidebar">Navbar</a>
                </li>
                <li className="li-sidebar">
                    <a className="btn" href="#" onClick={()=> router.push("/produks")}>- Produk</a>
                </li>
                <li className="li-sidebar">
                    <a className="btn" href="#" onClick={()=> router.push("/blog")}>- Blog</a>
                </li>
                <li className="li-sidebar">
                    <a className="btn" href="#" onClick={()=> router.push("/")}>- Home</a>
                </li>
            </ul>
        </div>

        <div className="item">
            <h1 className="menu">MENU</h1>
        </div>

        <div className="item">
            <Image src={tumbler} alt="tumbler" width={150} className="keranjang"/>
            <Image src={keranjang} alt="keranjang" width={150} className="keranjang"/>
            <Image src={tumbler} alt="tumbler" width={150} className="keranjang"/>
         </div>

         <div className="item"> 
           <Image src={keranjang} alt="keranjang" width={150} className="keranjang"/>
           <Image src={tumbler} alt="tumbler" width={150} className="keranjang"/>
           <Image src={keranjang} alt="keranjang" width={150} className="keranjang"/>
         </div>

          <div className="item"> 
           <Image src={tumbler} alt="tumbler" width={150} className="keranjang"/>
           <Image src={keranjang} alt="keranjang" width={150} className="keranjang"/>
           <Image src={tumbler} alt="tumbler" width={150} className="keranjang"/>
         </div>


       </main>
    </div>
  );
}
