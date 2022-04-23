import Cover from "../components/Contact/Cover";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar/Navbar";

const Contact = () => {
  const { status } = useSelector((state) => state.component);
  return (
    <>
      <Navbar />
      <div className={`flex h-[750px] w-full items-center justify-center sm:h-[647px] ${status ? "bg-[green]" : "bg-[#00985B]"} `}>
        <Cover />
      </div>
    </>
  );
};

export default Contact;
