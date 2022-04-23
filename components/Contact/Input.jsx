const Input = ({ children }) => {
  return (
    <>
      <div className="text-md flex flex-col text-[#7D7D7D]">
        <span className="">{children}</span>
        <div className="underline-blue-600 w-4/5 border-b border-black">
          <input type="text" className="text-sm text-black outline-none" placeholder="Gagah Rizky" />
        </div>
      </div>
    </>
  );
};

export default Input;
