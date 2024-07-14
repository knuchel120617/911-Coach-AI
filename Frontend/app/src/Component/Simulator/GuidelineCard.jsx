import React from "react";
import SparklesIcon from "@mui/icons-material/Stars";

const GuidelineCard = ({ guidelines }) => {
  return (
    <div className="flex items-start my-4 max-w-lg sm:w-full sm:max-w-none md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto md:p-6 lg:p-8">
      <div className="flex items-start">
        <div>
          <SparklesIcon className="mr-2 text-[#009379]" />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg ml-2 shadow-md">
          <h3 className="font-semibold mb-2">Guidelines:</h3>
          <p>{guidelines}</p>
        </div>
      </div>
    </div>
  );
};

export default GuidelineCard;
