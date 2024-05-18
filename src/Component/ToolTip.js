import React from "react";

const ToolTip = ({ position }) => {
  return (
    <div
      className={
        "relative rounded-lg p-4 text-white bg-black " +(position === "top"
          ? "mb-32"
          : position === "bottom"
          ? "mt-32"
          : position === "left"
          ? "mr-60"
          : "ml-60")
      }
    >
      Tooltip content
    </div>
  );
};

export default ToolTip;
