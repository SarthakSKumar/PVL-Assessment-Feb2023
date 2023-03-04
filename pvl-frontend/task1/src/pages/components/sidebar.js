import React from "react";
import { useRef } from "react";
//import Script from "next/script";

const Sidebar = (props) => {
  const openSideBar = useRef(null);
  const closeSideBar = useRef(null);
  const sideBar = useRef(null);

  const sidebarHandler = (flag) => {
    if (flag) {
      sideBar.current.style.transform = "translateX(0px)";
      openSideBar.current.classList.add("hidden");
      closeSideBar.current.classList.remove("hidden");
    } else {
      sideBar.current.style.transform = "translateX(-260px)";
      closeSideBar.current.classList.add("hidden");
      openSideBar.current.classList.remove("hidden");
    }
  };

  return (
    <div className="inline-block">
      <div className="flex flex-no-wrap h-full">
        <div className="w-64 h-full bg-blue-900 shadow md:h-full flex-col justify-between hidden sm:flex">
          <div className="px-8">
            <ul className="mt-4">
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <span className="text-xl font-bold text-blue-400">
                  <i class="uil uil-user"></i> Admin Panel
                </span>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-clock"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Manage Categories
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-user-check"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Add Company
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-user-plus"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Add New User
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-file-shield-alt"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Add New Certificates
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-university"></i>
                  <span className="text-sm ml-3 font-semibold">
                    University Actions
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-book-reader"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Add Students
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-check-square"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Add MCQ Questions
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-file-network"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Recruiters and Jobs
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-backpack"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Universities
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-users-alt"></i>
                  <span className="text-sm ml-3 font-semibold">
                    View All Users
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-video-question"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Trial Version
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-browser"></i>
                  <span className="text-sm ml-3 font-semibold">Add Blogs</span>
                </a>
              </li>
            </ul>
            <div className="flex justify-between align-middle mt-48 mb-4 w-full">
              <img
                src="./vercel.svg"
                className="border-2 border-white bg-white rounded-full h-16 w-1/3 mr-2"
              />
              <div className="w-2/3 text-gray-300 font-semibold text-sm ml-3 mt-2">
                <span>{props.name}</span>
                <br />
                <span>{props.designation}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-64 z-40 absolute bg-blue-900 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out"
          id="mobile-nav"
          ref={sideBar}
        >
          <button
            aria-label="toggle sidebar"
            id="openSideBar"
            ref={openSideBar}
            className="h-10 w-10 bg-blue-900 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-offset-2 rounded focus:ring-gray-800"
            onClick={() => sidebarHandler(true)}
          >
            <i class="uil uil-line-spacing"></i>
          </button>
          <button
            aria-label="Close sidebar"
            id="closeSideBar"
            ref={closeSideBar}
            className="h-10 w-10 bg-blue-900 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white"
            onClick={() => sidebarHandler(false)}
          >
            <i class="uil uil-line-spacing"></i>
          </button>
          <div className="px-8">
            <ul className="mt-4">
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <span className="text-xl font-bold text-blue-400">
                  <i class="uil uil-user"></i> Admin Panel
                </span>
              </li>

              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-clock"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Manage Categories
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-user-check"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Add Company
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-user-plus"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Add New User
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-file-shield-alt"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Add New Certificates
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-university"></i>
                  <span className="text-sm ml-3 font-semibold">
                    University Actions
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center my-2 hover:bg-white hover:text-blue-800 p-2 rounded-lg">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-book-reader"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Add Students
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center hover:bg-white hover:text-blue-800 p-2 rounded-lg my-2">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-check-square"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Add MCQ Questions
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center hover:bg-white hover:text-blue-800 p-2 rounded-lg my-2">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-file-network"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Recruiters and Jobs
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center hover:bg-white hover:text-blue-800 p-2 rounded-lg my-2">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-backpack"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Universities
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center hover:bg-white hover:text-blue-800 p-2 rounded-lg my-2">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-users-alt"></i>
                  <span className="text-sm ml-3 font-semibold">
                    View All Users
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center hover:bg-white hover:text-blue-800 p-2 rounded-lg my-2">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-video-question"></i>
                  <span className="text-sm ml-3 font-semibold">
                    Trial Version
                  </span>
                </a>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center hover:bg-white hover:text-blue-800 p-2 rounded-lg my-2">
                <a
                  href="javascript:void(0)"
                  className="flex items-center focus:outline-none"
                >
                  <i class="uil uil-browser"></i>
                  <span className="text-sm ml-3 font-semibold">Add Blogs</span>
                </a>
              </li>
            </ul>
            <div className="flex justify-center mt-48 mb-4 w-full">
              <img
                src={props.profile_img}
                className="border-2 border-white bg-white rounded-full h-16 w-1/3 mr-2"
              />
              <div className="w-2/3 text-gray-300  text-sm ml-2 mt-2">
                <span className="font-bold">{props.name}</span>
                <br />
                <span className="font-normal">{props.designation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
