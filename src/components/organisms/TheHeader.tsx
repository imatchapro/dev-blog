import React from 'react';
import HeaderNavigation from '../molecules/HeaderNavigation';
import HeaderLogo from '../atoms/HeaderLogo';
import ButtonOpenMobileNav from '../atoms/ButtonOpenMobileNav';

const TheHeader: React.FC = () => {
  return (
    <header className="header">
      <HeaderLogo>TAKAYU.DEV</HeaderLogo>
      <HeaderNavigation />
      <ButtonOpenMobileNav />
    </header>
  );
};

export default TheHeader;
