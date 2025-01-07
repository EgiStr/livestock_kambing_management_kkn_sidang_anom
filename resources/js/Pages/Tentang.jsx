import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Navbar from "../component/Navbar";
import HeroCustom from "../component/HeroCustom";
import Layout from "../Layouts/Layout";


const About = () => {
  return (
    <>
      <Navbar/>
      <HeroCustom name="Tentang Desa Sindang Anom"/>
      <Layout>
      <div className="bg-white flex justify-center">
        <div className="container px-5 md:px-[150px]">
          {/* Title Section */}
          <div className="text-justify mb-8 mt-[150px]">
            <h1 className="text-xl md:text-4xl font-bold text-green">
              Tentang Desa Sindang Anom
            </h1>
          </div>

          {/* Description Section */}
          <div className="text-gray-700 text-semibold leading-relaxed">
            <p className="text-justify">
            Alamat Desa Sindang Anom : Jl. Pasar Desa Sindang Anom, Kecamatan Sekampung Udik Kabupaten Lampung Timur, 
            Provinsi Lampung, Kode Pos 34183
            </p>
            <p className="text-justify mt-3">
            Secara topografi, wilayah Desa Sindang Anom, Kecamatan Sekampung Udik  Kabupaten Lampung Timur Propinsi Lampung  merupakan dataran rendah dengan ketinggian tempat 50 m dari permukaan laut. Desa Sindang Anom memiliki  struktur  tanah yang subur untuk pertanian dengan jenis tanah sebagian  besar merupakan Podosolik M.K. Secara Klimatologis Desa 
            Sindang Anom  memiliki iklim tropis yang mengalami dua musim yakni musim kemarau dan  musim penghujan. Suhu udara 
            berkisar antara 30o C sampai dengan 32oC.  Penggunaan lahan di Desa Sindang Anom secara luas merupakan persawahan  
            dan pekarangan/tegalan. Luas penggunaan untuk lahan sawah seluas 422 Ha  dan luas lahan untuk digunakan Tegalan seluas 1138 Ha.
            </p>
            <p className="text-justify mt-3">
              Berdasarkan data registrasi tahun 2022, kelembagaan petani Desa  Sindang Anom terdiri dari 1 Gapoktan dengan 35 Kelompok tani. Semua  kelompok tani terklasifikasi sebagai kelompok tani kelas pemula dan  kelas lanjut.
            </p>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default About;