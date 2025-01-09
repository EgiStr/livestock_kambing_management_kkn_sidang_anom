import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import { User, Star, MapPin, Phone } from 'lucide-react'


const DetailProfil = ({ user }) => {
  console.log(user)
  return (
    <Layout>
      <div className="min-h-screen p-3 md:p-12 mt-10 px-2 md:px-[180px]">
        {/* Profil Section */}
        <div className="max-w-3xl mx-auto p-4">
          <div className="flex flex-col md:flex-row md:gap-12 bg-white rounded-lg p-6">
            {/* Profile Image */}
            <img
            // src={user.kandangImage}
            src="https://placehold.co/300x200"
            alt="Kandang"
            className="rounded-lg w-full"
          />
            
            {/* Profile Information */}
            <div className="space-y-4 mt-6 md:mt-0">
              <h2 className="text-2xl font-bold text-green">{user.fullname}</h2>
              <div className="space-y-2 w-[200px]">
                <div>
                  <span className="text-green font-semibold">Bio</span>
                  <p className="">
                    {user.bio}
                  </p>
                </div>
                
                <div>
                  <p className="text-green font-bold">Jumlah Kandang : <span className="text-black">{user.farms.length}</span></p>
                </div>
                <Link href="/wa">
                  <button className="flex justify-end text-sm text-white bg-green px-4 py-2 mt-20 rounded-md font-semibold">
                    Hubungi : {user.phone_number}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>



        {/* Peternakan Section */}
          <div className="text-center mb-8 mt-20">
            <h1 className="font-bold text-3xl text-green-600 mb-10">Peternakan {user.fullname}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.farms.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition duration-300 hover:shadow-lg"
                >
                  {/* Farm Image */}
                  <div className="relative h-48">
                    <img
                      src="https://placehold.co/400x300"
                      alt="Peternakan"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 m-2 bg-green text-white px-2 py-1 rounded-full flex items-center space-x-1">
                      <User size={14} />
                      <span className="text-xs font-semibold">{user.fullname}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                      <div className="text-yellow-500 flex space-x-1">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm text-left mb-4">
                      {item.description
                        ? item.description.slice(0, 100) +
                          (item.description.length > 100 ? "..." : "")
                        : "Tidak ada deskripsi"}
                    </p>

                    {/* Capacity */}
                    <p className="text-green text-sm text-left font-semibold mb-4">
                      Kapasitas: <span className="text-gray-700">{item.capacity} Kepala</span>
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
          </div>
      </div>
    </Layout>
  );
};

export default DetailProfil;
