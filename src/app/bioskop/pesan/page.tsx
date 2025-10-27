import React from 'react'
import "./psn.css";
import Image from "next/image";

export default function pesan() {
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
          <div className='kotak_pesan'>
            <div className='judul'>Pesan Tiket</div>
            <div className='Name'>
              <h2>Nama</h2>
              <input type="text" placeholder="Name" required/>
            </div>
            <div className='gmail'>
              <h2>Gmail</h2>
              <input type="email" placeholder="@gmail.com" required/>
            </div>
            <div className='film'> 
              <h2>pilih Film</h2>
              <select>
                <option>pilih film</option>
                <option>Interstelar</option>
                <option>Suzume</option>
                <option>Superman 2025</option>
              </select>
            </div>
            <div className='tiket'>
              <h2>Jumlah Tiket</h2>
              <input type="number" placeholder="0" required/>
            </div>
            <div className='jumlah'>
              <h2>Total Harga tiket anda : 0 Rp</h2>
            </div>
            <div className='pesan_btn'>
              <h2>pesan</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
