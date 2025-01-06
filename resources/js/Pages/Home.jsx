import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../Layouts/Layout";
import Hero from "../component/Hero";
import TentangHome from "../component/TentangHome";
import StokPage from "../component/StrukturOrganisasi";
import TernalHome from "../component/TernakHome";

const Home = () => {
  return (
    <>
        <Hero/>
        <Layout>
          <TentangHome/>
          <StokPage/>
          <TernalHome/>       
        </Layout>
    </>
    
  );
};

export default Home;
