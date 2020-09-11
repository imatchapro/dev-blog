import React from 'react';
import HeaderNavigation from '../molecules/HeaderNavigation';
import HeaderLogo from '../atoms/HeaderLogo';

const TheHeader: React.FC = () => {
  return (
    <header className="w-full fixed flex-shrink-0 flex items-center h-16 px-6 bg-white border-b sm:h-20 sm:px-12">
      <HeaderLogo />
      <HeaderNavigation />
    </header>
  );
};

export default TheHeader;
