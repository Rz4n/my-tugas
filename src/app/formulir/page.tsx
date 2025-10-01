"use client";
import React, { useState } from "react";

export default function FormulirPendaftaran() {
  const [formData, setFormData] = useState({

    nis: "",
    nisn: "",
    email: "",
    namaLengkap: "",
    jenisKelamin: "",
    tempatLahir: "",
    tanggalLahir: "",
    agama: "",
    alamat: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    whatsapp: "",


    namaSekolah: "",
    provinsiSekolah: "",
    kotaSekolah: "",
    kecamatanSekolah: "",
    alamatSekolah: "",

    namaAyah: "",
    profesiAyah: "",
    whatsappAyah: "",
    usiaAyah: "",
    alamatAyah: "",

    namaIbu: "",
    profesiIbu: "",
    whatsappIbu: "",
    usiaIbu: "",
    alamatIbu: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data dikirim:", formData);
    alert("Data berhasil dikirim!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Formulir Pendaftaran Siswa Baru
      </h1>
      <form onSubmit={handleSubmit} className="space-y-8">

        <section className="p-4 border rounded-xl shadow-md bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Data Diri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "nis", placeholder: "NIS" },
              { name: "nisn", placeholder: "NISN" },
              { name: "email", placeholder: "Email", type: "email" },
              { name: "namaLengkap", placeholder: "Nama Lengkap" },
              { name: "tempatLahir", placeholder: "Tempat Lahir" },
              { name: "tanggalLahir", type: "date" },
              { name: "provinsi", placeholder: "Provinsi" },
              { name: "kota", placeholder: "Kota" },
              { name: "kecamatan", placeholder: "Kecamatan" },
              { name: "whatsapp", placeholder: "No WhatsApp" },
            ].map((field, idx) => (
              <div key={idx} className="p-3 bg-white border rounded-lg shadow-sm">
                <input
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  className="w-full outline-none"
                />
              </div>
            ))}

            <div className="p-3 bg-white border rounded-lg shadow-sm">
              <select
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleChange}
                className="w-full outline-none"
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            <div className="p-3 bg-white border rounded-lg shadow-sm md:col-span-2">
              <textarea
                name="alamat"
                placeholder="Alamat"
                value={formData.alamat}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>
        </section>

        <section className="p-4 border rounded-xl shadow-md bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Asal Sekolah</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "namaSekolah", placeholder: "Nama Sekolah" },
              { name: "provinsiSekolah", placeholder: "Provinsi Sekolah" },
              { name: "kotaSekolah", placeholder: "Kota Sekolah" },
              { name: "kecamatanSekolah", placeholder: "Kecamatan Sekolah" },
            ].map((field, idx) => (
              <div key={idx} className="p-3 bg-white border rounded-lg shadow-sm">
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  className="w-full outline-none"
                />
              </div>
            ))}
            <div className="p-3 bg-white border rounded-lg shadow-sm md:col-span-2">
              <textarea
                name="alamatSekolah"
                placeholder="Alamat Sekolah"
                value={formData.alamatSekolah}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>
        </section>
        <section className="p-4 border rounded-xl shadow-md bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Data Ayah/Wali</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "namaAyah", placeholder: "Nama Ayah/Wali" },
              { name: "profesiAyah", placeholder: "Profesi Ayah/Wali" },
              { name: "whatsappAyah", placeholder: "No WhatsApp Ayah/Wali" },
              { name: "usiaAyah", placeholder: "Usia Ayah/Wali", type: "number" },
            ].map((field, idx) => (
              <div key={idx} className="p-3 bg-white border rounded-lg shadow-sm">
                <input
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  className="w-full outline-none"
                />
              </div>
            ))}
            <div className="p-3 bg-white border rounded-lg shadow-sm md:col-span-2">
              <textarea
                name="alamatAyah"
                placeholder="Alamat Ayah/Wali"
                value={formData.alamatAyah}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>
        </section>

        <section className="p-4 border rounded-xl shadow-md bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Data Ibu/Wali</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "namaIbu", placeholder: "Nama Ibu/Wali" },
              { name: "profesiIbu", placeholder: "Profesi Ibu/Wali" },
              { name: "whatsappIbu", placeholder: "No WhatsApp Ibu/Wali" },
              { name: "usiaIbu", placeholder: "Usia Ibu/Wali", type: "number" },
            ].map((field, idx) => (
              <div key={idx} className="p-3 bg-white border rounded-lg shadow-sm">
                <input
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  className="w-full outline-none"
                />
              </div>
            ))}
            <div className="p-3 bg-white border rounded-lg shadow-sm md:col-span-2">
              <textarea
                name="alamatIbu"
                placeholder="Alamat Ibu/Wali"
                value={formData.alamatIbu}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>
        </section>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Kirim Data
        </button>
      </form>
    </div>
  );
}