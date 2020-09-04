import React from 'react';
import TheHeader from "../organisms/TheHeader";
import TheFooter from "../organisms/TheFooter";

const Layout: React.FC = ({children}) => {
  return (
    <div className="flex flex-col h-screen">
      <TheHeader />
      <main className="flex-grow">
        {children}
      </main>
      <TheFooter />
    </div>
  );
};

export default Layout;
