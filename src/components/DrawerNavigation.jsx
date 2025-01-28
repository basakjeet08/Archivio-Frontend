import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { NavItem, NavOptions } from "./NavigationOptions";

export const DrawerNavigation = () => {
  // Expanded state and values
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);
  const hiddenCss = isExpanded ? "flex" : "hidden";

  return (
    <div className="relative w-full py-3 z-10 bg-card">
      {/* Expand and Collapse Button */}
      <NavItem className="border-2 border-primary w-fit" onClick={toggleExpand}>
        {isExpanded ? <RxCrossCircled size={16} /> : <MdMenuOpen size={16} />}
      </NavItem>

      {/* Navigation Drawer */}
      <div
        className={`absolute top-full left-0 flex-col py-4 gap-4 bg-card rounded-sm ${hiddenCss}`}
      >
        <NavOptions hiddenCss={hiddenCss} onClick={toggleExpand} />
        <hr className="border-1 border-red-400" />

        {/* Logout Button */}
        <NavItem
          className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-onBackground"
          title="Logout"
          hiddenCss={hiddenCss}
          onClick={toggleExpand}
        >
          <FiLogOut size={16} />
        </NavItem>
      </div>
    </div>
  );
};
