import React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import Header from "../components/header"
import Footer from "../components/footer"
import mainFont from "../fonts/david-regular.otf"
import secondaryFont from "../fonts/Kostic - Roc Grotesk Medium.otf"
import "./layout.css"

const ContactBtn = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  border-radius: 4rem;
  align-items: center;
  position: fixed;
  bottom: 5px;
  right: 5px;
  z-index: 1000;
  position: fixed;
  background-color: #27d366;
  padding: 1rem 2rem;
  width: fit-content;

  i {
    color: white;
    font-size: 2.5rem;
  }
  p {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: white;
    font-weight: bold;
    margin-left: 1rem;
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    i {
      font-size: 3.5rem;
    }
    p {
      font-size: 2rem;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          .loading::before,
          .loading::after {
            filter: blur(15px);
            border-radius: 16px;
          }
          :root {
            --white: #f9f9f9;
            --orange-primary: #fdb337;
            --gray-primary: #32363b;
            --ligt-gray: #a7a8ab;
            --seconday-gray: #828387;
            --warn-black: #33353b;
            ---third-gray: #a7a8ac;
            /* fonts size  */
            --lg: 6rem;
          }
          * {
            box-sizing: border-box;
          }
          html {
            font-size: 62.5%;
            scroll-behavior: smooth;
          }
          body {
            background-color: var(--white);
            margin: 0;
            padding: 0;
            font-size: 1.8rem;
            line-height: 1.5;
            position: relative;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>USA MACHINERY</title>
        <meta
          name="description"
          content="Empresa con mas de 10 años de experiencia en renta y venta de montacargas, venta de refacciones y servicio técnico a clientes con equipos"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:ital,wght@0,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        ></link>
      </Helmet>
      <Header />
      {children}
      <Footer title="USA MACHINERY" />
      <ContactBtn href="#">
        <i className="fab fa-whatsapp"></i>
        <p>Contáctanos</p>
      </ContactBtn>
    </>
  )
}

export default Layout
