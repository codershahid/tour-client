import React from "react";
import { Theme } from "../Theme";

export const Home = () => {
  return (
    <Theme>
      <div className="bg-home bg-cover bg-center">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h4 className="uppercase text-xs sm:text-sm md:text-md lg:text-lg font-serif text-white">
            The World's Leading Collection of
          </h4>
          <h1 className="mt-4 uppercase text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-serif text-white">
            EXPERIENTIAL TRAVEL BRANDS
          </h1>
        </div>
      </div>
    </Theme>
  );
};
