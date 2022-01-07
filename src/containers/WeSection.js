import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import weImagen from "../images/hero.png"
import ContactButton from "../components/ContactButton"

const Contenido = styled.section`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  grid-template-columns: 1fr;
  display:flex;
  flex-direction:column;
  align-items:center;
  p {
    margin-top: 0rem;
    font-size: 3rem;
    line-height: 1.2;
    font-weight: bolder;
    color: var(--gray-primary);
    margin-bottom: 2rem;
  }
  .we-wrapper-img{
    width: 100%;
    overflow:hidden;
    display:flex;
    justify-content:center;
  }
  img {
    width: auto;
    height: 500px;
    transform: rotate(9deg);
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 40% 60%;
    padding-bottom: 4rem;
    column-gap: 3rem;
    img {
      width: 105%;
    }
    p {
      font-size: 3.4rem;
    }
    .we-wrapper-img{
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      transform: rotate(9deg);
    }
  }
`

const WeSection = () => {
  return (
    <>
      <Contenido id="nosotros">
        <div className="we-wrapper-img">
          <img src={weImagen} alt="we-image" />
        </div>
        <div
          css={css`
            max-width: 390px;
            @media (max-width: 768px) {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
          `}
        >
          <h3
            css={css`
              font-size: 2.5rem;
              margin: 0 auto;
              margin-top: 1rem;
              margin-bottom: 1rem;
              color: var(--ligt-gray);
            `}
          >
            Nosotros
          </h3>
          <p>
            Comprometidos con el continuo desarrollo de la eficiencia y
            productividad del negocio para nuestros clientes.
          </p>
          <ContactButton />
        </div>
      </Contenido>
    </>
  )
}

export default WeSection
