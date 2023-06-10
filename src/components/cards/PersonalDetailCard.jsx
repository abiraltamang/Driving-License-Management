import React from "react";

const PersonalDetailCard = () => {
  return (
    <div className="max-w-[300px] bg-gray-100 h-48 flex flex-col gap-3 items-center justify-center rounded-xl ">
      <img src="/team.png"  className="max-w-full h-[50px]"  alt="" />
      <p className="text-lg">Personal Details</p>
    </div>
  );
};


export default PersonalDetailCard

