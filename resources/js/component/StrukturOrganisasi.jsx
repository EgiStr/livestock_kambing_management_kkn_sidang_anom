import React from "react";
import Image from '../../../public/images/userNotFound.png'

const StokPage = () => {
  return (
    <div className="min-h-screen bg-green flex flex-col items-center mt-[150px] p-[30px] pb-20">
      {/* Title Section */}
      <div className="text-center text-white mb-20">
        <h1 className="text-3xl font-bold mt-3">STOK</h1>
        <p className="text-lg font-semibold">
          Struktur Organisasi dan Tata Kerja Desa Sindang Anom
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex items-center justify-center">
        <div className="flex flex-cols-2 md:flex-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-10 text-center">
            <img
              src={Image} 
              className="w-24 h-24 mx-auto rounded-full mb-4"/>
            <h2 className="font-bold text-lg">
              Prof. Dr. I Nyoman Pugeg Aryantha
            </h2>
            <p className="font-bold mt-3 text-xl text-HoverGreen">Kepala Desa</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 items-center justify-center mt-10">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-10 text-center w-full md:w-auto">
            <img
            src={Image}
            alt="Kepala Desa"
            className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="font-bold text-lg">Prof. Dr. I Nyoman Pugeg Aryantha</h2>
            <p className="font-bold mt-3 text-xl text-HoverGreen">Kepala Desa</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-10 text-center w-full md:w-auto">
            <img
            src={Image}
            alt="Kepala Desa"
            className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="font-bold text-lg">Prof. Dr. I Nyoman Pugeg Aryantha</h2>
            <p className="font-bold mt-3 text-xl text-HoverGreen">Kepala Desa</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-10 text-center w-full md:w-auto">
            <img
            src={Image}
            alt="Kepala Desa"
            className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="font-bold text-lg">Prof. Dr. I Nyoman Pugeg Aryantha</h2>
            <p className="font-bold mt-3 text-xl text-HoverGreen">Kepala Desa</p>
        </div>
      </div>
    </div>
  );
};

export default StokPage;
