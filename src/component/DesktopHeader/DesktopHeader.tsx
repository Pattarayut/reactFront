/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const DesktopHeader: React.FC<any> = (props: any) => {
  const [isClickMenu, setIsClickMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
        <div className="w-1/2"></div>
        <div className="relative w-1/2 flex justify-end">
          <button
            className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
            onClick={() => {
              setIsClickMenu((perv) => !perv);
            }}
          >
            <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
          </button>
          <div
            className={`${
              isClickMenu ? "" : "hidden"
            } absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16 `}
          >
            <p
              className="block px-4 py-2 account-link  cursor-pointer"
              onClick={() => {
                localStorage.removeItem("tokenTestCJ");
                navigate("/login");
              }}
            >
              Sign Out
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default DesktopHeader;
