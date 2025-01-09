import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../Layouts/Layout";
import Hero from "../component/Hero";
import TentangHome from "../component/TentangHome";
import StokPage from "../component/StrukturOrganisasi";
import { User } from "lucide-react";


const Home = (farms) => {
  const latestFarms = farms.farms
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) 
    .slice(0, 4); 
  return (
    <>
        <Hero/>
        <Layout>
          <TentangHome/>
          <StokPage/>
          {/* <TernakHome/> */}
          <div className="bg-gray-100 min-h-screen py-10 mt-10">
      {/* Header */}
      <div className="text-center mb-[90px]">
        <h1 className="text-xl md:text-3xl font-bold text-HoverGreen">
          Peternakan Di Desa Sindang Anom
        </h1>
        <p className="text-green-500 text-md font-semibold mt-1">
          Lihat Semua Peternakan disini
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5 md:px-[100px]">
        {latestFarms.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            {/* Image Placeholder */}
            <div className="bg-gray-200">
              <img
                // src={item.image_url}
                src="https://placehold.co/400x300"
                alt="Peternakan"
              />
            </div>

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-grow">
              {/* Author and Rating */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-sm text-white font-bold bg-green px-3 py-1 rounded-full">
                  <span className="text-white rounded-full mr-1 flex items-center justify-center text-xs">
                    <User size={16} />
                  </span>
                  {item.user?.fullname || "Tidak ada data pengguna"}
                </div>
                <div className="text-yellow-500 flex space-x-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                </div>
              </div>

              {/* Title */}
              <p>
                {item.description
                  ? item.description.slice(0, 50) +
                    (item.description.length > 100 ? "..." : "")
                  : "Tidak ada deskripsi"}
              </p>
              <p className="mt-1 font-bold text-sm text-HoverGreen mb-6">
                Kapasitas: {item.capacity} Kepala
              </p>
              {/* Detail Link */}
              <div className="mt-auto">
                <Link
                  href={`/detailternak/${item.id}`}
                  className="text-green text-sm font-semibold hover:underline flex items-center"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center md:justify-center mt-10">
        <Link href={"/peternakan"}>
          <button className="bg-green hover:bg-HoverGreen text-white font-semibold px-6 py-2 rounded-md transition duration-200">
            Lihat Selengkapnya
          </button>
        </Link>
      </div>
    </div>
        </Layout>
    </>
    
  );
};

export default Home;
