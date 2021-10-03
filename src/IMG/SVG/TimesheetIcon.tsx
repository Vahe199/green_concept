import React from "react";

export const TimesheetIcon = (props: any) => {
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
        d="M16 10V16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.1962 19L16 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.021 12.4645H28.021V7.46448"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.7782 23.7782C22.2398 25.3166 20.2798 26.3642 18.146 26.7886C16.0122 27.2131 13.8005 26.9952 11.7905 26.1627C9.78049 25.3301 8.06253 23.9202 6.85383 22.1113C5.64514 20.3023 5 18.1756 5 16C5 13.8244 5.64514 11.6977 6.85383 9.88873C8.06253 8.07979 9.78049 6.66989 11.7905 5.83733C13.8005 5.00477 16.0122 4.78693 18.146 5.21137C20.2798 5.6358 22.2398 6.68345 23.7782 8.22183L28.0208 12.4645"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
