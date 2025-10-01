'use client'
import React from 'react'
import tumbler from './tumbler.jpg'
import Image from "next/image";

export default function page() {
    console.log("ini adalah produk");
    alert("ini adalah produk");
  return (
    <div align="center" justifyContent="center">
        <h1>Ini Produk</h1>
      <Image src={tumbler} alt="tumbler"/>
    </div>
  )
}