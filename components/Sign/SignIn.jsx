import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../features/ComponentSlice";
const axios = require("axios");

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { user } = useSelector((state) => state.component);
  console.log("kosong", user);

  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: state.email,
      password: state.password,
    };

    axios
      .post("/users/signin", data)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(update({ status: true, user: res.data }));
      })
      .catch(() => document.getElementById("popup").classList.toggle("hidden"));
  };

  const handleOnChange = (e) => setState({ ...state, [e.target.name]: e.target.value });
  const handleClose = () => document.getElementById("popup").classList.toggle("hidden");

  return (
    <>
      <div id="popup" className="absolute top-0 left-[40%] hidden rounded-md bg-green-400 px-3 py-2 text-center text-2xl font-bold text-white">
        Email atau Password salah
        <span className="cursor-pointer pl-3" onClick={handleClose}>
          <FontAwesomeIcon icon={faX} size="sm" />
        </span>
      </div>
      <div className=" h-[350px] w-[300px] rounded-2xl bg-[rgba(255,255,255,.3)] sm:-mt-5 sm:h-[400px] sm:w-[352px]">
        <div className="ml-7 pt-5 pb-3 font-[Poppins] text-[26px] font-bold text-white">
          Selamat Datang <p>Kembali</p>
          <p className="font-[Poppins] text-[13px] font-light text-white ">Tolong masukan Email dan Password</p>
        </div>
        <form onSubmit={(e) => handleOnSubmit(e)} className="mx-7 flex h-auto w-auto flex-col space-y-4 sm:mx-auto sm:block sm:w-[293px] ">
          <input
            name="email"
            autoComplete="off"
            type="text"
            className="h-1/2 w-full rounded-lg p-3 placeholder-[#008000] outline-none sm:w-full "
            placeholder="gagahrizky@gmail.com"
            onChange={(e) => handleOnChange(e)}
            value={state.email}
            required
          />
          <input
            name="password"
            autoComplete="off"
            type="password"
            className="h-1/2 w-full rounded-lg p-3 placeholder-[#008000] outline-none sm:w-full "
            placeholder="******"
            onChange={(e) => handleOnChange(e)}
            value={state.password}
            required
          />

          <div className="flex w-[293px] items-center space-x-3 ">
            <button type="submit" className="w-2/5 rounded-md bg-[green] px-3 py-2 text-center text-[17px] font-semibold text-white sm:w-[164px] ">
              Masuk
            </button>
            <p className=" text-xs font-semibold text-white sm:text-[11px] ">Lupa Password?</p>
          </div>
          <span className="group flex justify-center text-center font-[Poppins] text-xs font-light sm:text-[14px] ">
            <p className="text-white">Tidak Mempunyai Akun?</p>
            <span className="mx-1 cursor-pointer font-bold text-[#00FFE0] group-hover:underline group-hover:underline-offset-2 ">Buat Akun</span>
          </span>
        </form>
      </div>
    </>
  );
};

export default SignIn;
