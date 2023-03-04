import Head from "next/head";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import Card from "./components/card";
import Search from "./components/search";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
      </Head>
      <div className="w-full flex justify-between">
        <Sidebar
          name="Sarthak S Kumar"
          designation="Student"
          profile_img="./vercel.svg"
        />
        <div className="w-full mx-12 my-8">
          <div className="flex flex-wrap justify-between">
            <div>
              <span className="text-gray-400 text-md">Assert Admin &#62;</span>
              <span className="text-gray-700 font-semibold">
                Manage Categories
              </span>
            </div>
            <button className="text-white font-semibold text-md bg-purple-600 px-3 py-1 rounded-md my-2">
              <i class="uil uil-plus"></i> Add Category
            </button>
          </div>
          <div className="flex w-full justify-between my-4 flex-wrap align-middle">
            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Finance
            </span>
            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Electronics
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Media and Communication
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Software Services
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Human Resource
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Marketing
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Construction
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Teaching
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Business Development
            </span>
          </div>
          <div className="flex flex-wrap justify-between align-middle my-6">
            <span className="text-purple-700 font-bold">
              Certificates under the category
            </span>
            <Search />
          </div>
          <div className="flex flex-wrap justify-around my-6">
            <Card titleMain={"Accounts Finance"} number={7} />
            <Card titleMain={"Taxation Finance"} number={7} />
            <Card titleMain={"Finance"} number={7} />
            <Card titleMain={"Financial Market"} number={7} />
          </div>
        </div>
      </div>
    </div>
  );
}
