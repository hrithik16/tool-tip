import { useState } from "react";
import ToolTip from "./Component/ToolTip";

function App() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };
  return (
    <div className="App">
      <div className="flex justify-center items-center h-screen">
        <div className="absolute">
          <button
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            type="button"
            className="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Tooltip
          </button>
        </div>
        <div className="">{isHover && <ToolTip position={"top"} />}</div>
      </div>
    </div>
  );
}

export default App;
