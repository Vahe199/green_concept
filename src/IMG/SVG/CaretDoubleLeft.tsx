import React from "react";

export const CaretDoubleLeft = (props: any) => {
  const { color } = props;
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8438 15.4375L8.90625 9.5L14.8438 3.5625"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.90625 15.4375L2.96875 9.5L8.90625 3.5625"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
