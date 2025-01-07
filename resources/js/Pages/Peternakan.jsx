import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Navbar from "../component/Navbar";
import HeroCustom from "../component/HeroCustom";
import Layout from "../Layouts/Layout";


const Ternak = () => {
  const data = [
    {
      id: 1,
      author: "Jumali",
      title:
        "Formula Inokulan Bakteri untuk Peningkatan Produktivitas Kambing pada Lahan Kering Asam (pH > 4,0)",
    },
    {
      id: 2,
      author: "Jumali",
      title:
        "Formula Inokulan Bakteri untuk Peningkatan Produktivitas Kambing pada Lahan Kering Asam (pH > 4,0)",
    },
    {
      id: 3,
      author: "Jumali",
      title:
        "Formula Inokulan Bakteri untuk Peningkatan Produktivitas Kambing pada Lahan Kering Asam (pH > 4,0)",
    },
    {
      id: 4,
      author: "Jumali",
      title:
        "Formula Inokulan Bakteri untuk Peningkatan Produktivitas Kambing pada Lahan Kering Asam (pH > 4,0)",
    },
    {
      id: 2,
      author: "Jumali",
      title:
        "Formula Inokulan Bakteri untuk Peningkatan Produktivitas Kambing pada Lahan Kering Asam (pH > 4,0)",
    },
    {
      id: 3,
      author: "Jumali",
      title:
        "Formula Inokulan Bakteri untuk Peningkatan Produktivitas Kambing pada Lahan Kering Asam (pH > 4,0)",
    },
    {
      id: 2,
      author: "Jumali",
      title:
        "Formula Inokulan Bakteri untuk Peningkatan Produktivitas Kambing pada Lahan Kering Asam (pH > 4,0)",
    },
    {
      id: 3,
      author: "Jumali",
      title:
        "Formula Inokulan Bakteri untuk Peningkatan Produktivitas Kambing pada Lahan Kering Asam (pH > 4,0)",
    },
  ];

  return (
    <>
      <Navbar/>
      <HeroCustom name="Peternakan di Desa Sindang Anom"/>
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
                  {data.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      {/* Image Placeholder */}
                      <div className="bg-gray-200">
                          <img src="https://placehold.co/400x300" alt="" />
                      </div>
          
                      {/* Card Content */}
                      <div className="p-4">
                        {/* Author and Rating */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center text-sm text-green font-bold">
                            <span className="text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-1">
                              👤
                            </span>
                            {item.author}
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
                          {item.title}
                        </h2>
          
                        {/* Detail Link */}
                        <Link 
                          href="/detailternak"
                          className="text-green text-sm font-semibold hover:underline flex items-center"
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
    </>
  );
};

export default Ternak;