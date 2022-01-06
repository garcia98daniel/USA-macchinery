import React from "react"
import styled from "@emotion/styled"

const Nav = styled.nav`
  justify-content: center;
  padding-bottom: 3rem;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    padding-bottom: 0;
    margin: auto 0;
  }
`
const NavLink = styled.a`
  color: var(--gray-primary);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
  &.pagina-actual {
    border-bottom: 2px solid white;
  }
`

const Navegacion = () => {
  return (
    <Nav>
      <NavLink href="#inicio" activeClassName="pagina-actual">
        Inicio
      </NavLink>
      <NavLink href="#servicios" activeClassName="pagina-actual">
        servicios
      </NavLink>
      <NavLink href="#nosotros" activeClassName="pagina-actual">
        Nosotros
      </NavLink>
      <NavLink href="#historia" activeClassName="pagina-actual">
        Historia
      </NavLink>
      <NavLink href="#clientes" activeClassName="pagina-actual">
        Marcas
      </NavLink>
    </Nav>
  )
}

export default Navegacion
