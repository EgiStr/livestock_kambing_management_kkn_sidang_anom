import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "@inertiajs/inertia-react"; 
import { User } from 'lucide-react';


const DetailTernak = ({ farm }) => {;

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-6 md:p-12 mt-20 px-5 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6 md:text-left">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800">{farm.name}</h1>

            {/* Description */}
            <div>
              <h2 className="text-lg font-bold text-green">Deskripsi</h2>
              <p className="text-gray-600">{farm.description}</p>
              <p className="text-green font-bold mt-5">
                Kapasitas Kandang : <span className="text-black font-semibold">{farm.capacity} Kepala</span>
              </p>
              <p className="text-green font-bold">
                Lokasi Kandang : <span className="text-black font-semibold">{farm.location}</span>
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-2">
            <p className="text-HoverGreen font-bold">
              <User className="inline mr-1 -mt-1" width={20}/>
              {farm.users ? farm.users.fullname : "Tidak ada data user"}
            </p>

              <Link href="/wa">
                <button className="text-white bg-green px-2 py-1 rounded-md font-semibold">
                  Hubungi : {farm.users ? farm.users.phone_number : "Tidak ada data phone number"}
                </button>
              </Link>
            </div>

            {/* CCTV Section */}
            <div>
              <h2 className="text-lg font-bold mt-20 text-green mb-3 font-bold text-left">📹 CCTV</h2>
              <img
                // src={farm.cctv_url}
                src="https://placehold.co/600x400"
                alt="CCTV"
                className="rounded-lg shadow-md md:w-[90%] w-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* farm Image */}
            <div>
              <img
                // src={farm.image_url}
                src="https://placehold.co/600x400"
                alt="farm"
                className="rounded-lg shadow-md w-full"
              />
            </div>

            {/* Sensor Information */}
            <div className="rounded-lg">
              <div className="mt-[250px] bg-[#F9F9F9] rounded border text-sm p-2">
                <h2 className="text-xl font-bold text-green mt-2">
                  Informasi Terkait Kandang Ternak
                </h2>
                <div className="space-y-4 mt-4">
                      <p className="text-gray-800 font-bold">
                        {farm.iot_sensors ? farm.iot_sensors.temperature  : "Tidak ada data suhu"}
                      </p>
                      <p className="text-gray-600">
                        {farm.iot_sensors  ? farm.iot_sensors.humidity  : "Tidak ada data kelembapan"}
                      </p>
                      <p className="text-gray-600">
                        {farm.iot_sensors  ? farm.iot_sensors.ammonia : "Tidak ada data amonia"}
                      </p>
                      <p className="text-gray-600">
                        {farm.iot_sensors ? farm.iot_sensors.light_intensity : "Tidak ada data intensitas cahaya"}
                      </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailTernak;