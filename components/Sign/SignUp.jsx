import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const axios = require("axios");

const SignUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const input = ["Name", "Email", "Password"];

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: state.name,
      email: state.email,
      password: state.password,
    };

    axios
      .post("/users", data)
      .then(() => {
        document.getElementById("popup").classList.toggle("hidden");
        setState({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleClose = () => document.getElementById("popup").classList.toggle("hidden");

  return (
    <>
      <div id="popup" className="absolute top-0 left-[40%] hidden rounded-md bg-green-400 px-3 py-2 text-center text-2xl font-bold text-white">
        Register Successfully
        <span className="cursor-pointer pl-3" onClick={handleClose}>
          <FontAwesomeIcon icon={faX} size="sm" />
        </span>
      </div>
      <div className="h-[350px] w-[300px] rounded-2xl bg-[rgba(255,255,255,.3)] sm:-mt-5 sm:h-[400px] sm:w-[352px]">
        <span className="ml-7 grid pt-5 pb-3 font-[Poppins] text-[26px] font-bold text-white">
          <span className="font-[Poppins] text-[13px] font-light uppercase ">Start For free</span>
          Buat Akun Baru
        </span>
        <form onSubmit={handleOnSubmit} className="mx-auto h-auto w-[270px] gap-2 space-y-3 sm:grid sm:w-[293px] sm:space-y-0 ">
          {input.map((item, index) => (
            <div key={index} className={`mx-3 grid w-4/5 rounded-xl bg-white sm:col-span-2 sm:mx-0 sm:w-full`}>
              <p className="px-3 pt-1 font-[Poppins] text-xs opacity-75 sm:pt-2 ">{item}</p>
              <input
                type={item === "Name" ? "text" : item === "Email" ? "email" : "password"}
                name={item.toLowerCase()}
                className={` sm:text-md h-5 w-full rounded-xl px-3 pb-2 text-sm placeholder-[#008000] outline-none  placeholder:font-[Poppins] placeholder:text-sm sm:h-8 sm:pb-2`}
                placeholder={item === "Name" ? "rizky" : item === "Email" ? "gagahrizky@gmail.com" : "*******"}
                onChange={(e) => handleOnChange(e)}
                autoComplete="off"
                required
                value={state[item.toLowerCase()]}
              />
            </div>
          ))}

          <button type="submit" className=" mx-3 w-4/5 cursor-pointer rounded-lg bg-[green] px-3 py-2 text-center text-[12px] font-bold tracking-wide text-white sm:col-span-2 sm:mx-0 sm:w-full ">
            Daftar
          </button>
        </form>
        <div className="mt-2 flex items-center justify-center font-[Poppins] text-[14px]">
          <p className="font-light text-white ">Sudah mempunyai akun?</p> <span className="mx-1 cursor-pointer font-bold text-[#00FFE0] hover:underline hover:underline-offset-2">Masuk</span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
