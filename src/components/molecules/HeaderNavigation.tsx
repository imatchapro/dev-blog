import React from 'react';
import HeaderNavItem from "../atoms/HeaderNavItem";

const HeaderNavigation: React.FC = () => {
  return (
    <nav className="ml-auto">
      <ul className="flex">
        <HeaderNavItem path="">Docs</HeaderNavItem>
        <HeaderNavItem path="">Blog</HeaderNavItem>
        <HeaderNavItem path="">Contact</HeaderNavItem>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;

