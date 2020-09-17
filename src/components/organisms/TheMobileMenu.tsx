import React, { useContext } from 'react';
import { FiCode, FiHome, FiMail, FiPenTool, FiShield } from 'react-icons/fi';
import { MobileMenu } from '../../providers/ProviderMobileMenu';
import ButtonCloseMobileNav from '../atoms/ButtonCloseMobileNav';
import ContentNavItemHeading from '../atoms/ContentNavItemHeading';
import MobileMenuNavItem from '../atoms/MobileMenuNavItem';

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
        <div className="header-logo">MENU</div>
        <ButtonCloseMobileNav />
      </header>
      <nav className="flex-shrink-0 w-full mt-16 py-12 px-6">
        <ul>
          <MobileMenuNavItem>
            <ContentNavItemHeading href={'/'} text="Home" icon={<FiHome />} />
          </MobileMenuNavItem>
          <MobileMenuNavItem>
            <ContentNavItemHeading href={'/blog'} text="Blog" icon={<FiPenTool />} />
          </MobileMenuNavItem>
          <MobileMenuNavItem>
            <ContentNavItemHeading href={'/works'} text="Works" icon={<FiCode />} />
          </MobileMenuNavItem>
          <MobileMenuNavItem>
            <ContentNavItemHeading href={'/contact'} text="Contact" icon={<FiMail />} />
          </MobileMenuNavItem>
          <MobileMenuNavItem>
            <ContentNavItemHeading href={'/privacy'} text="Privacy Policy" icon={<FiShield />} />
          </MobileMenuNavItem>
        </ul>
      </nav>
    </div>
  );
};

export default TheMobileMenu;
