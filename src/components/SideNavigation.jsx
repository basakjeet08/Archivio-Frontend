import React, { useState } from "react";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { NavItem, NavOptions } from "../components/NavigationOptions";

// This is the Sidebar Navigation Function
export const SideNavigation = () => {
  // Expanded State and values
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleExpand = () => setIsExpanded((prev) => !prev);
  const hiddenCss = isExpanded ? "" : "hidden";

  return (
    <div className="h-screen flex flex-col py-8 gap-4 justify-between bg-card border-r-1 border-cardVariant">
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

        <hr className="border-1 border-cardVariant" />
        <NavOptions hiddenCss={hiddenCss} />
      </div>

      {/* Logout Button */}
      <div className="flex flex-col gap-4">
        <hr className="border-1 border-red-400" />
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
