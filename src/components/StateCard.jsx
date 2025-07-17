import { ChartColumn } from "lucide-react";
import React from "react";

const StateCard = ({ infos }) => {
  return (
    <div className="w-1/6 bg-white rounded-md shadow-sm shadow-[#5252525a] flex flex-row gap-5 justify-center items-center p-8">
      {infos.icon}

      <div>
        <h1 className="text-md text-gray-700 font-semibold">{infos.title}</h1>
        <p className="text-lg font-bold ">{infos.value}</p>
      </div>
    </div>
  );
};

export default StateCard;
