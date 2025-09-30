import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const ShearedLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1600px] mx-auto">
        <Suspense
          fallback={
            <div className="min-h-[80vh] flex items-center justify-center">
              <div class="flex-col gap-4 w-full flex items-center justify-center">
                <div class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                  <div class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                </div>
              </div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default ShearedLayout;
