import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/homepage/HomeHeader";
import Footer from "../components/common/Footer";

const Layout = () => {
  return (
    <div className="bg-montego-bay pb-12">
      <Header />
      <Outlet />
      <div className="max-w-7xl mx-6 lg:mx-auto lg:px-6">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
