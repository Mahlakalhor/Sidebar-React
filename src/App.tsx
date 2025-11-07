import React, { useState } from "react";
import { useSidebarStore } from "./store/useSidebarStore";

const App = () => {
  // const [open, setOpen] = useState<boolean>(false);
  const { open, closeSidebar, toggleSidebar } = useSidebarStore();

  return (
    <div>
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <svg
          // onClick={() => setOpen((p) => !p)}
          onClick={toggleSidebar}
          className="absolute top-10 right-10 cursor-pointer hover:fill-[#c5e5fc] animate-[slowScale_1.5s_ease-in-out_infinite]"
          width="40px"
          height="50px"
          viewBox="0 -5 32 32"
          version="1.1"
          fill="#49a6e9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>menu</title>
          <desc>Created with Sketch.</desc>
          <g id="icons" stroke="none" stroke-width="1" fill-rule="evenodd">
            <g
              id="ui-gambling-website-lined-icnos-casinoshunter"
              transform="translate(-2294.000000, -159.000000)"
              fill="##49a6e9"
              fill-rule="nonzero"
            >
              <g id="1" transform="translate(1350.000000, 120.000000)">
                <path
                  d="M974,57 C975.104569,57 976,57.8954305 976,59 C976,60.1045695 975.104569,61 974,61 L946,61 C944.895431,61 944,60.1045695 944,59 C944,57.8954305 944.895431,57 946,57 L974,57 Z M974,48 C975.104569,48 976,48.8954305 976,50 C976,51.1045695 975.104569,52 974,52 L946,52 C944.895431,52 944,51.1045695 944,50 C944,48.8954305 944.895431,48 946,48 L974,48 Z M974,39 C975.104569,39 976,39.8954305 976,41 C976,42.1045695 975.104569,43 974,43 L946,43 C944.895431,43 944,42.1045695 944,41 C944,39.8954305 944.895431,39 946,39 L974,39 Z"
                  id="menu"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <img
          className="w-[212px] h-[120px]"
          src="./src/assets/react.svg"
          alt="React Logo"
        />
        <button
          // onClick={() => setOpen((p) => !p)}
          onClick={toggleSidebar}
          className="border-2 rounded px-1.5 py-0.75 tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer mt-5 w-[172px]"
        >
          TOGGLE MENU
        </button>
      </div>
      <aside
        className={`
          flex flex-col h-screen max-w-[400px] bg-white absolute top-0 w-full
          transition-transform duration-600
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center p-4 ">
          <img
            className="w-10 h-14"
            src="./src/assets/react.svg"
            alt="React Logo"
          />
          <button onClick={closeSidebar}>
            <svg
              // onClick={() => setOpen((p) => !p)}
              className="hover:animate-[spin_1.2s_ease-in-out_infinite] hover:fill-[#e66b6b] cursor-pointer"
              width="24px"
              height="37px"
              viewBox="0 0 15 15"
              version="1.1"
              id="cross"
              fill="#bb2525"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1&#xA;&#x9;c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1&#xA;&#x9;c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1&#xA;&#x9;c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1&#xA;&#x9;C2.2404,1.0029,2.4701,1.0998,2.64,1.27z"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col *:cursor-pointer gap-6 mt-6">
          <li className="hover:bg-[#a5d5f8] px-4 py-2 transition-all">
            <span className="block text-[24px] text-[#617d98] transition-transform duration-300 ease-in-out origin-center hover:text-[#49a6e9] hover:scale-95">
              Home
            </span>
          </li>
          <li className="hover:bg-[#a5d5f8] px-4 py-2 transition-all">
            <span className="block text-[24px] text-[#617d98] transition-transform duration-300 ease-in-out origin-center hover:text-[#49a6e9] hover:scale-95">
              About
            </span>
          </li>
          <li className="hover:bg-[#a5d5f8] px-4 py-2 transition-all">
            <span className="block text-[24px] text-[#617d98] transition-transform duration-300 ease-in-out origin-center hover:text-[#49a6e9] hover:scale-95">
              Projects
            </span>
          </li>
          <li className="hover:bg-[#a5d5f8] px-4 py-2 transition-all">
            <span className="block text-[24px] text-[#617d98] transition-transform duration-300 ease-in-out origin-center hover:text-[#49a6e9] hover:scale-95">
              Contact
            </span>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default App;
