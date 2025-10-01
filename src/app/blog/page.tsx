'use client'
import React, { use } from 'react'
import buku from './buku.jpg'
import Image from "next/image";

export default function page() {
    console.log("ini adalah blog");
    alert("ini adalah blog");
  return (
    <div align="center" justifyContent="center">
        <h1>Ini Buku</h1>
      <Image src={buku} alt="buku"/>
    </div>
  )
}
