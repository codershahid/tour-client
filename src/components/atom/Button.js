import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ name, link, size }) => {
  return (
    <Link
      to={link}
      className={
        "flex items-center justify-center py-1 md:py-2 px-2 md:px-4 w-max rounded-sm capitalize bg-blue-800 text-white hover:bg-blue-900 hover:text-white text-" +
        size
      }
    >
      {name}
    </Link>
  );
};
