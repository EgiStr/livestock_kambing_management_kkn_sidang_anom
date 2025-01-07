import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";


const DetailProfil = () => {
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
  ];

  const data1 = {
    name: "Jumali",
    contactPerson: "Bpk Jumali",
    phone: "085858763990",
    description:
      "OBH COMBI ANAK BATUK FLU RASA JERUK 60 anak seperti demam, sakit kepala, hidung tersumbat dan bersin-bersin. Beli OBH COMBI ANAK BATUK FLU RASA JERUK 60ML di apotek online K24Klik dan dapatkan manfaatnya.",
    jumlahKambing: 5,
    cctvImage: "https://placehold.co/400x300",
    kandangImage: "https://placehold.co/1000x900",
  };

  return (
    <Layout>
      <div className="min-h-screen p-6 md:p-12 mt-20 px-5 md:px-[150px]">
        {/* Profil Section */}
        <div className="flex justify-between gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <img
              src={data1.kandangImage}
              alt="Kandang"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Info Section */}
          <div className="md:w-2/3 space-y-3">
            <h1 className="text-3xl font-bold text-HoverGreen">{data1.name}</h1>

            <div>
              <h2 className="text-lg font-semibold text-green">Deskripsi</h2>
              <p className="text-gray-600 mb-5">{data1.description}</p>
              <p className="text-green font-bold">Jumlah Kandang : <span className="text-black">4</span></p>
              <p className="text-green font-bold">Alamat : <span className="text-black">Dusun 10</span></p> 
            </div>
            <Link href={"/admin"}>
                <button className="bg-green hover:bg-HoverGreen text-white px-4 py-2 rounded-md transition duration-200 mt-10">
                    Hubungi : {data1.phone}
                </button>
            </Link>
          </div>
        </div>

        {/* Peternakan Section */}
        <div className="mt-[140px] text-center">
          <h1 className="font-bold text-2xl text-green">Peternakan Bapak Jumali</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="bg-gray-200">
                  <img src="https://placehold.co/400x300" alt="Peternakan" />
                </div>

                {/* Card Content */}
                <div className="p-4">
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

                  <h2 className="text-gray-800 text-left text-sm font-semibold mb-4">
                    {item.title}
                  </h2>

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
  );
};

export default DetailProfil;
