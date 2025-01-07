import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Navbar from "../component/Navbar";
import HeroCustom from "../component/HeroCustom";
import Layout from "../Layouts/Layout";
import { User } from 'lucide-react';


const Ternak = ({ farms }) => {
  return (
    <>
      <Navbar />
      <HeroCustom name="Peternakan di Desa Sindang Anom" />
      <Layout>
        <div className="bg-white flex justify-center mb-20">
          <div className="container px-5 md:px-[50px]">
            {/* Title Section */}
            <div className="text-justify mb-[100px] mt-[100px]">
              <h1 className="text-xl md:text-3xl font-bold text-green text-center">
                Daftar Peternakan
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5 md:px-[10px]">
              {farms.map((farm) => (
                <div
                  key={farm.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  {/* Image Placeholder */}
                  <div className="bg-gray-200">
                    <img 
                      // src={farm.image_url} 
                      src="https://placehold.co/600x400" 
                      className="w-full h-[200px] object-cover"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    {/* Author and Rating */}
                    <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-sm text-green font-bold bg-green px-3 py-1 rounded-full text-white">
                        <span className="text-white rounded-full mr-1 flex items-center justify-center text-xs">
                          <User size={16} />
                        </span>
                        {farm.users ? farm.users.fullname : "Tidak ada data pengguna"}
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
                    <h2 className="text-gray-800 text-sm font-semibold mb-4">
                      {farm.name}
                    </h2>

                    <div className="text-sm text-gray-600 mb-4">
                      <p>{farm.description ? farm.description.slice(0, 50) + (farm.description.length > 100 ? '...' : '') : "Tidak ada deskripsi"}</p>
                      <p className="mt-1 font-bold text-HoverGreen">Kapasitas : {farm.capacity} Kepala</p>
                      {farm.phone_number}
                    </div>

                    {/* Detail Link */}
                    <Link
                      href={`/detailternak/${farm.id}`}
                      className="text-green text-sm font-semibold hover:underline flex items-center mt-5">
                      Lihat Detail 
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Ternak;