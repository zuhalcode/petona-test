import Image from "next/image";
const FruitCard = ({ img, sm, imgW, imgH, colorFrom, colorTo }) => {
  return (
    <div className={` mx-auto grid h-[330px] w-[300px] grid-rows-2 items-center justify-center rounded-md bg-gradient-to-b sm:static sm:z-0 sm:mx-0 sm:mt-5 sm:flex sm:h-auto sm:w-full sm:flex-row ${colorFrom} ${colorTo} `}>
      <div className="row-start-2 flex w-full flex-col overflow-hidden text-center sm:mt-14 sm:w-1/2 sm:text-left">
        <p className="text-md font-[Poppins] font-semibold text-[#FFA500] sm:ml-10 sm:text-[20px]">Buy 1 Get 1</p>
        <p className="text-md font-[Poppins] font-bold sm:ml-10 sm:text-[30px]">Berbagai Macam Sayuran</p>
        <button className="mx-auto mt-5 w-2/3 rounded-xl bg-white py-3 text-[20px] font-bold sm:ml-10 sm:w-[220px] sm:py-5">Beli</button>
      </div>
      <span className="mx-auto mt-4 hidden sm:inline ">
        <Image src={`/img/${img}.png`} width={imgW} height={imgH} alt="fruits" className="w-full" />
      </span>
      <span className="mx-auto mt-4 inline sm:hidden ">
        <Image src={`/img/${img}.png`} width={200} height={200} alt="fruits" className="w-full" />
      </span>
    </div>
  );
};

export default FruitCard;
