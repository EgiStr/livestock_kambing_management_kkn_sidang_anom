import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Navbar from "../component/Navbar";
import HeroCustom from "../component/HeroCustom";
import Layout from "../Layouts/Layout";
import { User } from "lucide-react";


const Profil = ({ users }) => {

  return (
    <>
      <Navbar/>
      <HeroCustom name="Profil Peternak di Desa Sindang Anom"/>
      <Layout>
      <div className="bg-white flex justify-center mb-20">
        <div className="container px-5 md:px-[50px]">
          {/* Title Section */}
          <div className="text-justify mb-[100px] mt-[100px]">
            <h1 className="text-xl md:text-3xl font-bold text-green text-center">
              Daftar Pemilik Ternak 
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5 md:px-[10px]">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="bg-gray-200">
                  <img
                    src="https://placehold.co/600x400"
                    alt="User"
                    className="w-full h-[200px] object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col flex-grow">
                  {/* Author */}
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-sm text-white font-bold bg-green px-3 py-1 rounded-full">
                      <span className="text-white rounded-full mr-1 flex items-center justify-center text-xs">
                        <User size={16} />
                      </span>
                      {user.fullname}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-gray-800 text-sm font-semibold mb-4">{user.name}</h2>

                  {/* Bio and Contact */}
                  <div className="text-sm text-gray-600 mb-4 flex-grow">
                    <p>
                      {user.bio
                        ? user.bio.slice(0, 50) + (user.bio.length > 50 ? "..." : "")
                        : "Tidak ada deskripsi"}
                    </p>
                    <p className="text-black font-semibold mt-2 mb-5">
                      Hubungi: <span className="text-HoverGreen">{user.phone_number}</span>
                    </p>
                  </div>

                  {/* Detail Link */}
                  <div className="mt-auto">
                    <Link
                      href={`/detailprofil/${user.id}`}
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
    </>
  );
};

export default Profil;