/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const DashboedBar: React.FC<any> = (props: any) => {
  const location = useLocation();

  const itemNav = [
    {
      name: "Product",
      url: "/product",
    },
  ];
  return (
    <>
      <div className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl bg-gray-800">
        <div className="p-6">
          <label className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
            Admin
          </label>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          {itemNav?.map((item: any, index: number) => {
            return (
              <>
                <NavLink
                  key={`navLink-${index}`}
                  to={item?.url}
                  className={`${
                    location?.pathname?.includes(item?.name?.toLowerCase())
                      ? "text-[20px] "
                      : "text-[16px] opacity-75"
                  } flex items-center active-nav-link text-white py-4 pl-6 nav-item`}
                >
                  {item?.name}
                </NavLink>
              </>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default DashboedBar;
