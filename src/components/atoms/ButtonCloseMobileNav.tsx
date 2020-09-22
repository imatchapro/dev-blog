import React, { useContext } from 'react';
import { FiX } from 'react-icons/fi';
import { MobileMenu } from '../../providers/ProviderMobileMenu';

const ButtonCloseMobileNav: React.FC = () => {
  const { handleChangeStateMobileMenu } = useContext(MobileMenu);

  return (
    <button
      onClick={() => handleChangeStateMobileMenu('CLOSE_MOBILE_MENU')}
      className="flex items-center justify-center w-8 h-8 sm:hidden"
    >
      <FiX className="w-6 h-6 text-gray-900" />
    </button>
  );
};

export default ButtonCloseMobileNav;
