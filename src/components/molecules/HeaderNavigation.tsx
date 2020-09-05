import React from 'react'
import HeaderNavItem from '../atoms/HeaderNavItem'

const HeaderNavigation: React.FC = () => {
  return (
    <nav className="ml-auto">
      <ul className="flex">
        <HeaderNavItem path="/blog">Blog</HeaderNavItem>
        <HeaderNavItem path="/works">Works</HeaderNavItem>
        <HeaderNavItem path="/contact">Contact</HeaderNavItem>
      </ul>
    </nav>
  )
}

export default HeaderNavigation
