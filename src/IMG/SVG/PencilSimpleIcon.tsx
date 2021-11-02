import React from "react";

export const PencilSimpleIcon = (props: any) => {
  const { color } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 16.875H3.75C3.58424 16.875 3.42527 16.8091 3.30806 16.6919C3.19085 16.5747 3.125 16.4157 3.125 16.25V12.7589C3.125 12.6768 3.14117 12.5955 3.17258 12.5197C3.20398 12.4438 3.25002 12.3749 3.30806 12.3169L12.6831 2.94191C12.8003 2.8247 12.9592 2.75885 13.125 2.75885C13.2908 2.75885 13.4497 2.8247 13.5669 2.94191L17.0581 6.43303C17.1753 6.55024 17.2411 6.70921 17.2411 6.87497C17.2411 7.04073 17.1753 7.1997 17.0581 7.31691L7.5 16.875Z"
        stroke={ color }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.625 5L15 9.375"
        stroke={ color }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
