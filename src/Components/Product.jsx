import React from "react";
import Vid from "../assets/vid.mp4";
import dahon from "../assets/dahon.png";
import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";
import pic5 from "../assets/5.jpg";
import pic6 from "../assets/6.jpg";
import pic7 from "../assets/7.jpg";
import pic8 from "../assets/8.jpg";
import pic9 from "../assets/9.jpg";
import pic10 from "../assets/10.png";
import pic11 from "../assets/11.jpg";
import pic12 from "../assets/12.jpg";

const Product = () => {
  return (
    <div className="   bg-[#ECF87F] h-[800px] p-[100px] ">
      <div className="grid grid-cols-6 gap-4  ">
        <img
          className="h-[300px] transition-transform transform hover:scale-110 w-[300px] object-cover  rounded-lg"
          src={pic1}
          alt=""
        />

        <img 
          className="h-[300px] transition-transform transform hover:scale-110 w-[300px] object-cover rounded-lg"
          src={pic2}
          alt=""
        />

        <img
          className="h-[300px] transition-transform transform hover:scale-110 w-[300px] object-cover  rounded-lg"
          src={pic3}
          alt=""
        />

        <img
          className="h-[300px] transition-transform transform hover:scale-110 w-[300px] object-cover  rounded-lg"
          src={pic4}
          alt=""
        />

        <img
          className="h-[300px] transition-transform transform hover:scale-110 w-[300px] object-cover  rounded-lg"
          src={pic5}
          alt=""
        />

        <img
          className="h-[300px] transition-transform transform hover:scale-110 w-[300px] object-cover  rounded-lg"
          src={pic6}
          alt=""
        />

        <img
          className="h-[300px] transition-transform transform hover:scale-110 w-[300px] object-cover  rounded-lg"
          src={pic7}
          alt=""
        />
        <img
          className="h-[300px] transition-transform transform hover:scale-110 w-[300px] object-cover  rounded-lg"
          src={pic8}
          alt=""
        />
        <img
          className="h-[300px] transition-transform transform hover:scale-110 w-[300px] object-cover  rounded-lg"
          src={pic9}
          alt=""
        />
        <img
          className="h-[300px] transition-transform transform hover:scale-110 w-[300px]  object-cover  rounded-lg"
          src={pic10}
          alt=""
        />
        <img
          className="h-[300px] transition-transform transform hover:scale-110 w-[300px] object-cover  rounded-lg"
          src={pic11}
          alt=""
        />
        <img
          className="h-[300px] transition-transform transform hover:scale-110 w-[300px] object-cover  rounded-lg"
          src={pic12}
          alt=""
        />
      </div>
      <img src={dahon} className="w-[300px] transition-transform transform hover:scale-110 translate-x-[-100px] translate-y-[-20px]"  alt="" />
      <img src={dahon} className="w-[300px] transition-transform transform hover:scale-110 translate-x-[1500px] translate-y-[-200px]   rotate-180" alt="" />
    </div>
  );
};

export default Product;
