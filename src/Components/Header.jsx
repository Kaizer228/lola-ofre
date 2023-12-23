import React from 'react';
import Logo from '../assets/logo.png'
import Leave from '../assets/dahon.png'

const Header = () => {
    return (
       
        <div className=" overflow-hidden sticky bg-[#175E17] h-[115px]">
        <img src={Leave} className=' transition-transform transform hover:scale-110 w-[200px]' alt="" />
        <img  src={Logo} alt="" className="w-[110px] absolute bottom-[3px] left-[500px] " />
        <ul className="flex gap-[70px] absolute left-[700px] top-9 text-xl text-white font-bold">
          <li className="my-1 hover:underline">
            <a href="">About</a>
          </li>
          <li className="my-1 hover:underline">
            <a href="">Product</a>
          </li>

          <li className="my-1 hover:underline">
            <a href="">Testimonials</a>
          </li>
          <li className="my-1 hover:underline">
            <a href="">Contact</a>
          </li>
          <button className="bg-[#cec836] rounded-full text-xl  h-21 w-40 p-2 font-extrabold  shadow-lg shadow-gray-500/50
           hover:bg-[#499a50]">
            Order Now
          </button>
        </ul>
        <img src={Leave} className='w-[200px] transition-transform   hover:scale-110 relative left-[1720px] bottom-[100px] transform rotate-180' alt="" />
        <img src={Leave} className='w-[200px] transition-transform   hover:scale-110 relative left-[150px] bottom-[260px] transform rotate-45' alt="" />
        <img src={Leave} className='w-[200px] transition-transform   hover:scale-110 relative left-[1450px] bottom-[350px] transform rotate-45' alt="" />
         <img src={Leave} className='w-[200px] transition-transform   hover:scale-110 relative left-[300px] bottom-[400px] transform rotate-90' alt="" />
      </div>
      
    );
};

export default Header;