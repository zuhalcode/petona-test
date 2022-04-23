import { useDispatch, useSelector } from "react-redux";
import { update } from "../features/ComponentSlice";

const SignBtn = () => {
  const { login, button } = useSelector((state) => state.component);
  const dispatch = useDispatch();

  const handleSignIn = () => dispatch(update({ login: true }));
  const handleSignUp = () => dispatch(update({ login: false }));

  return (
    <div className="  -ml-5 mb-3 mt-3 space-x-8 sm:-ml-0 sm:mt-0 sm:flex sm:w-[200px] sm:justify-end">
      <button className={`relative z-10 ${login ? `cs-normal-btn ${button.text.white}` : `cs-active-btn ${button.bg.white} ${button.text.custom}`} cs-normal-btn`} onClick={handleSignUp}>
        Daftar
      </button>
      <button className={`${login ? `cs-active-btn ${button.text.custom} ${button.bg.white}` : `cs-normal-btn ${button.text.white}`}`} onClick={handleSignIn}>
        Masuk
      </button>
    </div>
  );
};

export default SignBtn;
