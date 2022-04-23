import { useSelector } from "react-redux";
import Input from "./Input";

const Cover = () => {
  const { status } = useSelector((state) => state.component);

  return (
    <div className=" sm:cs-before-cover sm:before:contents-[''] sm:after:contents-[''] sm:cs-after-cover -mt-[500px] bg-cover sm:relative sm:-mt-0 sm:h-[600px] sm:w-[1200px] sm:bg-[url('/img/cover3.jpg')] ">
      <div className=" mt-32  items-center justify-center sm:flex">
        <h1 className=" relative mb-5 overflow-hidden text-center font-[Poppins] text-4xl font-bold text-white sm:z-10 sm:block sm:text-6xl">Kontak Kami</h1>
      </div>
      <div className="left-[10%] bottom-[10%] z-50 mx-3 flex h-[300px] flex-col sm:absolute sm:w-[80%] sm:flex-row">
        <div className="bg-white shadow-md sm:h-full sm:w-[70%]">
          <h1 className={` mx-5 my-4 font-medium ${status ? "text-[green] " : "text-[#00985B]"}  `}>Kirim Pesan</h1>
          <div className=" mx-5 my-4 grid gap-y-3 sm:grid-cols-2 sm:grid-rows-3">
            <Input>Nama Lengkap</Input>
            <Input>Telepon</Input>
            <Input>Email</Input>
            <Input>Subject</Input>
            <Input>Pesan</Input>
            <button className={`my-3 rounded-xl sm:row-start-4 sm:w-1/2 ${status ? "bg-[green]" : "bg-[#00985B]"}  px-3 py-2 font-semibold text-white `}>Kirim Pesan</button>
          </div>
        </div>
        <div className={`h-full sm:w-[30%] ${status ? "bg-[green]" : "bg-black sm:bg-[#00985B]"} `}>
          <div className="mx-auto my-2 w-4/5 font-semibold text-white sm:my-0">
            <h1 className="my-4 text-xl">Informasi Kontak</h1>
            <div className="grid items-center justify-center gap-5 text-sm">
              <h1 className="">JL. Ketintang No 79, Wonokromo Kota surabaya, Jawa Timur. 60235</h1>
              <h1 className="">+629776766898</h1>
              <h1 className="">Zuhalgans@gmail.com</h1>
              <h1 className="">www.website.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
