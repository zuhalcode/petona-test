import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useSelector } from "react-redux";
import SignIn from "../Sign/SignIn";
import SignUp from "../Sign/SignUp";
import SlideContent from "./SlideContent";

const CoverSlide = () => {
  const { login, status } = useSelector((state) => state.component);

  return (
    <div
      className={` relative -z-10 -mt-[160px] flex ${status ? "mt-[200px] h-[200px]" : "h-[800px]"}  w-full items-center justify-center bg-gradient-to-br pb-5 sm:z-10 sm:-mt-0 sm:h-[556px] sm:pb-0 ${
        status ? `mt-2 from-[white] via-white to-[green]` : `from-[#00985B] via-[#00985B] to-black`
      }`}
    >
      <SlideContent>
        {status ? (
          <>
            <div className="row-span-2 mx-auto my-auto ml-10 hidden sm:block">
              <Image src="/img/fruits.png" width={500} height={300} alt="fruits" />
            </div>
            <div className="mx-auto my-3 items-center sm:my-0 sm:mx-0 sm:flex">
              <button className=" rounded-md bg-[green] px-3 py-1 font-[Poppins] font-bold text-white outline-none sm:px-5 sm:py-3">Temukan barang</button>
              <span className="hidden sm:block">
                <FontAwesomeIcon icon={faAngleRight} size="3x" className="ml-3" color="green" />
              </span>
            </div>
          </>
        ) : login ? (
          <div className="mx-auto mt-3 sm:mx-0 sm:mt-0 sm:flex sm:justify-end">
            <SignIn />
          </div>
        ) : (
          <div className="mx-auto mt-3 sm:mx-0 sm:mt-0 sm:flex sm:justify-end">
            <SignUp />
          </div>
        )}
      </SlideContent>
    </div>
  );
};

export default CoverSlide;
