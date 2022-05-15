import React from "react";
import LogoDash from "../../assets/images/logo-dashboard.png";
import LogoSquare from "../../assets/images/logo-square.png";
import NavHome from "../../assets/images/nav-home.png";
import NavCars from "../../assets/images/nav-cars.png";
import IconUser from "../../assets/images/icon-user.png";
import IconDown from "../../assets/images/fi-chevron-down.png";

function Dashboard() {
  return (
    <>
      <div className="absolute left-16 top-0 right-0 flex h-16 items-center bg-white py-4 px-6 shadow-md">
        <div className="w-1/5">
          <img src={LogoDash} alt="" />
        </div>
        <div className="w-3/5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18H21"
              stroke="#151515"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 12H21"
              stroke="#151515"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#151515"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="mx-2 flex w-2/5 items-center justify-end">
          <input
            type="text"
            name=""
            id=""
            className="border-2 border-slate-200 p-1"
            placeholder="search"
          />
          <button className="border-2 border-blue-700 p-1 font-bold text-blue-700">
            Search
          </button>
          <img className="ml-8 mr-4" src={IconUser} alt="" />
          <h1>Admin</h1>
          <img className="ml-2" src={IconDown} alt="" />
        </div>
      </div>
      <div className="flex">
        <div className="flex w-1/5 ">
          <div className="h-screen w-1/5 justify-center bg-blue-700">
            <img className="px-4 py-3" src={LogoSquare} alt="" />
            <img src={NavHome} alt="" />
            <img src={NavCars} alt="" />
          </div>
          <div className="h-screen w-4/5 bg-white">
            <div className="pt-20">
              <div className="px-6 py-4">
                <h1 className="font-bold text-slate-400">DASHBOARD</h1>
              </div>
              <div className="bg-slate-300 px-6 py-4">
                <h1 className="font-bold text-black">Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-4/5 bg-slate-200 px-4 pt-24">
          <h1 className="text-4xl font-medium">Welcome Admin</h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
