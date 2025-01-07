import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../Layouts/Layout";
import Hero from "../component/Hero";
import TentangHome from "../component/TentangHome";
import StokPage from "../component/StrukturOrganisasi";
import TernakHome from "../component/TernakHome";

const Home = () => {
  return (
    <>
        <Hero/>
        <Layout>
          <TentangHome/>
          <StokPage/>
          <TernakHome/>       
        </Layout>
    </>
    
  );
};

export default Home;
