import React from "react"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: var(--gray-primary);
  right: 0;
  left: 0;
  top: -90vh;
  height: 90vh;
  z-index: 100;
  text-align: center;
  justify-content: center;
  transition: all 0.3s ease-out;

  i {
    color: white;
    font-size: 3.5rem;
    position: absolute;
    top: 4rem;
    right: 2rem;
    cursor:pointer;
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
    menu.style.top = "-90vh"
  }
  return (
    <Nav className="hamburger-menu">
      <i onClick={() => hideMenu()} className="fas fa-times"></i>
      <NavLink onClick={() => hideMenu()} href="#inicio" activeClassName="pagina-actual">
        Inicio
      </NavLink>
      <NavLink onClick={() => hideMenu()} href="#servicios" activeClassName="pagina-actual">
        Servicios
      </NavLink>
      <NavLink onClick={() => hideMenu()} href="#nosotros" activeClassName="pagina-actual">
        Nosotros
      </NavLink>
      <NavLink onClick={() => hideMenu()} href="#historia" activeClassName="pagina-actual">
        Experiencia
      </NavLink>
      <NavLink onClick={() => hideMenu()} href="#clientes" activeClassName="pagina-actual">
        Clientes
      </NavLink>
      <NavLink onClick={() => hideMenu()} href="#contacto" activeClassName="pagina-actual">
        Contacto
      </NavLink>
    </Nav>
  )
}

export default HamburgerMenu
