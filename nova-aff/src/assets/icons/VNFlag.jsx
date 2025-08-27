import React from "react";

const VNFlag = ({ className = "", width = 20, height = 15 }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="15" rx="2" fill="#DA020E" />
      <polygon
        points="10,3 11.176,6.118 14.7,6.118 11.762,8.382 12.938,11.5 10,9.236 7.062,11.5 8.238,8.382 5.3,6.118 8.824,6.118"
        fill="#FFFF00"
      />
    </svg>
  );
};

export default VNFlag;
