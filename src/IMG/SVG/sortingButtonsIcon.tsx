import React from "react";

export const SortingButtons = (props: any) => {
  const { color, handleChange = () => {} } = props;
  return (
    <svg
      width="16"
      height="32"
      viewBox="0 0 16 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 10L8 5L13 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => handleChange("-")}
      />
      <path
        d="M13 22L8 27L3 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => handleChange("+")}
      />
    </svg>
  );
};
