"use client";
import React from "react";
import diagram from "./foto/diagram.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./db.css";

export default async function page({params}) {
    const router = useRouter();
    const { demoid } = await params;
  return (
    <main>
      <div className="header">
        <h1 className="hd-up">Dashbor Monitoring Jaringan {demoid}</h1>
        <h1 className="hd-down">status koneksi internet dan perangkat lokal secara real-time</h1>
      </div>

      {/* nav */}
      <div className="nav">
        <ul className="ul-nav">
          <li className="li-nav">
            <a>Rentang IP Lokal (CDR):</a>
          </li>
          <li className="li-nav">
            <a className="ip"><input type="text" placeholder="IP" required /></a>
          </li>
          <li className="li-nav">
            <a href="#" className="scan-button">Mulai Scan Lokal</a>
          </li>
        </ul>
      </div>
      {/* nav */}

      {/* isi 1 */}
      <div>
        <ul className="ul-isi1">
            <li className="li-isi1-1">
                <a className="status">bawds</a>
                <a className="status">awdasd</a>
            </li>
            <li className="li-isi1">
                <a className="status">awdsa</a>
                <a className="status">qweqwe</a>
            </li>
            <li className="li-isi1">
                <a className="status">qweqwe</a>
                <a className="status">qweqwe</a>
            </li>
            <li className="li-isi1">
                <a className="status">qweqe</a>
                <a className="status">qweqwe</a>
            </li>
        </ul>
        <div>
            <ul className="ul-isi2">
            <li className="li-isi2">
                <a></a>
            </li>
            <li className="li-isi3">
                <a className="judul-no-on">Top 20 Pengguna Internet</a>
                <a className="no-on">Tidak Ada Perangkat Online</a>
            </li>
        </ul>
        </div>
        <div className="nav-bawah">
            <h1>Perangkat Terhubung</h1>
            <ul className="ul-nav-bawah">
                <li>
                    <a>a</a>
                </li>
                <li>
                    <a>a</a>
                </li>
                <li>
                    <a>a</a>
                </li>
                <li>
                    <a>a</a>
                </li>
                <li>
                    <a>a</a>
                </li>
                <li>
                    <a>a</a>
                </li>
                <li>
                    <a>a</a>
                </li>
                <li>
                    <a>a</a>
                </li>
                <li>
                    <a>a</a>
                </li>
            </ul>
        </div>
      </div>
      {/* isi 1 */}
    </main>
  );
}
