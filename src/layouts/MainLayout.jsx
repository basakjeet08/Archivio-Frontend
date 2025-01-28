import React from "react";
import { SideNavigation } from "../components/SideNavigation";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-row h-screen">
      <SideNavigation />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
