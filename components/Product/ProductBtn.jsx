import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../features/ComponentSlice";

const ProductBtn = () => {
  const { name, price } = useSelector((state) => state.component);
  const dispatch = useDispatch();

  const updateComponent = () => {
    dispatch(update({ name: "Zuhal ganteng", zuhal: 1 }));
  };

  return (
    <span className="absolute flex h-auto w-auto flex-col items-center justify-center space-x-3 opacity-100 duration-500 group-hover:opacity-100">
      <div className="text-3xl font-bold text-black" onClick={updateComponent}>
        {name}
      </div>
      <div className="text-3xl font-bold text-black" onClick={updateComponent}>
        {price}
      </div>
      <div className="text-3xl font-bold text-black">{name}</div>
      {/* <button className={`relative z-10 h-10 w-10 rounded-full text-center text-2xl text-white outline outline-white duration-500 hover:bg-black`} onClick={() => dispatch({ type: "DEC", payload: 1 })}>
        <p className="absolute -top-1 left-3  text-4xl font-bold">-</p>
      </button>
      <span className={`relative z-10 h-10 w-10 rounded-full bg-white text-center text-2xl font-semibold duration-500`}>
        <p className="absolute  left-[13px] top-[2px] text-[green]">{count.count}</p>
      </span>
      <button className={`relative z-10 h-10 w-10 rounded-full  text-center text-2xl text-white outline outline-white duration-500 hover:bg-black`} onClick={() => dispatch({ type: "INC", payload: 1 })}>
        <p className="absolute -top-1 left-2  text-4xl font-bold">+</p>
      </button> */}
    </span>
  );
};

export default ProductBtn;
