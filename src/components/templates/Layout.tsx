import React from 'react';
import TheHeader from '../organisms/TheHeader';
import TheFooter from '../organisms/TheFooter';
import TheModalCookieAgreement from '../organisms/TheModalCookieAgreement';
import TheMobileNavigation from '../organisms/TheMobileNavigation';

const Layout: React.FC = ({ children }) => (
  <div className="flex flex-col h-screen">
    <TheHeader />
    <TheMobileNavigation />
    <TheModalCookieAgreement />
    <main className="flex-grow mt-16 sm:mt-20">
      <div className="mx-auto px-6 py-16 container max-w-screen-md h-full sm:px-8 sm:py-20">
        {children}
      </div>
    </main>
    <TheFooter />
  </div>
);

export default Layout;
