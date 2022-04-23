import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProductLine = () => {
  return (
    <div className="relative my-20 mt-10 h-2 w-full">
      <div className="flex items-center justify-between">
        <p className="mb-2 text-[20px] font-bold">Produk Unggulan</p>
        <div className="mb-1">
          <FontAwesomeIcon icon={faAngleLeft} size="xl" className="mr-3 h-6 w-6 cursor-pointer rounded-full bg-slate-200 p-1 duration-300 hover:bg-[green] hover:text-white" />
          <FontAwesomeIcon icon={faAngleRight} size="xl" className="h-6 w-6 cursor-pointer rounded-full bg-slate-200 p-1 duration-300 hover:bg-[green] hover:text-white" />
        </div>
      </div>
      <div className="after:content[''] absolute h-2 w-full bg-slate-300 after:absolute after:z-10 after:h-2 after:w-[129px] after:bg-[#00985B] "></div>
    </div>
  );
};
