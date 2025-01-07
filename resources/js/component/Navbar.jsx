import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Menu, X } from "react-feather";
import Logo from '../../../public/images/Logo.png'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar md:px-[150px] px-6 flex justify-center transition-all duration-300 fixed top-0 left-0 right-0 z-50 py-3">
      <div className="rounded-full px-4 md:pr-3 md:pl-4 py-2 flex items-center justify-between max-w-7xl w-full bg-white shadow">
        {/* Logo */}
        <div className="flex items-center">
          <Link href={"/"}> 
            <img src={Logo} alt="Logo" className="h-8 md:h-11" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden font-semibold lg:flex items-center space-x-8 xl:space-x-16">
          <Link href={"/"} className="text-black hover:text-gray-600 transition duration-200">
            Beranda
          </Link>
          <Link href={"/tentang"} className="text-black hover:text-gray-600 transition duration-200">
            Tentang
          </Link>
          <Link href={"/peternakan"} className="text-black hover:text-gray-600 transition duration-200">
            Peternakan
          </Link>
          <Link href={"/profil"} className="text-black hover:text-gray-600 transition duration-200">
            Profil Pemilik Ternak
          </Link>
        </div>

        {/* Tombol Login */}
        <div className="hidden lg:flex">
          <Link href={"/admin"}>
            <button className="bg-green hover:bg-HoverGreen text-white px-6 py-2 rounded-full transition duration-200">
              Masuk
            </button>
          </Link>
        </div>

        {/* Tombol Mobile Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute left-0 right-0 top-full bg-white shadow-md overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link href={"/"} className="text-black hover:text-gray-600 transition duration-200">
            Beranda
          </Link>
          <Link href={"/tentang"} className="text-black hover:text-gray-600 transition duration-200">
            Tentang
          </Link>
          <Link href={"/peternakan"} className="text-black hover:text-gray-600 transition duration-200">
            Peternakan
          </Link>
          <Link href={"/profil"} className="text-black hover:text-gray-600 transition duration-200">
            Profil Pemilik Ternak
          </Link>
          <Link href={"/admin"}>
            <button className="bg-green hover:bg-HoverGreen text-white px-4 py-2 rounded-full transition duration-200">
              Masuk
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
