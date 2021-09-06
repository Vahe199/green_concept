import React from "react";

export const MoneyTransfer = (props: any) => {
  const { color } = props;
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 20H16"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.7778 23V10H16.1111C16.8773 10 17.6121 10.3113 18.1539 10.8654C18.6956 11.4195 19 12.171 19 12.9545C19 13.7381 18.6956 14.4896 18.1539 15.0437C17.6121 15.5978 16.8773 15.9091 16.1111 15.9091H11"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.0209 12.4645H27.0209V7.46448"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.7782 23.7782C21.2398 25.3166 19.2798 26.3642 17.146 26.7886C15.0122 27.2131 12.8005 26.9952 10.7905 26.1627C8.78049 25.3301 7.06253 23.9202 5.85383 22.1113C4.64514 20.3023 4 18.1756 4 16C4 13.8244 4.64514 11.6977 5.85383 9.88873C7.06253 8.07979 8.78049 6.66989 10.7905 5.83733C12.8005 5.00477 15.0122 4.78693 17.146 5.21137C19.2798 5.6358 21.2398 6.68345 22.7782 8.22183L27.0208 12.4645"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
