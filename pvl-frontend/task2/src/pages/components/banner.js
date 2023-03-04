import React from "react";

const Banner = (props) => {
  return (
    <div
      className={`transform hover:scale-110 cursor-pointer transition delay-100 w-1/4 p-2 py-4 shadow-xl border rounded-xl inline-block bg-${
        props.color ? props.color : "blue"
      }-500 h-32`}
    >
      <div className="flex justify-between"></div>
      <div className="flex justify-between">
        <p className="text-gray-200 text-sm font-bold">{props.title}</p>
        <i class={props.icon}></i>
      </div>
      <p className="text-gray-50 text-3xl font-bold ">{props.number}</p>
    </div>
  );
};

export default Banner;
