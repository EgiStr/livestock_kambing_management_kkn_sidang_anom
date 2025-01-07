import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import { User } from "lucide-react";


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
        <div className="mt-20 text-center">
          <h1 className="font-bold text-2xl text-green">Peternakan Bapak {user.fullname}</h1>
          <div className="grid grid-cols-3 gap-6 mt-20">
            {user.farms.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md shadow-md overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="bg-gray-200">
                  <img src="https://placehold.co/400x300" alt="Peternakan" />
                </div>

                {/* Card Content */}
                <div className="p-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-sm text-green font-bold bg-green px-3 py-1 rounded-full text-white mt-2">
                      <span className="text-white rounded-full mr-1 flex items-center justify-center text-xs">
                        <User size={16} />
                      </span>
                      {user.fullname}
                    </div>
                    <div className="text-yellow-500 flex space-x-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                    </div>
                  </div>

                  <h2 className="text-gray-800 text-left text-sm font-semibold mb-4 mt-3">
                    {item.description}
                  </h2>

                  <h2 className="text-green text-left -mt-2 text-sm font-semibold mb-4">
                    Kapasitas : <span className="text-black">{item.capacity} Kepala</span>
                  </h2>

                  <Link
                    href={`/detailternak/${item.id}`}
                    className="text-green mt-6 text-sm font-semibold hover:underline flex items-center"
                  >
                    Lihat Detail
                  </Link>
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
