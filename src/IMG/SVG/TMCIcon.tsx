import React from "react";

export const TMC = (props: any) => {
  const { color } = props;
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 23H4C3.46957 23 2.96086 22.7893 2.58579 22.4142C2.21071 22.0391 2 21.5304 2 21V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 27H8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 9H22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 13H22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 5H19C18.4477 5 18 5.44772 18 6V26C18 26.5523 18.4477 27 19 27H29C29.5523 27 30 26.5523 30 26V6C30 5.44772 29.5523 5 29 5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 23V27"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 24C24.8284 24 25.5 23.3284 25.5 22.5C25.5 21.6716 24.8284 21 24 21C23.1716 21 22.5 21.6716 22.5 22.5C22.5 23.3284 23.1716 24 24 24Z"
        fill={color}
      />
    </svg>
  );
};
