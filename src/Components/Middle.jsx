import React from "react";

export default function Middle() {
  return (
    <section className="flex justify-between text-start mt-10 lg:items-center bg-blue-400 p-5 flex-col lg:flex-row items-start">
      <div>
        <p className="text-blue-900 font-semibold">Unified Dashboard</p>
        <h2 className="text-4xl text-green-900 font-extrabold w-[30rem] my-3">
          Customizable dashboard for all platforms.
        </h2>
        <p className="text-blue-900 w-96 my-3 md:w-[38rem] lg:w-96">
          Use Twitter and Instagram but not LinkedIn? You can customize your
          dashboard to your liking. You can even schedule the same post to
          individual platforms instead of all platforms.
        </p>
        <button className="bg-blue-900 text-white p-2 font-bold rounded-md hover:opacity-80">
          Start Scheduling
        </button>
      </div>
      <div>
        <p className="text-blue-900 font-semibold">Enhanced Analytics</p>
        <h2 className="text-4xl text-green-900 font-extrabold w-[30rem] my-3">
          Real-time data that tells you everything.
        </h2>
        <p className="text-blue-900 w-96 my-3 md:w-[38rem] lg:w-96">
          Get detailed reports of what's working and what isn't. Engagement
          rates, impression rates and much more data is available to you through
          our in-depth dashboard tools.
        </p>
        <a href="/" className="underline font-bold text-blue-900">
          Learn more
        </a>
      </div>
    </section>
  );
}
