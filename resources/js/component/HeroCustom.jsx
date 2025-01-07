import React from "react";
import hero from '../../../public/images/hero.png'


const HeroCustom = ({name}) => {
    return (
        <div className="relative -mt-[180px] md:-mt-[100px]">
            <img src={hero} alt="hero" className="object-cover w-full md:h-[25em] h-[30em] absolute" />
            <div className="bannerContent flex flex-col items-center justify-center z-10 relative font-bold md:mt-10  font-spaceGrotesk text-center">
                <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl md:pt-[200px] pt-[285px] text-white mb-2">
                    {name}
                </h1>
            </div>
        </div>
    );
};

export default HeroCustom;