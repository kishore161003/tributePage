import React from "react";

const MainContent = () => {
  return (
    <div className="mt-16 pl-8 flex flex-col gap-6 z-20">
      <div className="flex flex-row max-lg:justify-center ">
        <h1 className="text-white text-4xl font-bold">VIRAT KOHLI</h1>
      </div>

      <div className="flex flex-row gap-20 max-md:flex-col max-md:gap-4 z-20 ">
        <div className="flex flex-col gap-3">
          <h1 className="text-gray-400 font-semibold text-md">Role</h1>
          <div>
            <p className="text-white text-2xl font-semibold lg:w-32">
              Top-order Batsmen
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-gray-400 font-semibold text-md">Age</h1>
          <div>
            <p className="text-white text-2xl font-semibold">35</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-gray-400 font-semibold text-md">Batting Style</h1>
          <div className="flex flex-row gap-2">
            <p className="text-white text-2xl font-semibold mt-1">RHB</p>
            <img src="/image.png" width={40} height={40} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 fill-fuchsia-500 -ml-2"
            >
              <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 0 1 2.25 0v10.937a4.505 4.505 0 0 0-3.25 2.373 8.963 8.963 0 0 1 4-.935A.75.75 0 0 0 18 15v-2.266a3.368 3.368 0 0 1 .988-2.37 1.125 1.125 0 0 1 1.591 1.59 1.118 1.118 0 0 0-.329.79v3.006h-.005a6 6 0 0 1-1.752 4.007l-1.736 1.736a6 6 0 0 1-4.242 1.757H10.5a7.5 7.5 0 0 1-7.5-7.5V6.375a1.125 1.125 0 0 1 2.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 0 1 2.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-gray-400 font-semibold text-md">Bowling Style</h1>
          <div className="flex flex-row gap-2">
            <div>
              <p className="text-white text-2xl font-semibold lg:w-32">
                Right-arm Medium
              </p>
            </div>
            <img src="/image.png" className="h-10 " />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 fill-fuchsia-500 -ml-2 -mt-6"
            >
              <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 0 1 2.25 0v10.937a4.505 4.505 0 0 0-3.25 2.373 8.963 8.963 0 0 1 4-.935A.75.75 0 0 0 18 15v-2.266a3.368 3.368 0 0 1 .988-2.37 1.125 1.125 0 0 1 1.591 1.59 1.118 1.118 0 0 0-.329.79v3.006h-.005a6 6 0 0 1-1.752 4.007l-1.736 1.736a6 6 0 0 1-4.242 1.757H10.5a7.5 7.5 0 0 1-7.5-7.5V6.375a1.125 1.125 0 0 1 2.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 0 1 2.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 z-20">
        <h1 className="text-gray-400 font-semibold text-md">Teams</h1>
        <div className="grid grid-cols-4 gap-x-20 gap-y-4 max-lg:grid-cols-2 max-lg:gap-x-10 ">
          <div className="flex flex-row gap-4 mb-5">
            <img src="flag-for-flag-india-svgrepo-com.png" className="h-10" />
            <p className="text-white text-2xl font-semibold mt-1">India</p>
          </div>
          <div className="flex flex-row gap-4">
            <img src="/313301.logo.webp" className="h-10 -ml-2" />
            <p className="text-white text-2xl font-semibold mt-1">Delhi</p>
          </div>
          <div className="flex flex-row gap-4">
            <img src="flag-for-flag-india-svgrepo-com.png" className="h-10" />
            <p className="text-white text-2xl font-semibold mt-1">India A</p>
          </div>
          <div className="flex flex-row gap-4">
            <img
              src="/417-4175849_royal-challengers-bangalore-new-logo-hd-png-download-removebg-preview.png"
              className="h-10 "
            />
            <p className="text-white text-2xl font-semibold mt-1">RCB</p>
          </div>
          <div className="flex flex-row gap-4">
            <img src="/Cricket_India_Crest.svg.png" className="h-10" />
            <div className="flex flex-col -mt-3">
              <p className="text-white text-2xl font-semibold mt-1">India</p>
              <p className="text-white text-2xl font-semibold mt-1">Blue</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <img src="/313301.logo.webp" className="h-10 -ml-2" />
            <p className="text-white text-2xl font-semibold mt-1">North Zone</p>
          </div>
          <div className="flex flex-row gap-4">
            <img src="flag-for-flag-india-svgrepo-com.png" className="h-10 " />
            <p className="text-white text-2xl font-semibold mt-1">Under 19</p>
          </div>
          <div className="flex flex-row gap-4 md:-ml-8">
            <img src="/Cricket_India_Crest.svg.png" className="h-10" />
            <div className="flex flex-col ">
              <p className="text-white text-2xl font-semibold mt-1">
                India Red
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
