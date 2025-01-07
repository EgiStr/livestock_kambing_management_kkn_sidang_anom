import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import { User } from "lucide-react";

const DetailTernak = ({ farm }) => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-6 md:p-12 mt-20 px-5 md:px-[200px]">
        <div className="flex flex-col md:flex-row mb-10 gap-6">
          {/* Left Column */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">{farm.name}</h1>
            <div className="mt-8">
              <h2 className="text-lg font-bold text-green">Deskripsi</h2>
              <p className="text-gray-600 mt-1">{farm.description}</p>
              <p className="text-green font-bold mt-5">
                Kapasitas Kandang: <span className="text-black font-semibold">{farm.capacity} Kepala</span>
              </p>
              <p className="text-green font-bold">
                Lokasi Kandang: <span className="text-black font-semibold">{farm.location}</span>
              </p>
            </div>

            <div className="space-y-4 mt-10">
              <p className="text-HoverGreen font-bold">
                <User className="inline mr-2" width={20} />
                {farm.user ? farm.user.fullname : "Tidak ada data user"}
              </p>
              <Link href="/wa">
                <button className="text-white bg-green px-4 py-2 mt-1 rounded-md font-semibold">
                  Hubungi: {farm.user ? farm.user.phone_number : "Tidak ada data phone number"}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/600x400"
              alt="farm"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        {/* CCTV Section */}
        <div className="flex justify-center items-center">
            <div className="mt-[100px]">
              <h2 className="text-lg font-bold text-green mb-3">📹 CCTV</h2>
              <img
                  src="https://placehold.co/600x400"
                  alt="CCTV"
                  className="rounded-lg shadow-md md:w-[90%] w-full"
                />
            </div>
        </div>

        {/* Sensor Information */}
        <div className="mt-10 bg-[#F9F9F9] rounded border text-sm p-6">
          <h2 className="text-xl font-bold text-green">Informasi Terkait Kandang Ternak</h2>
          <div className="space-y-4 mt-4">
            <p className="text-gray-800 font-bold">
              Suhu : {farm.iot_sensors ? farm.iot_sensors.temperature : "Tidak ada data suhu"}
            </p>
            <p className="text-gray-600 font-bold">
              Kelembapan : {farm.iot_sensors ? farm.iot_sensors.humidity : "Tidak ada data kelembapan"}
            </p>
            <p className="text-gray-600 font-bold">
              Amonia : {farm.iot_sensors ? farm.iot_sensors.ammonia : "Tidak ada data amonia"}
            </p>
            <p className="text-gray-600 font-bold">
              Intensitas Cahaya : {farm.iot_sensors ? farm.iot_sensors.light_intensity : "Tidak ada data intensitas cahaya"}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailTernak;
