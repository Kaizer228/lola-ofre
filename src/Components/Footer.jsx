import React from "react";
import Logo from "../assets/logo.png";
import Fb from "../assets/facebook.png"
import yt from "../assets/youtube.png"
import tiktok from "../assets/tiktok.png"
import ig from "../assets/instagram.png"
import tw from "../assets/twitter.png"


function Footer() {
  return (
    <div className="m-auto flex-col  bg-[#175E17] justify-center h-[230px]  ">
      <hr className="border-[#ffff] h-[4px]" />
      <img src={Logo} className="w-[130px] translate-x-[893px] " alt="" />
      <h1 className="flex justify-center text-2xl text-[#fffdfd] font-bold">
        Follow us on
      </h1>

      <div className="flex justify-center gap-7 mt-3">
        <div className="flex gap-7">
          <img src={Fb} className="w-[35px] h-[35px]  " alt="Facebook" />
          <img src={yt} className="w-[35px] h-[35px]  " alt="YouTube" />
          <img src={tiktok} className="w-[35px] h-[35px]  " alt="TikTok" />
          <img src={ig} className="w-[35px] h-[35px]  " alt="TikTok" />
          <img src={tw} className="w-[35px] h-[35px]    rounded-2xl " alt="TikTok" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
