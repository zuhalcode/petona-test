import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Choice from "./Choice";

const Selector = ({ children, selector }) => {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => setClicked(!clicked);
  return (
    <div className="relative ml-10 mt-2">
      <p className="mb-1 text-lg font-semibold">{children}</p>
      <div className="flex w-3/4 cursor-pointer items-center justify-between rounded-sm bg-white px-3 py-2 text-center " onClick={handleClicked}>
        {selector} {clicked ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
      </div>
      <div className={` mt-1 ${clicked ? "block" : "hidden"} top-22 absolute z-10 max-h-32 w-3/4 scroll-m-3 overflow-y-auto rounded-sm bg-white`}>
        <Choice>Zuhal</Choice>
        <Choice>Zuhal</Choice>
        <Choice>Zuhal</Choice>
        <Choice>Zuhal</Choice>
        <Choice>Zuhal</Choice>
        <Choice>Zuhal</Choice>
      </div>
    </div>
  );
};

export default Selector;
