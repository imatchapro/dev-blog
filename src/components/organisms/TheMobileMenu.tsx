import React, { useContext } from 'react';
import Anime from 'react-anime';
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
        'flex flex-row w-full h-screen transition-transform fixed bg-white z-20 sm:hidden ' +
        stateMobileMenu
      }
    >
      <header className="header">
        <div className="header-logo">MENU</div>
        <ButtonCloseMobileNav />
      </header>
      <nav className="flex-shrink-0 w-full mt-16 py-12 px-6">
        <ul>
          <Anime
            easing="easeOutQuint"
            opacity={[0, 1]}
            duration={800}
            translateX={['30%', '0']}
            delay={(el, index) => 100 * index}
            direction={stateMobileMenu === 'open-mobile-menu' ? 'normal' : 'reverse'}
          >
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
          </Anime>
        </ul>
      </nav>
    </div>
  );
};

export default TheMobileMenu;
