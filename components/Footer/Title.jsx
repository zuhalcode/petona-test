const Title = ({ children }) => {
  return (
    <div className=" mb-3 text-center text-xl font-semibold text-white">
      <span className="flex flex-col items-center justify-center space-y-2">
        <div className="">{children}</div>
      </span>
    </div>
  );
};

export default Title;
