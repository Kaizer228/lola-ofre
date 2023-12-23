import React from 'react';
import Hand from '../assets/bg.png'
import dahon from '../assets/dahon.png'
import bg from '../assets/g.png'
import bgg from '../assets/bgg.png'

const Hero = () => {
    return (
       
        <div className="overflow-hidden  bg-cover   h-[570px]" 
        style={{ backgroundImage: `url(${bgg})` }}>
      
         <h1 className='overflow-hidden  text-[70px] text-[#ffffff] font-bold translate-x-[800px] translate-y-[100px]'>Snack smart, snack right!</h1>
         <h1 className='overflow-hidden  text-[30px] text-[#ffffff] font-bold text-center translate-x-[260px] translate-y-[100px]'>Discover the goodness of nature in every bite.</h1>
         <button className=" overflow-hidden hover:bg-[#cec836]  bg-[#007500] translate-x-[1130px] translate-y-[150px] rounded-full text-xl text-white  h-21 w-40 p-4 font-extrabold  shadow-lg shadow-gray-500/50hover:bg-[#007500]">
           Learn More
          </button>
        <img src={Hand} className='w-[600px] transition-transform transform hover:scale-110 z-10 relative bottom-[410px] left-[200px]' alt="" />
        <img src={bg} className='w-[600px] z-0 transition-transform transform hover:scale-110 relative bottom-[985px] left-[200px]' alt="" />
        <img src={dahon} className='w-[400px] z-20 transition-transform transform hover:scale-110 relative bottom-[1150px] ' alt="" />

       
       
     
      </div>
      
    );
};

export default Hero;