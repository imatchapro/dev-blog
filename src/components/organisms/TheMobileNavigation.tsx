import React, { useContext } from 'react';
import { MenuTrigger } from '../../providers/ProviderMenuTrigger';
import HeaderLogo from '../atoms/HeaderLogo';
import ButtonCloseMobileNav from '../atoms/ButtonCloseMobileNav';
import TheContentsNavigation from './TheContentsNavigation';

const TheMobileNavigation: React.FC = () => {
  const { stateMobileMenu } = useContext(MenuTrigger);

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

export default TheMobileNavigation;
