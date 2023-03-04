import React from "react";

const Card = (props) => {
  return (
    <div className="border-2 w-1/3 m-1 rounded-lg flex justify-center flex-wrap p-5">
      <p className="text-red-800 text-lg font-semibold my-2">{props.title}</p>
      <div class="container flex justify-center align-middle">
        <svg class="w-20 h-20 scale-150">
          <circle
            className="text-gray-300"
            strokeWidth="5"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
          />

          <circle
            className="text-blue-600"
            strokeWidth="5"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
          />
        </svg>
        <span
          className="relative top-6 right-16 text-xl text-blue-700"
          x-text="`${percent}%`"
        >
          {props.percent}
        </span>
      </div>
      <div className="flex flex-wrap justify-center w-full align-middle">
        <p className="w-1/2">
          <p className="text-blue-600 text-md font-semibold">{props.title1}</p>
          <button className=" bg-green-500 w-1/2 rounded-full p-2 text-white text-lg font-bold">
            {props.val1}
          </button>
        </p>
        <p className="w-1/2">
          <p className="">
            <p className="text-blue-600 text-md font-semibold">
              {props.title2}
            </p>
            <button className=" bg-green-500 w-1/2 rounded-full p-2 text-white text-lg font-bold">
              {props.val2}
            </button>
          </p>
        </p>
        <p className="w-full text-gray-400 text-sm">
          lorem ipsum dolor sit amet
        </p>
        <p className="w-1/2">
          <p className="">I am a title</p>
          <button className="border-blue-700 border-2 rounded-md p-2">
            I am a button
          </button>
        </p>
        <p className="w-1/2">
          <p className="">
            <p className="">I am a title</p>
            <button className="border-blue-700 border-2 rounded-md p-2">
              I am a button
            </button>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Card;
