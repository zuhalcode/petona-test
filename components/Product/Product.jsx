import Image from "next/image";
import ProductBtn from "./ProductBtn";
import StarComponent from "./StarComponent";

const Product = ({ img, imgW, imgH, name }) => {
  return (
    <div className={` ml-5 mr-2 mt-2 h-[349px] w-[211px] flex-col space-y-3 `}>
      <div className="group flex h-[221px] w-[211px] cursor-pointer flex-col items-center justify-center rounded-2xl shadow-[0_1px_10px_0_rgba(0,0,0,0.3)] duration-500 hover:bg-slate-300 hover:shadow-none sm:flex-row ">
        <Image src={`/img/${img}.png`} width={imgW} height={imgH} alt="fruits" className="duration-500 group-hover:opacity-70" priority />
        <ProductBtn />
      </div>
      <p className="text-md text-center font-[Poppins] font-bold sm:block sm:text-xl">{name}</p>
      <StarComponent />
    </div>
  );
};

export default Product;
