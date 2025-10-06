import React from "react";
import Image from "next/image";
import telkom from "./telkom.png";

export default function page() {
  const card = [
    { id: 1, logo: "📖", nama: "Jurnal Mengajar" },
    { id: 2, logo: "❤︎", nama: "Nilai" },
    { id: 3, logo: "❀", nama: "Akademik" },
    { id: 4, logo: "❄", nama: "Prestasi" },
    { id: 5, logo: "🧸", nama: "Rapor" },
  ];

  const data = [
    {
      id: 1,
      nama: "Kalyla_syifaa",
      suka: "30 orang suka",
      text: "HSGDVGSBJHBJS huft.",
      waktu: "6 hari lalu",
    },
    {
      id: 2,
      nama: "nurAufa",
      suka: "27 orang suka",
      text: "KACO X",
      waktu: "5 hari lalu",
    },
    {
      id: 3,
      nama: "Athfiraa",
      suka: "1 orang suka",
      text: "@Amsfa ayo bareng",
      waktu: "2 hari lalu",
    },
    {
      id: 4,
      nama: "Amsfa",
      suka: "0 orang suka",
      text: "bolehh",
      waktu: "1 hari lalu",
    },
    {
      id: 5,
      nama: "Pipitri",
      suka: "0 orang suka",
      text: "ANJAYY",
      waktu: "2 hari lalu",
    },
  ];

  return (
    <div className="bg-gray-200 h-screen">

      {/*navbar*/}
      <div className="bg-white h-15 w-360">
        <div className="flex flex-row text-black">
          <div className=" mt-5 ml-3">
            <h1>SMK TELKOM MAKASSAR</h1>
          </div>
          <div className="ml-280 flex flex-row gap-2">
            <div className="bg-yellow-200 text-white h-10 w-10 mt-2 text-center rounded-full">
              <div className="mt-2">
                A
              </div>
            </div>
            <div className="mt-4">
              <h1> Amsfa</h1>
            </div>
          </div>
        </div>
      </div>

      <div>

        {/*box1*/}
        <div className="p-4 flex flex-row gap-4">

          <div className="flex grid grid-cols">
            <div className="h-40 w-180 rounded-xl bg-white shadow-xl">
              <div className="bg-blue-200 h-15 rounded-t-xl flex justify-between shadow-sm text-blue-950 text-sm font-bold">
                <div className="mt-4 flex flex-row">
                  <div className="ml-5">
                    <h1>Jurnal Mengajar</h1>
                  </div>
                  <div className="flex">
                    <select
                      id="pilihan"
                      className="block w-30 h-7 bg-white shadow-sm text-sm px-4 rounded-lg focus:outline-none text-gray-700 ml-60">
                      <option value="" className="rounded-md">
                        -- Pilih --
                      </option>
                      <option value="1" className="rounded-md">
                        XI RPL 4
                      </option>
                      <option value="2" className="rounded-md">
                        XI RPL 3
                      </option>
                      <option value="3" className="rounded-md">
                        XI RPL 2
                      </option>
                      <option value="3" className="rounded-md">
                        XI RPL 1
                      </option>
                    </select>
                    <input
                      type="date"
                      className="px-3 bg-white shadow-md font-light w-50 rounded-md h-7 ml-3" />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex-col h-full w-1/2 flex gap-2 text-blue-950 p-2 justify-center items-center">
                  <h1 className="font-bold w-full text-center">Status Kehadiran</h1>
                  <div className="flex gap-40">
                    <div className="text-center">
                      <h1 className="font-extrabold text-3xl">0</h1>
                      <span className="font-medium text-xs">Hadir</span>
                    </div>
                    <div className="text-center">
                      <h1 className="font-extrabold text-3xl">0</h1>
                      <span className="font-medium text-xs">Tidak Hadir</span>
                    </div>
                  </div>
                </div>

                <div className="h-20 border-1 translate-y-4 rounded-2xl border-gray-400"></div>

                <div className="flex-col h-full w-1/2 flex gap-2 text-blue-950 p-2 justify-center items-center">
                  <h1 className="font-bold w-full text-center">Status Kehadiran</h1>
                  <div className="flex gap-40">
                    <div className="text-center">
                      <h1 className="font-extrabold text-3xl">0</h1>
                      <span className="font-medium text-xs">Hadir</span>
                    </div>
                    <div className="text-center">
                      <h1 className="font-extrabold text-3xl">0</h1>
                      <span className="font-medium text-xs">Tidak Hadir</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* apk */}
            <div className="h-90 w-180 rounded-2xl bg-white shadow-xl mt-5 text-black">
              <div className="bg-blue-200 shadow-sm h-10 rounded-t-xl">
                <h1 className="px-5 py-2 text-blue-950 text-sm font-bold">
                  Aplikasi
                </h1>
              </div>
              <div className="h-80 flex justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                  {card.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col justify-center items-center h-20 w-25 gap-2">
                      <div className="h-10 w-10 bg-blue-950 shadow-xl rounded-md flex justify-center items-center hover:scale-120">
                        <div className="text-lg text-white">{item.logo}</div>
                      </div>
                      <h1 className="text-center font-bold text-xs">{item.nama}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols">
            {/* mini  */}
            <div className="shadow-2xl h-40 w-[290px] bg-white ml-3 rounded-2xl relative overflow-hidden">

              {/* Teks overlay */}
              <div className="mt-15 ml-20">
                <h2 className="text-md left-15 font-bold text-blue-950">
                  Guru Terbaik
                </h2>
                <h2 className="text-xs left-12 italic text-gray-500">
                  Belum ada guru terbaik
                </h2>
              </div>
            </div>

            {/* news */}
            <div className="flex gap-3 ml-4">
              <div className="shadow-xl h-90 w-73 mt-4 rounded-2xl ">
                <div className="bg-white shadow-sm h-10 rounded-t-xl">
                  <h1 className="px-5 py-2 text-blue-950 text-sm font-bold">News</h1>
                </div>
                <div className="w-73 p-2 mt-1 h-45 overflow-hidden">
                  <Image src={telkom} alt="telkom" width={500} height={500} className="w-full h-full object-cover rounded-sm"/>
                </div>
                <p className="text-black px-2 mb-2">
                  Life update
                </p>

                <div className="border-1 translate-x-5 w-55 rounded-2xl border-gray-200"></div>
              </div>
            </div>
          </div>

          {/* conversation */}
          <div className="shadow-xl bg-white h-145 w-90 rounded-2xl top-12.5">
            <div>
              <div className="bg-blue-200 shadow-sm h-10 rounded-t-xl">
                <h1 className="px-5 py-2 text-blue-950 text-sm font-bold">
                  Sapa Guru
                </h1>
              </div>
              <div className="h-122 w-90 p-3  overflow-scroll">
                {data.map((ilmu) => (
                  <div className="flex flex-col mb-2 ">
                    <div key={ilmu.id} className="bg-gray-300 h-25 rounded-sm">
                      <h2 className="text-[12px] font-semibold text-gray-500 p-2">
                        {ilmu.nama}
                      </h2>
                      <div className="border-[0.5px] translate-x-2 w-75 rounded-2xl border-gray-400"></div>
                      <h2 className="text-[10px] font-bold text-gray-500 p-2">
                        {ilmu.text}
                      </h2>
                      <div className="border-[0.5px] translate-x-2 w-75 rounded-2xl border-gray-400"></div>
                      <div className="flex justify-between">
                        <div className="flex">
                          <h2 className="text-[15px] font-bold text-gray-500 pl-2 pt-1">
                            ❤︎
                          </h2>
                          <h2 className="text-[10px] text-gray-500 p-2">
                            {ilmu.suka}
                          </h2>
                        </div>
                        <h2 className="text-[10px] text-gray-500 p-2">
                          {ilmu.waktu}
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <br/>
              <div className="w-80 ml-5">
                <div className="flex mb-5">
                  <input
                    type="text"
                    placeholder="Ketik Sesuatu..."
                    className="py-1 px-3 text-gray-400 rounded-md bg-gray-200 shadow-xl w-70 text-sm border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none" />

                  <h1 className="right-3 shadow-2xl text-3xl w-5 h-5 absolute text-black">❀</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}