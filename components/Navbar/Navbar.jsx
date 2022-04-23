import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../features/ComponentSlice";
import SignBtn from "../Sign/SignBtn";
import { Logo } from "./Logo";

export const Navbar = () => {
  const fiture = ["Home", "Shop", "Fitur", "Contact"];
  const [nav, setNav] = useState(false);
  const { status, button, user } = useSelector((state) => state.component);
  const dispatch = useDispatch();

  const renderList = fiture.map((f) => (
    <li key={f} className="cursor-pointer hover:underline hover:decoration-green-500 hover:underline-offset-2">
      <Link href={`/${f.toLowerCase()}` === "/home" ? "/" : `/${f.toLowerCase()}`} passHref>
        <p className={`my-6 ml-5 font-[Poppins] text-lg font-semibold uppercase text-white ${status ? button.text.green : "text-white"}  duration-500 sm:my-0`}>{f}</p>
      </Link>
    </li>
  ));

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(update({ status: false }));
  };
  const handleSetNav = () => setNav(!nav);

  return (
    <>
      <nav className={`relative z-10 flex items-center justify-between p-5 sm:shadow ${nav ? "shadow-none" : "shadow"} ${status ? "bg-white" : "bg-[#00985B]"}  duration-500 `}>
        <div className="cursor-pointer">
          <Logo />
        </div>
        <span className={`flex cursor-pointer sm:hidden ${status ? "text-[green]" : `text-white`} `} onClick={handleSetNav}>
          {nav ? <FontAwesomeIcon icon={faX} className=" w-[30px] text-2xl" /> : <FontAwesomeIcon icon={faBars} className=" w-[30px] text-2xl" />}
        </span>
        <ul
          className={`absolute left-0 right-0 z-[-1] h-auto justify-between ${status ? "bg-white" : "bg-[#00985B]"}  sm:z-auto sm:bg-transparent 
          ${nav ? "top-[80px]" : "top-[-400px]"} ${nav ? "opacity-100" : "opacity-0"}
          transition-all duration-500 ease-in sm:static sm:mx-auto sm:flex sm:w-full sm:opacity-100`}
        >
          <div className=" sm:mx-auto sm:flex sm:items-center">{renderList}</div>
          {!status ? (
            <span className={`relative z-10 hidden sm:inline `}>
              <SignBtn />
            </span>
          ) : user["is_admin"] ? (
            <div className={` mb-3 mt-3 ${status ? "ml-4" : "-ml-5"}  sm:-ml-0 sm:mt-0 sm:flex sm:w-[200px] sm:justify-end`}>
              <button className={`cs-active-btn relative z-10 bg-[green] text-white`} onClick={handleLogout}>
                Admin
              </button>
            </div>
          ) : (
            <div className={` mb-3 mt-3 ${status ? "ml-4" : "-ml-5"}  sm:-ml-0 sm:mt-0 sm:flex sm:w-[200px] sm:justify-end`}>
              <button className={`cs-active-btn relative z-10 bg-[green] text-white`} onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
};
