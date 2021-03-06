import React from "react";

export const MagnifyingGlass = (props: any) => {
  const { color } = props;
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.35051 10.1495 2 7.25 2C4.35051 2 2 4.35051 2 7.25C2 10.1495 4.35051 12.5 7.25 12.5Z"
        stroke="#5B6770"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9621 10.9625L13.9996 14.0001"
        stroke="#5B6770"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
