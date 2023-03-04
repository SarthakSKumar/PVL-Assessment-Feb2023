import React from "react";

const Card = (props) => {
  return (
    <div className="m-2 rounded-lg bg-gray-100 p-4">
      <p className="w-full flex justify-between">
        <span className="text-gray-400 font-bold text-lg">Finance</span>
        <button className="text-gray-400 text-md">
          Know More <i class="uil uil-arrow-right"></i>
        </button>
      </p>
      <p className="w-3/4 flex justify-between my-2">
        <span className="text-blue-500 text-2xl font-bold">
          {props.titleMain}
        </span>
        <span className="text-green-600 text-2xl font-bold">
          {props.number}
        </span>
      </p>
      <button className="w-full bg-green-500 rounded-md font-semibold text-lg p-2 text-white my-1">
        Tag a Job
      </button>
      <button className="w-full border-purple-600 text-purple-600 border-2 rounded-md font-semibold my-2 text-lg p-2">
        Employees Enrolled &#62;
      </button>
      <button className="w-full bg-gray-300 p-2 text-gray-600 font-semibold">
        Assign Certificate
      </button>
    </div>
  );
};

export default Card;
