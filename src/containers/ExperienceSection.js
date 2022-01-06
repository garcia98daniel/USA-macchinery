import React from "react"
import ContactButton from "../components/ContactButton"
import styled from "@emotion/styled"

const Container = styled.section`
  max-width: 1200px;
  background-color: var(--ligt-gray);
  padding: 5rem 1rem 5rem 1rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
  p {
    color: var(--white);
    font-size: 3rem;
    font-weight: 700;
    max-width: 430px;
    margin: 0 auto;
    line-height: 1;
    margin-bottom: 2rem;
  }
  button {
    margin: 0 auto;
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    padding: 12rem 1rem 12rem 1rem;
    p {
      font-size: 3.4rem;
    }
  }
`

const ExperienceSection = () => {
  return (
    <Container id="historia">
      <p>
        Más de 10 años de experiencia brindandote la mejor opción de montacargas
      </p>
      <ContactButton />
    </Container>
  )
}

export default ExperienceSection
