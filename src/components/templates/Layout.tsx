import React from 'react'
import TheHeader from '../organisms/TheHeader'
import TheFooter from '../organisms/TheFooter'

const Layout: React.FC = ({ children }) => (
  <div className="flex flex-col h-screen">
    <TheHeader />
    <main className="flex-grow mt-16 sm:mt-20">
      <div className="mx-auto px-6 pt-16 pb-20 container max-w-screen-md h-full sm:px-12">
        {children}
      </div>
    </main>
    <TheFooter />
  </div>
)

export default Layout