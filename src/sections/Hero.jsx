import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import CountUp from 'react-countup';

import { statistics } from "../constants";
import { Button } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container bg-[#1A1A1D]"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-[#CD1818]">
          Create Your Perfect Pair
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold relative text-white">
          <span className="xl:bg-[#1A1A1D] xl:whitespace-nowrap relative z-10 pr-10 rounded-3xl">
            Design Your Shoes
          </span>
          <br />
        </h1>
        <div className="relative mt-6">
          <span className="text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold relative text-white">
            <span className="text-[#CD1818] inline-block mt-3">3D</span> Shoe
            Customization
          </span>
          <div className="z-10 absolute top-[-25px] left-[-30px] xl:left-[-30px] w-max bg-[#CD1818] p-2 rounded-lg shadow-xl flex items-center gap-3 floating-animation">
            <BsStars className="w-6 h-6 text-white" />
            <span className="font-montserrat text-lg text-white font-semibold">
              AI Powered
            </span>
          </div>
        </div>
        <p className="font-montserrat text-[#CD1818] text-lg leading-8 mt-6 mb-14 sm:max-w-lg">
          Experience the future of footwear with our 3D design tool. Customize,
          create, and order your perfect pair today.
        </p>

        <div className="flex flex-row gap-4 justify-center items-center">
          <Button label="2D AI Assistance" iconURL={arrowRight} onClick={() => navigate("ai-page")} />
          <Button label="3D Modeling" iconURL={arrowRight} onClick={() => navigate("modal-page")} />
        </div>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold text-white">
                <CountUp start={0} end={parseInt(stat.value.replace(/[^\d]/g, ""))} duration={3} separator="," />
                {stat.value.replace(/[0-9]/g, "")}
              </p>
              <p className="leading-7 font-montserrat text-[#CD1818]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 glass-background bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
