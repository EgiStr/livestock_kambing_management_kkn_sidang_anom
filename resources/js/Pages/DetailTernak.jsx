import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import { User, Thermometer, Droplets, Wind, Sun, CalendarIcon, ChevronDown } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DetailTernak = ( ) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const farm = {
    name: "Kandang Ternak Sejahtera",
    description: "Kandang modern untuk peternakan unggas.",
    pan_length: 10,
    pan_width: 5,
    pan_height: 3,
    capacity: 200,
    location: "Desa Maju, Kecamatan Harmoni",
    user: {
      fullname: "Pak Tani",
      phone_number: "081234567890",
    },
    image: "https://placehold.co/600x400",
    iot_sensors: {
      temperature: "30°C",
      humidity: "70%",
      ammonia: "5 ppm",
      light_intensity: "1000 lux",
      temperature_data: Array.from({ length: 60 }, (_, i) => {
        const date = new Date(2025, 0, 1 + i); // Mulai dari 1 Januari 2025
        return {
          datetime: date.toISOString().split("T")[0], // Format tanggal: YYYY-MM-DD
          value: Math.random() * 5 + 28, // Suhu antara 28°C - 33°C
        };
      }),
      humidity_data: Array.from({ length: 60 }, (_, i) => {
        const date = new Date(2025, 0, 1 + i);
        return {
          datetime: date.toISOString().split("T")[0],
          value: Math.random() * 10 + 65, // Kelembapan antara 65% - 75%
        };
      }),
      ammonia_data: Array.from({ length: 60 }, (_, i) => {
        const date = new Date(2025, 0, 1 + i);
        return {
          datetime: date.toISOString().split("T")[0],
          value: Math.random() * 2 + 4, // Amonia antara 4 ppm - 6 ppm
        };
      }),
      light_intensity_data: Array.from({ length: 60 }, (_, i) => {
        const date = new Date(2025, 0, 1 + i);
        return {
          datetime: date.toISOString().split("T")[0],
          value: Math.random() * 300 + 900, // Intensitas cahaya antara 900 lux - 1200 lux
        };
      }),
    },
  };

  const filterDataByDate = (data) => {
    if (!startDate || !endDate) return data;
    const start = new Date(startDate);
    const end = new Date(endDate);
    return data.filter((d) => {
      const date = new Date(d.datetime);
      return date >= start && date <= end;
    });
  };

  const generateChartData = (label, data = []) => {
    const filteredData = filterDataByDate(data);
    return {
      labels: filteredData.map((d) => d.datetime || "Unknown"),
      datasets: [
        {
          label: label,
          data: filteredData.map((d) => d.value || 0),
          fill: false,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.1,
        },
      ],
    };
  };

  if (!farm) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-6 md:p-12 mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Farm Information */}
          <div className="bg-white rounded-lg mb-8">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 space-y-6">
                  <h1 className="text-3xl font-bold text-gray-800">{farm.name}</h1>
                  <div>
                    <h2 className="text-xl font-semibold text-green mb-2">Deskripsi</h2>
                    <p className="text-gray-600">{farm.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <InfoItem label="Panjang Kandang" value={`${farm.pan_length} Meter`} />
                    <InfoItem label="Lebar Kandang" value={`${farm.pan_width} Meter`} />
                    <InfoItem label="Tinggi Kandang" value={`${farm.pan_height} Meter`} />
                    <InfoItem label="Kapasitas Kandang" value={`${farm.capacity} Kepala`} />
                  </div>
                  <InfoItem label="Lokasi Kandang" value={farm.location} />
                  <div className="flex items-center space-x-1">
                    <User className="text-green" size={24} />
                    <span className="font-semibold">{farm.user?.fullname || "Tidak ada data user"}</span>
                  </div>
                  <Link href="/wa">
                    <button className="w-full text-white bg-green hover:bg-HoverGreen mt-2 px-6 py-3 rounded-md font-semibold transition duration-300">
                      Hubungi: {farm.user?.phone_number || "Tidak ada data phone number"}
                    </button>
                  </Link>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={farm.image || "https://placehold.co/600x400"}
                    alt="farm"
                    className="rounded-lg w-full h-full object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sensor Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-green mb-4">Informasi Sensor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SensorItem icon={<Thermometer className="text-red-500" size={24} />} label="Suhu :" value={farm.iot_sensors?.temperature || "-"} />
              <SensorItem icon={<Droplets className="text-blue-500" size={24} />} label="Kelembapan :" value={farm.iot_sensors?.humidity || "-"} />
              <SensorItem icon={<Wind className="text-green-500" size={24} />} label="Amonia :" value={farm.iot_sensors?.ammonia || "-"} />
              <SensorItem icon={<Sun className="text-yellow-500" size={24} />} label="Intensitas Cahaya :" value={farm.iot_sensors?.light_intensity || "-"} />
            </div>
          </div>

          {/* Date Filters */}
          <div className="rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-green mb-4 flex items-center">
          <CalendarIcon className="mr-2 h-6 w-6 text-green" />
          Filter Data
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-green font-semibold mb-2">Tanggal Mulai</label>
          <div className="relative">
            <input
              type="date"
              className="w-full border-green rounded-lg shadow-sm focus:border-green focus:ring focus:ring-green focus:ring-opacity-50 pl-10 pr-4 py-2 text-green"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green" />
          </div>
        </div>
        <div>
          <label className="block text-green font-semibold mb-2">Tanggal Akhir</label>
          <div className="relative">
            <input
              type="date"
              className="w-full border-green rounded-lg shadow-sm focus:border-green focus:ring focus:ring-green focus:ring-opacity-50 pl-10 pr-4 py-2 text-green"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green" />
          </div>
        </div>
      </div>
    </div>

          {/* Sensor Charts */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-green mb-4">Grafik Sensor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LineChart title="Suhu" data={generateChartData("Suhu", farm.iot_sensors?.temperature_data || [])} />
              <LineChart title="Kelembapan" data={generateChartData("Kelembapan", farm.iot_sensors?.humidity_data || [])} />
              <LineChart title="Amonia" data={generateChartData("Amonia", farm.iot_sensors?.ammonia_data || [])} />
              <LineChart title="Intensitas Cahaya" data={generateChartData("Intensitas Cahaya", farm.iot_sensors?.light_intensity_data || [])} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-green font-semibold">{label}</p>
    <p className="text-gray-800">{value}</p>
  </div>
);

const SensorItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow">
    {icon}
    <div>
      <p className="text-gray-600 font-semibold">{label}</p>
      <p className="text-gray-800 font-bold">{value}</p>
    </div>
  </div>
);

const LineChart = ({ title, data }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <div className="h-64">
      <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  </div>
);

export default DetailTernak;
