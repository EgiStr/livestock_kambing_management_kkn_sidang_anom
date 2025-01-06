import { Link } from '@inertiajs/inertia-react';
import hero from '../../../public/images/hero.png'

const Hero = () => {
    return (
        <div className="bannerHome h-screen relative md:-mt-[120px]">
            <div className="overlay"></div>
            <img src={hero} alt="hero" className="object-cover w-full h-full absolute" />
            <div className="bannerContent z-10 relative font-bold mt-2 flex-row font-spaceGrotesk text-center">
                <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-white mb-2">
                Desa Sindang Anom
                </h1>
                <h1 className="text-sm mt-10 md:px-20 px-1 sm:text-xl md:text-2xl lg:text-2xl text-white italic font-plusJakarta">
                    “ Jl. Pasar Desa Sindang Anom, Kecamatan Sekampung Udik <br /> Kabupaten Lampung Timur, Provinsi Lampung,<br />
                    Kode Pos 34183 ”
                </h1>
                <Link href={"/peternakan"}>
                    <button className="mt-12 bg-green hover:bg-HoverGreen text-white px-6 py-2 rounded-full transition duration-200">
                        Lihat Semua Peternakan Desa Sindang Anom
                    </button>
                </Link> <br />
                <Link href={"/"}>
                    <button className="mt-3 bg-green hover:bg-HoverGreen text-white px-6 py-2 rounded-full transition duration-200">
                        Download Setifikat
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;