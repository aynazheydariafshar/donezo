import React from "react";

export default function HomePage() {
  return (
    <div className="h-screen bg-minimal-gradient">
      <div className="fixed top-0 left-0 transform rotate-[80deg]">
        <div className="absolute opacity-5 w-wave h-wave ml-wave-left mt-wave-top rounded-wave animate-rotate bg-white"></div>
      </div>
      <div className="fixed top-0 left-0 transform rotate-[80deg]">
        <div className="absolute opacity-10 w-wave h-wave ml-wave-left mt-wave-top rounded-wave animate-rotate-fast bg-white"></div>
      </div>
      <div className="flex justify-center items-center pt-40 px-11">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="text-6xl text-white">Welcome to Donezo</h1>
          <h2 className="text-4xl p-2 bg-white bg-opacity-40 rounded-lg">
            Every Goal is a Donezo
          </h2>
          <p className="text-white text-xl text-center max-w-[65vw]">
            At Donezo, every task, project, or goal is just a step away from
            being accomplished. Whether you are aiming to complete a small task
            or achieve a major milestone, Donezo helps you start, stay on track,
            and finish strong.
          </p>
          <button>test</button>
        </div>
      </div>
    </div>
  );
}
