import React from "react";

const Landing = () => {
  return (
    <section className="text-white h-4/5 p-10 flex flex-col items-center justify-around text-center">
      <h1 className="text-8xl font-normal tracking-wider text-or-primary select-none">
        Vocal.
      </h1>
      <h3 className="text-2xl w-1/4 leading-normal">
        A cloud based music streaming platform for growing artists and avid
        music listeners. <br /> <br /> We also provide profanity filtering on
        comments and song recommendation using AI models.
      </h3>
      <div className="flex w-4/5 justify-between">
        <div className="w-1/5 flex flex-col items-center gap-2 bg-white rounded-lg px-7 py-5 text-primary-main shadow-sm hover:scale-105 hover:shadow-md transition-all select-none">
          <h2 className="font-semibold text-xl">Artist friendly</h2>
          <div className="w-1/5 h-[2px] rounded-md bg-primary-main"></div>
          <p>Vocal provides features that help artists grow their following</p>
        </div>
        <div className="w-1/5 flex flex-col items-center gap-2 bg-white rounded-lg px-7 py-5 text-primary-main shadow-sm hover:scale-105 hover:shadow-md transition-all select-none">
          <h2 className="font-semibold text-xl">User experience</h2>
          <div className="w-1/5 h-[2px] rounded-md bg-primary-main"></div>
          <p>Our various AI models help improve the user experience</p>
        </div>
        <div className="w-1/5 flex flex-col items-center gap-2 bg-white rounded-lg px-7 py-5 text-primary-main shadow-sm hover:scale-105 hover:shadow-md transition-all select-none">
          <h2 className="font-semibold text-xl">Cloud powered</h2>
          <div className="w-1/5 h-[2px] rounded-md bg-primary-main"></div>
          <p>The backend of Vocal is built on the cloud using AWS Amplify</p>
        </div>
        <div className="w-1/5 flex flex-col items-center gap-2 bg-white rounded-lg px-7 py-5 text-primary-main shadow-sm hover:scale-105 hover:shadow-md transition-all select-none">
          <h2 className="font-semibold text-xl">Audio streaming</h2>
          <div className="w-1/5 h-[2px] rounded-md bg-primary-main"></div>
          <p>Cloud allows us to help stream music in its highest quality</p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
