"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./page.css";
import Image from "next/image";
import superman from "./superman.jpg";
import suzume from "./suzume.jpg";
import interstelar from "./interstelar.jpg";

export default function bioskop() {
  const router = useRouter();
  return (
    <div className='bg'>
      <div>
        <div className='nav'>
          <ul className='nav_kiri'>
            <li className='btn_kanan'><a className='nama'>My Cinema</a></li>
            <li className='btn_kanan'><input type="text" placeholder="Search" required className='search' /></li>
          </ul>
          <ul className='nav_kanan'>
            <li className='btn_kiri'><a>Genre</a></li>
            <li className='btn_kiri'><a>Login</a></li>
            <li className='btn_kiri'><a>Setting</a></li>
          </ul>
        </div>
        <div className='isi'>
          <div className='kotak'>
            <p>
              <Image src={interstelar} alt="interstelar" width={186} className='gmbr'/>
              <h3>Interstelar</h3>  
              <h2 className='btn' onClick={()=> router.push("./bioskop/pesan")}>beli tiket</h2>
            </p>
          </div>
          <div className='kotak'>
            <p>
              <Image src={suzume} alt="suzume" width={175} className='gmbr'/>
              <h3>Suzume</h3>
              <h2 className='btn' onClick={()=> router.push("./bioskop/pesan")}>beli tiket</h2>
            </p>
          </div>
          <div className='kotak'>
            <p>
              <Image src={superman} alt="superman" width={177.5} className='gmbr'/>
              <h3>Superman 2025</h3>
              <h2 className='btn' onClick={()=> router.push("./bioskop/pesan")}>beli tiket</h2>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
