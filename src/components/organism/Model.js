import React from "react";

export const Model = ({ title, message, onClose }) => {
  return (
    <div className="absolute h-screen w-screen flex justify-center items-center bg-black/80">
      <div className="block max-w-4xl px-4 pt-2 pb-8 bg-white">
        <button className=" block ml-auto" onClick={onClose}>
          &#10005;
        </button>
        <h1 className="uppercase">{title}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};
