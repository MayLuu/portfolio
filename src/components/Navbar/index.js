import React from 'react'
import { 
  Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, 
  MobileIcon, MobileMenu, MobileLink, ThemeToggleButton 
} from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a 
            style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}
          >
            <Span>My Luu</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact' >Contact</NavLink>
        </NavItems>

        {/* Always render MobileMenu */}
        <MobileMenu isOpen={isOpen}>
          <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
          <MobileLink href='#skills' onClick={() => setIsOpen(false)}>Skills</MobileLink>
          <MobileLink href='#experience' onClick={() => setIsOpen(false)}>Experience</MobileLink>
          <MobileLink href='#projects' onClick={() => setIsOpen(false)}>Projects</MobileLink>
          <MobileLink href='#education' onClick={() => setIsOpen(false)}>Education</MobileLink>
          <MobileLink href='#contact' onClick={() => setIsOpen(false)}>Contact</MobileLink>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
