import { useSelector } from "react-redux";
import SignBtn from "../Sign/SignBtn";

const SlideContent = ({ children }) => {
  const { status } = useSelector((state) => state.component);

  return (
    <div className="flex h-[400px] w-4/5 flex-col sm:my-5 sm:grid sm:grid-cols-2 sm:grid-rows-2 ">
      <span className={`text-center text-[30px] font-bold sm:h-5 sm:text-left sm:text-[45px] ${status ? "text-[green]" : `text-white`} -mt-5 `}>Membantu Temukan Sayuran dan Buah-Buahan</span>
      <span className={` col-start-1 row-start-2 mt-5 hidden font-[Poppins] text-[20px] sm:inline ${status ? "text-[green]" : `text-white`}`}>
        <span className="font-bold">Petona</span> hadir untuk temukan sayuran dan buah-buahan terbaik untukmu, untuk dijual dengan sumber terpercaya.
      </span>
      <div className={`mx-auto ${status ? "hidden" : "sm:hidden"} `}>
        <SignBtn />
      </div>
      {children}
    </div>
  );
};

export default SlideContent;
