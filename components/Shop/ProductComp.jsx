// import Image from "next/image";

const ProductComp = ({ img, name, price, min }) => {
  return (
    <div className={`mt-2 flex max-h-max max-w-[200px] cursor-pointer flex-col border border-slate-500 bg-white shadow`}>
      <div className=" mx-auto flex w-full items-center justify-center bg-slate-200">
        <img src={img} alt={name} className="h-[200px] w-[300px] duration-500" />
      </div>
      <div className="max-w-1/2 mx-auto mt-3 bg-white text-center font-[Poppins]">
        <p className="text-center text-xl font-bold">{name}</p>
        <p className="mb-10">{min} pieces</p>
        <p className="text-xl font-bold">Rp.{price},00</p>
        <div className="w-max-lg my-2 rounded-xl border border-emerald-400 px-2 py-1 text-xs text-green-600 transition-all hover:bg-green-600 hover:text-white">Masukkan Troli</div>
      </div>
    </div>
  );
};

export default ProductComp;
