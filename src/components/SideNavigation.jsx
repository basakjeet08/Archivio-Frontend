import React, { useState } from "react";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoLibraryOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { LuBookCopy } from "react-icons/lu";
import { BsJournalBookmark } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {
  DASHBOARD_ROUTE,
  LIBRARY_ROUTE,
  HISTORY_ROUTE,
  AVAILABILITY_ROUTE,
  BOOKS_LENT_ROUTE,
} from "../routes/AppRoutes";
import { FiLogOut } from "react-icons/fi";

// This is the function that creates all the Nav Options for the sidebar
const NavItem = ({ title, className, hiddenCss, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-row gap-4 p-3 mx-4 items-center rounded-sm font-medium text-xs cursor-pointer transition-all duration-300 hover:bg-primary active:opacity-30 ${className}`}
    >
      {children}
      <p className={hiddenCss}>{title}</p>
    </div>
  );
};

// This is the Sidebar Navigation Function
export const SideNavigation = () => {
  // Expanded State and values
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleExpand = () => setIsExpanded((prev) => !prev);
  const hiddenCss = isExpanded ? "" : "hidden";

  return (
    <div className="h-screen flex flex-col py-8 gap-4 justify-between border-r-2 border-cardVariant">
      <div className="flex flex-col gap-4">
        {/* Expand and Collapse Button */}
        <NavItem
          className="border-2 border-primary"
          title="Archivio"
          hiddenCss={hiddenCss}
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <TbLayoutSidebarRightExpand size={16} />
          ) : (
            <TbLayoutSidebarLeftExpand size={16} />
          )}
        </NavItem>

        <hr className="border-2 border-cardVariant" />

        {/* Navigation Routes */}
        <div className="flex flex-col gap-2">
          {/* Dashboard Route */}
          <NavLink to={DASHBOARD_ROUTE}>
            <NavItem title="Dashboard" hiddenCss={hiddenCss}>
              <LuLayoutDashboard size={16} />
            </NavItem>
          </NavLink>

          {/* Library Route */}
          <NavLink to={LIBRARY_ROUTE}>
            <NavItem title="Library" hiddenCss={hiddenCss}>
              <IoLibraryOutline size={16} />
            </NavItem>
          </NavLink>

          {/* History Route */}
          <NavLink to={HISTORY_ROUTE}>
            <NavItem title="History" hiddenCss={hiddenCss}>
              <MdHistory size={16} />
            </NavItem>
          </NavLink>

          {/* Availability Route */}
          <NavLink to={AVAILABILITY_ROUTE}>
            <NavItem title="Availibility" hiddenCss={hiddenCss}>
              <LuBookCopy size={16} />
            </NavItem>
          </NavLink>

          {/* Books Lent Route */}
          <NavLink to={BOOKS_LENT_ROUTE}>
            <NavItem title="Books Lent" hiddenCss={hiddenCss}>
              <BsJournalBookmark size={16} />
            </NavItem>
          </NavLink>
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex flex-col gap-4">
        <hr className="border-2 border-red-400" />
        <NavItem
          className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-onBackground"
          title="Logout"
          hiddenCss={hiddenCss}
        >
          <FiLogOut size={16} />
        </NavItem>
      </div>
    </div>
  );
};
