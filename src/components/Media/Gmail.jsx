import React from "react";

const Gmail = () => {
  return (
    <div className="my-4">
      <svg
        className="socialIcon"
        viewBox="0 0 37 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.4533 2.27833V25.0617C36.4533 26.3527 35.4661 27.34 34.175 27.34H31.8967V6.66337L18.2267 16.4799L4.55667 6.66337V27.34H2.27833C0.985759 27.34 0 26.3527 0 25.0617V2.27833C0 1.63281 0.24606 1.06322 0.654641 0.65616C1.06322 0.243022 1.63432 0 2.27833 0H3.03778L18.2267 11.0119L33.4156 0H34.175C34.8205 0 35.3901 0.24606 35.7987 0.65616C36.2088 1.06322 36.4533 1.63281 36.4533 2.27833Z"
          fill="white"
        />
      </svg>
      <span className="text-light myFontFamily ms-3 socialText">
        chata.adamovka@gmail.com
      </span>
    </div>
  );
};

export default Gmail;
