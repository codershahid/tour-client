import React from "react";
import { Button } from "../atom/Button";
import { Theme } from "../Theme";

export const Page404 = () => {
  return (
    <Theme>
      <div className="bg-home bg-cover bg-center">
        <div className="flex flex-col justify-center items-center space-y-6 min-h-screen">
          <h4 className="capitalise text-sm sm:text-base md:text-lg font-serif text-white">
            Sorry page not found!
          </h4>
          <Button name="Return to home" link="/" size="base" />
        </div>
      </div>
    </Theme>
  );
};
