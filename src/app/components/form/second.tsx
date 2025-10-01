import React from 'react'

export default function Header() {
  return (
    <div className="w-full bg-white/60 backdrop-blur-[0.5px] border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <h1 className="text-xl font-semibold text-gray-800">Widgets</h1>
          <span className="text-sm text-gray-500">Preview page</span>
        </div>
        <nav className="text-xs text-gray-600">
          <span className="opacity-80">Home</span>
          <span className="mx-2 opacity-50">›</span>
          <span className="font-medium">Widgets</span>
        </nav>
      </div>
    </div>
  );
}