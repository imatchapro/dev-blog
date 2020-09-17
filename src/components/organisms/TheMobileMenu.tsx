import React, { useContext } from 'react';
import { MobileMenu } from '../../providers/ProviderMobileMenu';
import HeaderLogo from '../atoms/HeaderLogo';
import ButtonCloseMobileNav from '../atoms/ButtonCloseMobileNav';
import TheContentsNavigation from './TheContentsNavigation';

const TheMobileMenu: React.FC = () => {
  const { stateMobileMenu } = useContext(MobileMenu);

  return (
    <div
      className={
        'flex flex-row w-full h-screen transition-transform duration-500 ease-in-out fixed bg-white z-20 sm:hidden ' +
        stateMobileMenu
      }
    >
      <header className="header">
        <HeaderLogo>MENU</HeaderLogo>
        <ButtonCloseMobileNav />
      </header>
      <TheContentsNavigation rootClassName="mt-16 px-6 py-12 flex-grow overflow-auto" />
    </div>
  );
};

export default TheMobileMenu;
