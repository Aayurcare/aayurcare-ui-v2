import React from "react";
import HomeHeader from "../../component/HomeHeader";

const HomeToolbarLayout = ({ children, highlighted }) => {
  return (
    <div>
      <HomeHeader highlighted={highlighted}></HomeHeader>
      {children}
    </div>
  );
};

export default HomeToolbarLayout;
