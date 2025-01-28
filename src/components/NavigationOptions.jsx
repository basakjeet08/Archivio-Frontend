import React from "react";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoLibraryOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { LuBookCopy } from "react-icons/lu";
import { BsJournalBookmark } from "react-icons/bs";
import {
  DASHBOARD_ROUTE,
  LIBRARY_ROUTE,
  HISTORY_ROUTE,
  AVAILABILITY_ROUTE,
  BOOKS_LENT_ROUTE,
} from "../routes/AppRoutes";

// This is the function that creates all the Nav Options for the sidebar
export const NavItem = ({ title, className, hiddenCss, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-row gap-4 p-3 mx-4 items-center rounded-sm font-medium text-xs cursor-pointer transition-all duration-300 hover:bg-primary active:opacity-30 ${className}`}
    >
      {children}
      {title && <p className={`mr-24 ${hiddenCss}`}>{title}</p>}
    </div>
  );
};

// This is the component that creates the navigation Links Buttons
export const NavOptions = ({ hiddenCss, onClick }) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Dashboard Route */}
      <NavLink to={DASHBOARD_ROUTE} onClick={onClick}>
        <NavItem title="Dashboard" hiddenCss={hiddenCss}>
          <LuLayoutDashboard size={16} />
        </NavItem>
      </NavLink>

      {/* Library Route */}
      <NavLink to={LIBRARY_ROUTE} onClick={onClick}>
        <NavItem title="Library" hiddenCss={hiddenCss}>
          <IoLibraryOutline size={16} />
        </NavItem>
      </NavLink>

      {/* History Route */}
      <NavLink to={HISTORY_ROUTE} onClick={onClick}>
        <NavItem title="History" hiddenCss={hiddenCss}>
          <MdHistory size={16} />
        </NavItem>
      </NavLink>

      {/* Availability Route */}
      <NavLink to={AVAILABILITY_ROUTE} onClick={onClick}>
        <NavItem title="Availibility" hiddenCss={hiddenCss}>
          <LuBookCopy size={16} />
        </NavItem>
      </NavLink>

      {/* Books Lent Route */}
      <NavLink to={BOOKS_LENT_ROUTE} onClick={onClick}>
        <NavItem title="Books Lent" hiddenCss={hiddenCss}>
          <BsJournalBookmark size={16} />
        </NavItem>
      </NavLink>
    </div>
  );
};
