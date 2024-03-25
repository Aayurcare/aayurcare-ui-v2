import React from "react";
import HomeHeader from "../../component/HomeHeader";

const HomeToolbarLayout = ({ children }) => {
  return (
    <div>
      <HomeHeader>sss</HomeHeader>
      {children}
    </div>
  );
};

export default HomeToolbarLayout;
