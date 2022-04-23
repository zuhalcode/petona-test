import FruitCard from "./FruitCard";

export const Card = () => {
  return (
    <div className="grid w-full space-y-2 sm:grid-cols-2 sm:gap-3 sm:space-y-5 ">
      <FruitCard colorFrom="from-[rgba(12,238,147,.2)]" sm={false} colorTo="to-[#00FF99]" img="buahIjo" imgW="296" imgH="261" />
      <FruitCard colorFrom="from-[rgb(255,205,245)]" sm={false} colorTo="to-[rgb(255,108,215)]" img="buahPink" imgW="327" imgH="323" />
    </div>
  );
};
