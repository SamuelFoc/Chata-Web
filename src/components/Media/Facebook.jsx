import React from "react";

const Facebook = () => {
  return (
    <div className="my-4">
      <svg
        className="socialIcon"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.9856 20.4929C40.9856 9.17495 31.8108 0 20.4929 0C9.17495 0 0 9.17495 0 20.4929C0 30.7215 7.49394 39.1994 17.2908 40.7368V26.4166H12.0876V20.4929H17.2908V15.978C17.2908 10.842 20.3503 8.00502 25.0312 8.00502C27.2733 8.00502 29.6185 8.40526 29.6185 8.40526V13.4484H27.0345C24.4888 13.4484 23.6948 15.0281 23.6948 16.6487V20.4929H29.3784L28.4698 26.4166H23.6948V40.7368C33.4918 39.1994 40.9856 30.7215 40.9856 20.4929Z"
          fill="white"
        />
      </svg>
      <span className="text-light myFontFamily ms-3 socialText">
        Chata Adamovka
      </span>
    </div>
  );
};

export default Facebook;
