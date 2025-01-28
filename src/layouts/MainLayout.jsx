import React from "react";
import { SideNavigation } from "../components/SideNavigation";
import { DrawerNavigation } from "../components/DrawerNavigation";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <div className="hidden md:block">
        <SideNavigation />
      </div>

      <div className="md:hidden">
        <DrawerNavigation />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
