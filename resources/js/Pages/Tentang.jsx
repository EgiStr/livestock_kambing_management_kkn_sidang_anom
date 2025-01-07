import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Navbar from "../component/Navbar";
import HeroCustom from "../component/HeroCustom";
import Layout from "../Layouts/Layout";


const About = () => {
  return (
    <>
      <Navbar/>
      <HeroCustom name="Tentang Desa Sindang Anom"/>
      <Layout>
      <div className="bg-white flex justify-center">
        <div className="container px-5 md:px-[150px]">
          {/* Title Section */}
          <div className="text-justify mb-8 mt-[150px]">
            <h1 className="text-xl md:text-4xl font-bold text-green">
              Tentang Desa Sindang Anom
            </h1>
          </div>

          {/* Description Section */}
          <div className="text-gray-700 text-base leading-relaxed">
            <p className="text-justify">
              Pusat Inovasi ITERA berkomitmen untuk menghadirkan berbagai
              program unggulan yang dirancang khusus untuk memfasilitasi dan
              mendukung pengembangan ide-ide kreatif serta inovatif. Dengan
              fokus pada inovasi, kami berupaya menciptakan lingkungan yang
              kondusif bagi lahirnya solusi-solusi terobosan. Kami bertekad
              untuk membangun ekosistem inovasi yang berkelanjutan melalui
              pelaksanaan tugas pokok kami serta pilar-pilar pembangunan yang
              kokoh dan saling berhubungan. Dalam upaya ini, kami memberikan
              dukungan penuh terhadap munculnya ide-ide brilian serta solusi
              nyata yang dapat memberikan manfaat langsung kepada masyarakat.
              Dengan semangat kolaborasi dan kreativitas, ayo bersama-sama kita
              mengembangkan dan mewujudkan ide-ide yang akan membawa perubahan
              positif dan menciptakan dampak yang signifikan. Mari berinovasi
              dan menjadikan dunia tempat yang lebih baik melalui solusi yang
              inovatif dan berkelanjutan.
            </p>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default About;