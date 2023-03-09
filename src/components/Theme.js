import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./atom/Button";

export const Theme = ({ children }) => {
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 right-0 py-4  px-4 md:px-8 h-max flex justify-between bg-blue-100 border-b">
        <Link to="/" className="text-2xl md:text-3xl">
          Travelopia
        </Link>
        <div className="flex items-center space-x-4">
          <Button name="travellers" link="/travellers" size="base" />
          <Button name="add traveller" link="/add-traveller" size="base" />
        </div>
      </div>
      {children}
    </div>
  );
};
