import React from "react";
import Vid from "../assets/vid.mp4";
import dahon from "../assets/dahon.png"

const Hero = () => {
  return (
    <div className="  bg-[#175E17] h-[570px] ">
      <div className="w-[800px]  translate-x-[100px] translate-y-[120px]">
        <h1 className="text-[30px] text-[#fffdfd] font-bold mb-9">
          Healthy Habits Start Young! Little munchkins savoring the crunchy
          goodness of Lola Ofre's Talbos ng Kamote Chips – a tasty and healthy
          treat!"
        </h1>

        <p className="text-[20px] text-[#fffdfd] font-bold z-0">
          {" "}
          Encourage a lifetime of wellness with "Healthy Habits Start Young!"
          Watch as little munchkins delight in the wholesome crunch of Lola
          Ofre's Talbos ng Kamote Chips—a delicious and nutritious treat that
          paves the way for a lifetime of smart snacking and well-being.
        </p>
      </div>
      <div className="translate-y-[-160px]">
        <video
          className="w-[700px] translate-x-[1000px] rounded-[20px]"
          controls
        >
          <source src={Vid} type="video/mp4"></source>
          
        </video>
      </div>
      <img src={dahon} className="translate-y-[-300px] transition-transform transform hover:scale-110 w-[350px] z-10" alt="" />
      <img src={dahon} className='w-[300px] translate-x-[1600px] transition-transform  hover:scale-110  translate-y-[-900px] transform rotate-180' alt="" />
    </div>
  );
};

export default Hero;
