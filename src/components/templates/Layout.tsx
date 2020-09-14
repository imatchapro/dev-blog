import React from 'react';
import TheHeader from '../organisms/TheHeader';
import TheFooter from '../organisms/TheFooter';
import ModalCookieAgreement from '../molecules/ModalCookieAgreement';

const Layout: React.FC = ({ children }) => (
  <div className="flex flex-col h-screen">
    <TheHeader />
    <main className="flex-grow mt-16 sm:mt-20">
      <div className="mx-auto px-6 py-16 container max-w-screen-md h-full sm:px-12 sm:py-20">
        {children}
      </div>
      <ModalCookieAgreement />
    </main>
    <TheFooter />
  </div>
);

export default Layout;
