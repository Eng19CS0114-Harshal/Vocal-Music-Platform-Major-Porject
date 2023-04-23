import React from "react";

const Loader = () => {
  return (
    <div className="z-30 fixed w-screen h-screen bg-primary-main flex flex-col gap-10 items-center justify-center">
      <h1 className="text-xl md:text-3xl tracking-wider">LOADING</h1>
      <div className="flex items-center gap-5">
        <div className="note note1 bg-or-primary"></div>
        <div className="note note2 bg-or-primary"></div>
        <div className="note note3 bg-or-primary"></div>
        <div className="note note4 bg-or-primary"></div>
        <div className="note note5 bg-or-primary"></div>
      </div>
      {/* <div className="flex items-center gap-5">
        <div className="note note1 bg-or-primary"></div>
        <div className="note note3 bg-or-primary"></div>
        <div className="note note4 bg-or-primary"></div>
        <div className="note note2 bg-or-primary"></div>
        <div className="note note5 bg-or-primary"></div>

        <div className="note note4 bg-or-primary"></div>
        <div className="note note2 bg-or-primary"></div>
        <div className="note note5 bg-or-primary"></div>
        <div className="note note4 bg-or-primary"></div>
        <div className="note note1 bg-or-primary"></div>
        <div className="note note3 bg-or-primary"></div>
        <div className="note note2 bg-or-primary"></div>
        <div className="note note3 bg-or-primary"></div>
        <div className="note note5 bg-or-primary"></div>
        <div className="note note4 bg-or-primary"></div>
      </div> */}
    </div>
  );
};

export default Loader;
