import { useSelector } from "react-redux";

export const Logo = () => {
  const { status } = useSelector((state) => state.component);
  return (
    <span className="flex">
      <div className={`relative h-10 w-10 overflow-hidden rounded-md ${status ? "bg-[green]" : "bg-white"} font-[Sahitya]`}>
        <span className={`absolute right-[2px] -bottom-[8px] text-5xl ${status ? "text-white" : "text-[#00985B]"}`}>P</span>
      </div>
      <span className={`-mt-[5.8px] font-[Sahitya] text-4xl ${status ? "text-[green]" : "text-white"}`}>etona</span>
    </span>
  );
};
