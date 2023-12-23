import React from "react";
import marc from "../assets/M.jpg";

const Feedback = () => {
  return (
    <div className=" overflow-hidden p-[50px]   flex justify-center space-x-8 sticky bg-[#175E17] h-[420px]">
      <div className="transform hover:scale-110 max-w-sm rounded overflow-hidden h-[320px] shadow-lg bg-white">
        <img
          src={marc}
          alt="Chameleon"
          className="w-[250px] h-[200px] rounded-lg object-cover"
        />
        <div className="px-6 py-4 bg-[#41f54d] w-[250px] overflow-y-auto max-h-[120px]">
          <div className="font-bold text-xl mb-2">Marc Martinez</div>
          <p className="text-gray-700 text-base">
            "Talbos ng Kamote Chips are my energizing guilty pleasure. The
            natural sweetness and crunch make every bite a delight!"
          </p>
        </div>
      </div>

      <div className="transform hover:scale-110 max-w-sm rounded overflow-hidden h-[320px] shadow-lg bg-white">
        <img
          src={marc}
          alt="Chameleon"
          className="w-[250px] h-[200px] rounded-lg object-cover"
        />
        <div className="px-6 py-4 bg-[#41f54d] w-[250px] overflow-y-auto max-h-[120px]">
          <div className="font-bold text-xl mb-2">Marc Erman Martinez</div>
          <p className="text-gray-700 text-base">
          "Talbos ng Kamote Chips are my guilt-free addiction. The unique blend of flavors, with the natural sweetness of kamote 
          and the crispiness of the chips, creates a snack that I find utterly irresistible!"
          </p>
        </div>
      </div>

      <div className="transform hover:scale-110 max-w-sm rounded overflow-hidden h-[320px] shadow-lg bg-white">
        <img
          src={marc}
          alt="Chameleon"
          className="w-[250px] h-[200px] rounded-lg object-cover"
        />
        <div className="px-6 py-4 bg-[#41f54d] w-[250px] overflow-y-auto max-h-[120px]">
          <div className="font-bold text-xl mb-2">Marc Dela Cruz</div>
          <p className="text-gray-700 text-base">
         "Savoring the goodness of Talbos ng Kamote Chips is my guilt-free escape.
          The wholesome taste and crispy perfection make these chips an irresistible treat for any time of the day."
          </p>
        </div>
      </div>

      <div className="transform hover:scale-110 max-w-sm rounded overflow-hidden h-[320px] shadow-lg bg-white">
        <img
          src={marc}
          alt="Chameleon"
          className="w-[250px] h-[200px] rounded-lg object-cover"
        />
        <div className="px-6 py-4 bg-[#41f54d] w-[250px] overflow-y-auto max-h-[120px]">
          <div className="font-bold text-xl mb-2">Marc Martinez Dela Cruz</div>
          <p className="text-gray-700 text-base">
          "Crunching on Talbos ng Kamote Chips is my guilt-free pleasure. The unique blend of flavors, from the earthy kamote 
          to the satisfying crunch, creates a snack that I can't get enough of."
          </p>
        </div>
      </div>
      <div className="transform hover:scale-110 max-w-sm rounded overflow-hidden h-[320px] shadow-lg bg-white">
        <img
          src={marc}
          alt="Chameleon"
          className="w-[250px] h-[200px] rounded-lg object-cover"
        />
        <div className="px-6 py-4 bg-[#41f54d] w-[250px] overflow-y-auto max-h-[120px]">
          <div className="font-bold text-xl mb-2">Marc Dela Cruz Martinez</div>
          <p className="text-gray-700 text-base">
          "Talbos ng Kamote Chips are my guilt-free delight. The natural sweetness and crispy
           texture make them a wholesome and satisfying snack!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
