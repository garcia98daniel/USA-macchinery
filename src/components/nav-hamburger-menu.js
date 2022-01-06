import React from "react"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: none;
  flex-direction: column;
  position: absolute;
  background-color: var(--gray-primary);
  right: 0;
  left: 0;
  top: 0;
  height: 90vh;
  z-index: 100;
  text-align: center;
  justify-content: center;

  i {
    color: white;
    font-size: 3.5rem;
    position: absolute;
    top: 4rem;
    right: 2rem;
  }
`
const NavLink = styled.a`
  font-size: 4rem;
  color: var(--white);
  text-decoration: none;
  line-height: 1;
`

const HamburgerMenu = () => {
  const hideMenu = () => {
    const menu = document.querySelector(".hamburger-menu")
    menu.style.display = "none"
  }
  return (
    <Nav className="hamburger-menu">
      <i onClick={hideMenu} className="fas fa-times"></i>
      <NavLink href="#inicio" activeClassName="pagina-actual">
        Inicio
      </NavLink>
      <NavLink href="#servicios" activeClassName="pagina-actual">
        Servicios
      </NavLink>
      <NavLink href="#nosotros" activeClassName="pagina-actual">
        Nosotros
      </NavLink>
      <NavLink href="#historia" activeClassName="pagina-actual">
        Experiencia
      </NavLink>
      <NavLink href="#clientes" activeClassName="pagina-actual">
        Clientes
      </NavLink>
      <NavLink href="#contacto" activeClassName="pagina-actual">
        Contacto
      </NavLink>
    </Nav>
  )
}

export default HamburgerMenu
