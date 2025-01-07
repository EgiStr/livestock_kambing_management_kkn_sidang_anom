import React from "react";
import Layout from "../Layouts/Layout";

const DetailTernak = () => {
  // Data dummy
  const data = {
    title: "Kandang Kambing",
    contactPerson: "Bpk Jumali",
    phone: "085858763990",
    description:
      "BATUK FLU RASA JERUK 60ML di apotek online K24Klik dan dapatkan manfaatnya.",
    jumlahKambing: 5,
    cctvImage: "https://placehold.co/400x300",
    kandangImage: "https://placehold.co/600x400",
    sensorInfo: [
      { title: "Sensor 1", description: "Meredakan Pilek Dan Batuk" },
      {
        title: "Sensor 2",
        description:
          "succus Liquiritiae 100 mg, Paracetamol 120 mg, Ammonium Chloride 50 mg, Pseudoephedrine HCL 7.5 mg, Chlorphenamine Maleate 1.0 mg",
      },
      {
        title: "Sensor 3",
        description:
          "succus Liquiritiae 100 mg, Paracetamol 120 mg, Ammonium Chloride 50 mg, Pseudoephedrine HCL 7.5 mg, Chlorphenamine Maleate 1.0 mg",
      },
      {
        title: "Sensor 4",
        description:
          "succus Liquiritiae 100 mg, Paracetamol 120 mg, Ammonium Chloride 50 mg, Pseudoephedrine HCL 7.5 mg, Chlorphenamine Maleate 1.0 mg",
      },
    ],
  };

  return (
    <>
    <Layout>
    <div className="bg-gray-100 min-h-screen p-6 md:p-12 mt-20 px-5 md:px-[150px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800">{data.title}</h1>

          {/* Contact Information */}
          <div className="space-y-2">
            <button className="text-white bg-green px-4 py-1 rounded-full font-semibold">👤 Jumali</button>
            <p className="text-HoverGreen mb-2 font-bold">Hubungi : <span className="text-black">{data.phone}</span></p>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-bold text-green">Deskripsi</h2>
            <p className="text-gray-600">{data.description}</p>
            <p className="text-green font-bold mt-5">
              Jumlah Kambing : <span className="text-black">{data.jumlahKambing}</span>
            </p>
          </div>

          {/* CCTV Section */}
          <div>
            <h2 className="text-lg font-bold mt-20 text-green mb-3 font-bold">📹 CCTV</h2>
            <img
              src={data.cctvImage}
              alt="CCTV"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Kandang Image */}
          <div>
            <img
              src={data.kandangImage}
              alt="Kandang"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Sensor Information */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-green mt-[100px]">
              Informasi Terkait Kandang Kambing
            </h2>
            <div className="space-y-4 mt-4">
              {data.sensorInfo.map((sensor, index) => (
                <div key={index}>
                  <h3 className="text-gray-800 font-bold">{sensor.title}</h3>
                  <p className="text-gray-600">{sensor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
    </>
  );
};

export default DetailTernak;
