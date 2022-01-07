import React from "react"
import styled from "@emotion/styled"
import CloseIcon from "../Icons/closeIcon.inline.svg";
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

  .closeIcon {
    color: white;
    width: 30px;
    position: absolute;
    top: 2rem;
    right: 1rem;
    cursor:pointer;
    fill: none;
    stroke: #ffffff;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }
`
const NavLink = styled.a`
  font-size: 4rem;
  color: var(--white);
  text-decoration: none;
  line-height: 1.1;
`

const HamburgerMenu = () => {
  const hideMenu = () => {
    const menu = document.querySelector(".hamburger-menu")
    menu.style.top = "-90vh"
  }
  return (
    <Nav className="hamburger-menu">
      <i onClick={() => hideMenu()}>
        <CloseIcon  className="closeIcon"/>
      </i>
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
