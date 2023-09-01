import React from "react";
import checkmark from "../../Assets/Checkmark.svg";

export default function PriceFeature() {
  return (
    <>
      <h1 className="font-bold text-6xl">Flexible Plans for Everyone</h1>
      <p className="mt-2 md:w-[41rem] mx-auto text-blue-900">
        Our plans are made for everyone. Whether you're just starting out on
        social media, or have been on there for a long time, we have a plan
        that's right for you.
      </p>
      <section className="flex items-center justify-center mt-2 gap-2">
        <p className="font-semibold text-gray-700">Billed Monthly</p>
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
          <input
            type="checkbox"
            className="absolute block top-[.15rem] left-[.20rem] w-5 h-5 rounded-full bg-white border-4 border-white appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="block overflow-hidden h-6 rounded-full bg-blue-700 cursor-pointer"
          ></label>
        </div>

        <p className="text-gray-700 font-medium">Billed Yearly</p>
      </section>

      <section className="mx-auto max-w-7xl mt-4 flex gap-8 justify-center items-center flex-col md:flex-row md:flex-wrap">
        <div className=" border-gray-200 border-solid border-2 p-7 w-80">
          <p className="text-start my-2">
            <span className="font-bold text-4xl">$4</span>/mo
          </p>
          <p className="my-1 text-start">
            Perfect plan if you're just starting out
          </p>
          <hr />
          <div className="mt-2 my-2">
            <div className="flex items-center gap-4 my-1">
              <img src={checkmark} alt="" className="w-5" />
              <p>LinkedIn Integration</p>
            </div>
            <div className="flex items-center gap-4 my-1">
              <img src={checkmark} alt="" className="w-5" />
              <p>Twitter Integration</p>
            </div>
            <div className="flex items-center gap-4 my-1">
              <img src={checkmark} alt="" className="w-5" />
              <p>Real-time Analytics</p>
            </div>
          </div>
          <button className="bg-blue-900 p-2 text-white rounded-md w-full mt-2">
            Subscribe Now
          </button>
        </div>
        <div className=" border-gray-200 border-solid border-2 p-7 w-80">
          <p className="text-start my-2">
            <span className="font-bold text-4xl">$12</span>/mo
          </p>
          <p className="my-1 text-start">
            Perfect plan if you're a heavy user of social media
          </p>
          <hr />
          <div className="mt-2 my-4">
            <div className="flex items-center gap-4 my-2">
              <img src={checkmark} alt="" className="w-5" />
              <p>LinkedIn Integration</p>
            </div>
            <div className="flex items-center gap-4 my-2">
              <img src={checkmark} alt="" className="w-5" />
              <p>Twitter Integration</p>
            </div>
            <div className="flex items-center gap-4 my-2">
              <img src={checkmark} alt="" className="w-5" />
              <p>Instagram Integration</p>
            </div>
            <div className="flex items-center gap-4 my-2">
              <img src={checkmark} alt="" className="w-5" />
              <p>Real-time Analytics</p>
            </div>
          </div>
          <button className="bg-blue-900 p-2 text-white rounded-md w-full mt-2">
            Subscribe Now
          </button>
        </div>
        <div className=" border-gray-200 border-solid border-2 p-7 w-80">
          <p className="text-start my-2">
            <span className="font-bold text-4xl">$7</span>/mo
          </p>
          <p className="my-1 text-start">
            Perfect plan if you're just starting out
          </p>
          <hr />
          <div className="mt-2 my-2">
            <div className="flex items-center gap-4 my-1">
              <img src={checkmark} alt="" className="w-5" />
              <p>LinkedIn Integration</p>
            </div>
            <div className="flex items-center gap-4 my-1">
              <img src={checkmark} alt="" className="w-5" />
              <p>Twitter Integration</p>
            </div>
          </div>
          <button className="bg-blue-900 p-2 text-white rounded-md w-full mt-2">
            Subscribe Now
          </button>
        </div>
      </section>
    </>
  );
}
