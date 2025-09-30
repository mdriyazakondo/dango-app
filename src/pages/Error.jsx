import React, { memo } from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center text-center ">
      <div className="shadow p-10 bg-gray-200 rounded-md space-y-4 border border-gray-300">
        <p className="text-5xl text-red-400">404</p>
        <h1 className="text-2xl  text-gray-500">Page Is Not Found</h1>
        <Link to="/">
          <button className="py-1.5 w-full rounded-md bg-blue-400 text-white cursor-pointer">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default memo(Error);
