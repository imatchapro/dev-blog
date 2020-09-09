import React from 'react'
import FooterNavItem from '../atoms/FooterNavItem'

const FooterNavigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center">
        <FooterNavItem path="/blog">Blog</FooterNavItem>
        <FooterNavItem path="/works">Works</FooterNavItem>
        <FooterNavItem path="/contact">Contact</FooterNavItem>
        <FooterNavItem path="/privacy">Privacy Policy</FooterNavItem>
      </ul>
    </nav>
  )
}

export default FooterNavigation
