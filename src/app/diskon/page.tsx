"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./diskon.css";

export default function page() {
    const router = useRouter();
  return (
    <div className='diskon'>
        <div className="tabel">
            <h1 className='judul'>Aplikasi penghitung diskon</h1>
            <div className='isi'>
                <div><input type="text" placeholder="masukkan nama barang" required className='text'/></div>
                <div><input type="text" placeholder="masukkan kategori barang" required className='text'/></div>
                <div><input type="text" placeholder="masukkan harga barang" required className='text'/></div>
                <div><input type="text" placeholder="masukkan diskon barang" required className='text'/></div>
            </div>
            <div>
                <button type="submit" className="btn1">
                    hitung
                </button>
            </div>
            <div>
                <button type="submit" className="btn2">
                    bersih
                </button>
            </div>
        </div>
    </div>
  )
}
