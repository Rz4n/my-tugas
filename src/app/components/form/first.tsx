import Image from 'next/image'
import gambar from './gambar.png'
import React from 'react'

export default function Navbar() {
  return (
    <div className="w-full bg-sky-700 text-white shadow">
      <div className="mx-auto max-w-7xl px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 border-2 border-white/80 rotate-45"></div>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-3 h-3 rounded-full bg-yellow-300"></span>
          <span className="w-3 h-3 rounded-full bg-green-300"></span>
          <span className="w-3 h-3 rounded-full bg-red-300"></span>
          <div className="w-6 h-6 rounded-full bg-white/30"><Image src={gambar} alt="gambar" width={88} className='rounded-full'></Image></div>
          <span className="hidden sm:inline text-sm opacity-90">
            Alexander Pierce
          </span>
        </div>
      </div>
    </div>
  );
}
